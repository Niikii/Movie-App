import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { searchMovie, fetchMovies } from "../redux/actions/searchAction";

const Search = (props) => {
  const onChange = (e) => {
    props.searchMovie(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchMovies(props.text);
  };

  return (
    <>
      <Form onSubmit={onSubmit} id="searchForm" inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={onChange}
        />
        <Button
          variant="outline-light"
          type="submit"
        >
          Search
        </Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, { searchMovie, fetchMovies })(Search);
