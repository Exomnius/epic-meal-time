const button = {
  border: 'none',
  color: '#fff',
  borderRadius: '50% 50%',
  width: '50px',
  height: '50px',
  display: 'inline-block',
  margin: '5px 20px'
};

const EmtTheme = {
  image: {

  },
  description: {

  },
  buttons: {

  },
  button: {
    accept: {
      ...button,
      backgroundColor: 'green'
    },
    decline: {
      ...button,
      backgroundColor: 'red'
    }
  }
};

export default EmtTheme
