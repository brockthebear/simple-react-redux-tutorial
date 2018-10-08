const initState = {
  posts: [
    { id: '1', title: 'The Old Man and the Sea', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat diam eget pulvinar tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat mattis fermentum. Morbi congue pharetra mauris et pharetra. Nam aliquam diam in diam blandit porta. Ut vehicula quam vitae finibus dictum. Maecenas pharetra libero ac nisi hendrerit, ac interdum ipsum ultricies.'},
    { id: '2', title: 'Crime and Punishment', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat diam eget pulvinar tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat mattis fermentum. Morbi congue pharetra mauris et pharetra. Nam aliquam diam in diam blandit porta. Ut vehicula quam vitae finibus dictum. Maecenas pharetra libero ac nisi hendrerit, ac interdum ipsum ultricies.'},
    { id: '3', title: 'The Count of Monte Cristo', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat diam eget pulvinar tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat mattis fermentum. Morbi congue pharetra mauris et pharetra. Nam aliquam diam in diam blandit porta. Ut vehicula quam vitae finibus dictum. Maecenas pharetra libero ac nisi hendrerit, ac interdum ipsum ultricies.'},
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;
