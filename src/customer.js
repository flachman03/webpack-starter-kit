import data from './data'

class Customer {
  constructor() {
    this.data = this.getInfo('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  }

  getInfo(url) {
    let data = new Data()
    data.fetchData(url)
  }
}

export default Customer;