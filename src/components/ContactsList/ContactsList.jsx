import { useDispatch, useSelector } from 'react-redux';
import { ListedItem, ItemContact, ContactItem, BtnItem } from 'components/ContactsList/ContactsList.styled';
import { deleteContact } from 'redux/operations';
import { selectorIsLoading, shownContacts } from 'redux/selectors';

export const ContactList = ({id, name}) => {

    const contacts = useSelector(shownContacts);
    console.log('1',contacts );
    const isLoading = useSelector(selectorIsLoading);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(deleteContact({id, name}));
    };

   return( 
      <ListedItem>
          {isLoading && <p>Loading...</p>}
          {contacts.map(({id, name,number}) => {
        return (
        <ItemContact key={id}>
            <ContactItem>
                {name}: {number}
            </ContactItem>
            <BtnItem type='submit' onClick={onClick}> Delete </BtnItem>
        </ItemContact>
        );
    })}
</ListedItem>)
}

