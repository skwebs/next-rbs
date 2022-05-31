import Head from 'next/head'
import {Container,Form, Button, InputGroup} from 'react-bootstrap'
export default function Home() {
  
  return (
    <>
      <Head>
        <title>Anshu Memorial Academy</title>
        <meta name="description" content="Anshu Memorial Academy CBSE Pattern Based an English Medium School from Std. Play to 8th" />
        <meta name="keywords" content="CBSE English School, Best CBSE School in Rajapakar Hajipur Vaishali, Play School, Anshu Memorial Academy School." />
        <meta name="theme-color" content="#0d6efd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="d-none bg-light text-primary text-center py-3">
        Home
      </h1>
      <Container className="py-3">
        <h2 className="shadow-5-r mt-3" > shadow-5-r</h2>
        <h2 className="shadow-4 mt-3" > shadow-4</h2>
        <h2 className="shadow-6 mt-3" > shadow-6</h2>
        <h2 className="shadow-sharp mt-3" > shadow-sharp</h2>
          <h2 className="shadow-diffuse mt-3" > shadow-diffuse</h2>
          <h2 className="shadow-shorter-r mt-3" > shadow-shorter-r</h2>
          <h2 className="shadow-dreamy mt-3" > shadow-dreamy</h2>
          <h2 className="shadow-longer-r mt-3" > shadow-longer-r</h2>
          <h2 className="box mt-3" > box</h2>
      </Container>
    </>
    )
}