import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const phonebookSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Must be min 3 chars')
      .max(50, 'Maximum 50 characters!')
      .matches(/^[a-zA-ZА-Яа-яЇїІіЄєҐґ'’ -]+$/, 'Name cannot contain numbers!')
      .required('This field is required!'),
    number: Yup.string()
      .matches(
        /(^\d{3}-\d{2}-\d{2}$)|(^\+\d{2}-\d{3}-\d{3}-\d{4}$)/,
        'Only numbers in the format xxx-xx-xx and +xx-xxx-xxx-xxxx !'
      )
      .min(3, 'Must be min 3 chars')
      .max(50, 'Maximum 50 characters!')
      .required('Phone number is required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={phonebookSchema}
      >
        <Form style={{ padding: '1px' }}>
          <label htmlFor="name" style={{}}>
            Name
          </label>
          <Field type="text" name="name" id="name"></Field>
          <ErrorMessage name="name" component="p" />
          <label htmlFor="number">Number xxx-xx-xx</label>
          <Field type="text" name="number" id="number"></Field>
          <ErrorMessage name="number" component="p" />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
