import {deleteContact} from 'redux/contactsSlice'
import { useDispatch, useSelector } from 'react-redux';
import {ListedItem,ItemContact, ContactItem, BtnItem} from 'components/ContactsList/ContactsList.styled';
import toast from 'react-hot-toast';

export const ContactList = () => {

    const contacts = useSelector(state=>state.contacts.contacts)
    const filter = useSelector(state => state.contacts.filter)
    const dispatch = useDispatch();

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

       
    const deleteContactId = id => {
        dispatch(deleteContact(id));
        toast.success('Successfully deleted!');
    };

   return( 
      <ListedItem>
          {filteredContacts.map(({id, name,number}) => {
        return (
        <ItemContact key={id}>
            <ContactItem>
                {name}: {number}
            </ContactItem>
            <BtnItem type='submit' onClick={()=> deleteContactId(id)}> Delete </BtnItem>
        </ItemContact>
        );
    })}
</ListedItem>)
}

