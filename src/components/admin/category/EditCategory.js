import {Container,Button,InputGroup,Form} from "react-bootstrap";


function EditCategory() {
  return (
    <Container className="editcat">
        <div>
            <h3 className="editcattit">Edit Category</h3>
        <InputGroup >
        <Form.Control
          placeholder="Category"
          aria-label="Category"
          aria-describedby="basic-addon1"
          className="editcatinput"
        />
      </InputGroup>

      <Button className="editcatbtn">Save</Button>
        </div>
    </Container>
  )
}

export default EditCategory