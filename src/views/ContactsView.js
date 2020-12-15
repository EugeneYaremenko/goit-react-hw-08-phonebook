import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Section from '../components/Section/Section';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Spinner from '../components/Spinner/Spinner';

import contactsOperations from '../redux/contacts/contactsOperations';
import contactsSelectors from '../redux/contacts/contacts-selectors';

import contactListFade from '../components/ContactList/fade.module.css';

class ContactsView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { contacts, isLoadingContacts } = this.props;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          {contacts.length > 1 && <Filter />}

          {isLoadingContacts && <Spinner />}
        </Section>

        <CSSTransition timeout={250} classNames={contactListFade}>
          <ContactList />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToPrors = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContact,
};

export default connect(mapStateToPrors, mapDispatchToProps)(ContactsView);
