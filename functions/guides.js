exports.handler = async (event, context) => {

  const guides = [
    {title: 'somme text 1', author: 'alex 1'},
    {title: 'somme text 2', author: 'alex 2'},
    {title: 'somme text 3', author: 'alex 3'},
  ]

  return {
    statusCode: 200,
    body: JSON.stringify(guides)
  }
}
