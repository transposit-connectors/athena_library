(params) => {
  let executionId = api.run("aws_athena.start_query_execution", {
    $body: {
      QueryString: params.query,
      ClientRequestToken: api.run("this.makeId")[0],
      ResultConfiguration: {
        OutputLocation: params.resultlocation
      }
    }
  })[0]["QueryExecutionId"];
  
  return {
    queryId: executionId
  }
}
