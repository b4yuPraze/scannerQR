$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  data: JSON.stringify({
    title: 'New Post Title',
    body: 'This is the post body content.',
    userId: 1
  }),
  success: function(responseData) {
    console.log('Data fetched successfully:', responseData);
  },
  error: function(error) {
    console.error('Failed to fetch data:', error);
  }
});