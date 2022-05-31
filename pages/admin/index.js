import Head from 'next/head'
import {Container,Form, Button, InputGroup} from 'react-bootstrap'
import CommonHeader from '../../components/CommonHeader'
export default function Admin() {
  
  return (
    <>
      <Head>
      <CommonHeader/>
        <title>Anshu Memorial Academy</title>
        <meta name="description" content="Anshu Memorial Academy CBSE Pattern Based an English Medium School from Std. Play to 8th" />
        <meta name="keywords" content="CBSE English School, Best CBSE School in Rajapakar Hajipur Vaishali, Play School, Anshu Memorial Academy School." />
        <meta name="theme-color" content="#ffc107" />
        <meta name="msapplication-TileColor" content="#ffc107" />
        <meta name="msapplication-TileImage" content="http://v1.anshumemorial.in/ms-icon-144x144.png" />
        {/* og tags */}
        <meta property="og:type" content="website" />
		<meta property="og:url" content="http://v1.anshumemorial.in/" />
		<meta property="og:title" content=":: Home | Anshu Memorial Academy ::" />
		<meta property="og:description" content="Anshu Memorial Academy CBSE Pattern Based an English Medium School from Std. Play to 8th" />
		<meta property="og:locale" content="en_IN" />
		
		{/*twitter tags*/}
		<meta name="twitter:card" content="Anshu Memorial Academy (AMA)" />
		<meta name="twitter:site" content="@AnshuMemorial" />
		<meta property="twitter:url" content="http://v1.anshumemorial.in/" />
		<meta property="twitter:title" content=":: Home | Anshu Memorial Academy ::" />
		<meta property="twitter:description" content="Anshu Memorial Academy CBSE Pattern Based an English Medium School from Std. Play to 8th" />
		<meta property="twitter:image" content="http://v1.anshumemorial.in/favicon/apple-icon-180x180.png" />
		{/* icons */}
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="translucent black" />
		
		<link rel="apple-touch-icon" sizes="120x120" href="https://v1.anshumemorial.in/apple-icon-120x120.png" />
		<link rel="apple-touch-icon" sizes="180x180" href="https://v1.anshumemorial.in/apple-icon-180x180.png" />
		<link rel="icon" type="image/png" sizes="96x96" href="https://v1.anshumemorial.in/favicon.png" />
		<link rel="shortcut icon" type="image/x-icon" href="https://v1.anshumemorial.in/favicon.ico" />
		<link rel="manifest" href="https://v1.anshumemorial.in/manifest.json" />

      </Head>
      <h1 className="bg-light text-warning text-center py-3">
        Admin
      </h1>
      <Container className="py-3">
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Container>
    </>
    )
}