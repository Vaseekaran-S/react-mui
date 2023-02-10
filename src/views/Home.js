import ItemCard from "../component/Card";
import Layout from "./Layout";


function Home() {

  const data = [
    {
      title: "Boat Head Phones",
      price: 999
    },
    {
      title: "USB WIRES",
      price: 99
    },
    {
      title: "Phones",
      price: 1999
    },
    {
      title: "Boat Head Phones",
      price: 999,
      isCart:true
    },
    {
      title: "USB WIRES",
      price: 99
    },
    {
      title: "Phones",
      price: 1999
    }
  ]


  return (
    <Layout>
      <ItemCard data={data} />
    </Layout>
  );
}

export default Home;
