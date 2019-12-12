# Athena Library
Easy athena use.

Use `api.run("athena_library.runQuery",{query: "select...",resultlocation: 'writables3location'});` to run a query.

Use `api.run("athena_library.getQueryResults",{query: "select...",resultlocation: 'writables3location'});` to get results.

Note that this library should not be used to run multiple queries at once.

