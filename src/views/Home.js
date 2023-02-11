import { Grid } from "@mui/material";
import ItemCard from "../component/home/Card";
import Layout from "../layouts/Layout";


function Home() {

  const data = [
    {
      id:1,
      title: "Boat Head Phones",
      price: 999
    },
    {
      id:2,
      title: "USB WIRES",
      price: 99
    },
    {
      id:3,
      title: "Phones",
      price: 1999
    },
    {
      id:4,
      title: "Boat Head Phones",
      price: 999,
      isCart: true
    },
    {
      id:5,
      title: "USB WIRES",
      price: 99
    },
    {
      id:6,
      title: "Phones",
      price: 1999
    }
  ]


  return (
    <Layout>
      <Grid container rowSpacing={2} padding='20px'>

        {data.map(e => {
          return(
          <Grid item xs={3}>
            <ItemCard data={e} />
          </Grid>
          );
        })}

      </Grid>
    </Layout>
  );
}

export default Home;
