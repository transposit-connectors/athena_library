(params) => {
  let results = "";
  try {
    results = api.run('aws_athena.get_query_results', {
      $body: {
        QueryExecutionId: params.queryId
      }
    });
  } catch (e) {
    console.log(e);
    return ["error, check logs"];
  }

  const cols = results[0].Data;

  let data = results.slice(1, results.length).map(d => {
    return d.Data
  });

  let processed_data = data.map((row) => {
    let obj = {};
    row.forEach(function(item, index) {
      let label = cols[index].VarCharValue;
      obj[label] = row[index].VarCharValue;
      return obj;
    });
    return obj;
  })

  return processed_data;
}