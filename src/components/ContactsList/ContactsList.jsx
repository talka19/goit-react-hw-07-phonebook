import { useDispatch, useSelector } from 'react-redux';
import { ListedItem, ItemContact, ContactItem, BtnItem } from 'components/ContactsList/ContactsList.styled';
import { deleteContact } from 'redux/operations';
import { selectorIsLoading, shownContacts } from 'redux/selectors';

export const ContactList = () => {

    const contacts = useSelector(shownContacts);
    const isLoading = useSelector(selectorIsLoading);
    const dispatch = useDispatch();

    const onClick = id => {
        dispatch(deleteContact({id}));
    };


   return( 
      <ListedItem>
          {isLoading && <p>Loading...</p>}
          {contacts.map(({id, name, number}) => {
        return (
        <ItemContact key={id}>
            <ContactItem>
                {name}: {number}
            </ContactItem>
            <BtnItem type='submit' onClick={() => onClick(id)}> Delete </BtnItem>
        </ItemContact>
        );
    })}
</ListedItem>)
}

