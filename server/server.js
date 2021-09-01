/* SECTION: External modules */
const express = require("express");
const routes = require("./routes");

/* SECTION: Internal modules */

/* SECTION: Instanced modules */
const app = express();

/* SECTION: Server/App configuration */
const PORT = process.env.PORT || 4000;

/* SECTION: Middleware */
app.use(express.json());

/* SECTION: Routes */
app.use('/todos', routes.todos);

/* SECTION: Server bind */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});