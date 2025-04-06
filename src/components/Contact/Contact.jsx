import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
