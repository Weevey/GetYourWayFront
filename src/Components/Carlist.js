// class Carlist extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { cars: [] };
//   }

//   componentDidMount() {
//     this.fetchCars();
//   }

//   fetchCars = () => {
//     // Read the token from the session storage
//     // and include it to Authorization header
//     const token = sessionStorage.getItem("jwt");
//     fetch(SERVER_URL + "api/cars", {
//       headers: { Authorization: token },
//     })
//       .then((response) => response.json())
//       .then((responseData) => {
//         this.setState({
//           cars: responseData._embedded.cars,
//         });
//       })
//       .catch((err) => console.error(err));
//   };
