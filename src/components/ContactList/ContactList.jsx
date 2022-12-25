import PropTypes from 'prop-types';
import {
  ContactsBlock,
  ContactsTitle,
  ContactList,
  ContactItem,
  ContactBtn,
} from './ContactList.styled';

export const Contacts = ({ contactsFiltred, handleDelete }) => (
  <ContactsBlock>
    <ContactsTitle>Contacts</ContactsTitle>
    <ContactList>
      {contactsFiltred.map((contact, id) => (
        <ContactItem key={id}>
          {contact.name}: {contact.number}
          <ContactBtn type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </ContactList>
  </ContactsBlock>
);

Contacts.propTypes = {
  contactsFiltred: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
  handleDelete: PropTypes.func.isRequired,
}