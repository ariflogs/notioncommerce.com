import SanityClient from "@sanity/client";

const Client = SanityClient({
  projectId: 'jyzjvvn9',
  dataset: 'production',
  apiVersion: '2021-08-31',
  token: 'sk5y43hSl9m2imwKWLzQyAfXiXMyAg430kK8iS5oLoGU9VmySaKQ9zuZzozotb9lbzLPAu2Er1JAfrIzy7Mau3JOPnzTD5IYbAcv39lJhUeNJ0qYHDl6EZMTiqqtX9jb4tTmL6pM8sX12osMvCNBD9mGLyo9W2crPE2mZ91vFEQIDyQNJGH5',
  useCdn: true
})

export default Client;