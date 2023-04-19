import {useState} from "react";
import { addContact } from "redux/contactsSlice";
import {Form, LabelStyle,InputNameStyle, InputNumberStyle } from "components/ContactForm/ContactForm.styled"
import { useDispatch, useSelector} from "react-redux";
import shortid from 'shortid';
import toast from 'react-hot-toast';


export function ContactForm () {
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');

   const contacts = useSelector(state=>state.contacts.contacts)
   const dispatch = useDispatch();
  
    const handleChange = e => {
        const {name, value} = e.currentTarget;

       switch (name) {
        case 'name':
            setName(value); 
            break;
        case 'number':
            setNumber(value);
            break; 
        default:
            return;
       }
    };

    const handleSubmit = e => {
        e.preventDefault();
        formSubmitHandler ({ name, number });
        resetForm();
    };

    const formSubmitHandler = ({ name, number }) => {
      
        const normalizedName = name.toLowerCase();
        const isFoundName = contacts.some(
          contact => contact.name.toLowerCase() === normalizedName
        );

        if (isFoundName) {
            toast.error(`${name} is already in contacts!`);
            return;
        }
        const newContact = {
            id: shortid.generate(),name,number};
        dispatch(addContact(newContact));
        toast.success('Successfully added!');
        
    }

    const resetForm = () => {
        setName('');
        setNumber('');
    };

        return (
            <Form onSubmit={handleSubmit}>
                <LabelStyle>
                    Name
                    <InputNameStyle
                      value={name}
                      onChange={handleChange}
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required
                    />
                </LabelStyle>
                <LabelStyle>
                    Number
                    <InputNumberStyle
                      value={number}
                      onChange={handleChange}
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                    />
                </LabelStyle>
                <button type="submit">
                    Add contact
                </button>
            </Form>
        )
    }