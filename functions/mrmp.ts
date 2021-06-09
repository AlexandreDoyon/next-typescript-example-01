exports.handler = async () => {
  console.log('function ran');

  const data = { name: 'Alex', age: 35, job: 'web design' }

  // return reponse to browser
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
