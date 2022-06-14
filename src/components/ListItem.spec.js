import { mount } from '@cypress/vue';
import ListItem from './ListItem.vue';

const createListItem = () => {
  return mount(<ListItem />)
}

describe('ListItem', () => {
  it('renders the list item', () => {
    mount(<ListItem />)
    cy.get('div').invoke('attr', 'role').should('eq', 'listbox')
  })
})