var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(4000, function () {
  console.log('API app started')
})

var Users = [
  {
    id: 1,
    login: 'Metallica',
    password: 'Metal',
  },
  {
    id: 2,
    login: 'Iron',
    password: 'Maiden',
  },
  {
    id: 3,
    login: 'Deep',
    password: 'Purple',
  }
];

var UsersWithoutPassword = JSON.parse(JSON.stringify(Users));

for(i in UsersWithoutPassword) {
   delete UsersWithoutPassword[i].password;
}

app.get('/Users', function (req, res) {
    res.send(UsersWithoutPassword);
});

app.get('/Users/:id', function (req, res) {
  var User = UsersWithoutPassword.find(function (User) {
    return User.id === Number(req.params.id);
  })
  res.send(User);
});

app.post('/Users', function (req, res) {
  var User = {
    id: Users.lenght,
    login: req.body.login,
    password: req.body.password,
  }
  Users.push(User);
  res.send(User);
})

app.put('/Users/:id', function (req, res) {
  var User = Users.find(function (User) {
    return User.id === Number(req.params.id)
  });
  User.login = req.body.login;
  User.password = req.body.password;
  res.send(User);
})

app.delete('/Users/:id', function (req, res) {
  Users = Users.filter(function (User) {
    return User.id !== Number(req.params.id)
  })
  Tasks = Tasks.forEach(function (Task) {
    return Task.id === Number(req.params.id) ? Task.id = null : Task.id;
  })
  res.sendStatus(200);
})

var Boards = [
  {
    id: 1,
    title: 'title1',
    columns: 2,
  },
  {
    id: 2,
    title: 'title2',
    columns: 3,
  },
  {
    id: 3,
    title: 'title3',
    columns: 2,
  }
];

app.get('/Boards', function (req, res) {
    res.send(Boards);
});

app.get('/Boards/:id', function (req, res) {
  var Board = Boards.find(function (Board) {
    return Board.id === Number(req.params.id);
  })
  res.send(Board);
});

app.post('/Boards', function (req, res) {
  var Board = {
    id: Boards.lenght,
    title: req.body.title,
    columns: req.body.columns,
  }
  Boards.push(Board);
  res.send(Board);
})

app.put('/Boards/:id', function (req, res) {
  var Board = Boards.find(function (Board) {
    return Board.id === Number(req.params.id)
  });
  User.title = req.body.title;
  User.columns = req.body.columns;
  res.send(Board);
})

app.delete('/Boards/:id', function (req, res) {
  Boards = Boards.filter(function (Board) {
    return Board.id !== Number(req.params.id)
  })
  Tasks = Tasks.filter(function (Task) {
    return Task.id !== Number(req.params.id)
  })
  res.sendStatus(200);
})

var Columns = [
  {
    id: 1,
    title: 'title1',
    order: 'columns',
  },
  {
    id: 2,
    title: 'title2',
    order: 'columns',
  },
  {
    id: 3,
    title: 'title3',
    order: 'columns',
  }
];

var Tasks = [
  {
    id: 1,
    title: 'titleTask1',
    order: 'orderTask1',
    description: 'Task1',
    userId: 2,
    boardId: 1,
    columnId: 3,
  },
  {
    id: 2,
    title: 'titleTask2',
    order: 'orderTask2',
    description: 'Task2',
    userId: 3,
    boardId: 3,
    columnId: 1,
  },
  {
    id: 3,
    title: 'titleTask3',
    order: 'orderTask3',
    description: 'Task3',
    userId: 2,
    boardId: 2,
    columnId: 2,
  }
];
app.get('/Tasks', function (req, res) {
    res.send(Tasks);
});

app.get('/Tasks/:id', function (req, res) {
  var Task = Tasks.find(function (Task) {
    return Task.id === Number(req.params.id);
  })
  res.send(Task);
});

app.get('/Tasks//:boardId', function (req, res) {
  var Task = Tasks.find(function (Task) {
    return Task.boardId === Number(req.params.boardId);
  })
  console.log(req.params.boardId);
  res.send(Task);
});

app.post('/Tasks', function (req, res) {
  var Task = {
    id: Tasks.lenght,
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.body.boardId,
    columnId: columnId,
  }
  Tasks.push(Task);
  res.send(Task);
})

app.put('/Tasks/:id', function (req, res) {
  var Task = Tasks.find(function (Task) {
    return Task.id === Number(req.params.id)
  });
  Task.name = req.body.name;
  res.send(Task);
})

app.delete('/Tasks/:id', function (req, res) {
  Tasks = Tasks.filter(function (Task) {
    return Task.id !== Number(req.params.id)
  })
  res.sendStatus(200);
})
