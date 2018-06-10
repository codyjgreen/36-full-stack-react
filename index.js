'use strict';

const express = require('express');
let cors = require('cors');

const app = express();

app.use(cors());

const uuidv1 = require('uuid/v1');

const PORT = process.env.PORT || 3000;

let newCategoryId = uuidv1();
let newExpenseId = uuidv1();

app.get('*', (req, res) => {
  res.send([
    {
      categories: [
        {
          id: newCategoryId,
          isEditing: false,
          name: 'Food',
          budget: '500'
        }
      ]
      // expenses: [
      //   {
      //     id: newExpenseId,
      //     isEditing: false,
      //     name: 'Whole Foods',
      //     amount: '15',
      //     timestamp: Date.now(),
      //     categoryId: newCategoryId
      //   }
      // ]
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Listening in at http://localhost:${PORT}`);
});
