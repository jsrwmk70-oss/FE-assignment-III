<!DOCTYPE html>
<html>
<head>
    <title>Theme Changer</title>

    <style>
        body{
            font-family: Arial, sans-serif;
            text-align:center;
            padding-top:100px;
            transition:0.5s;
            background:white;
            color:black;
        }

        .container{
            padding:20px;
        }

        button{
            padding:10px 20px;
            margin:10px;
            font-size:16px;
            cursor:pointer;
            border:none;
            border-radius:5px;
        }

        .light{
            background:white;
            color:black;
        }

        .dark{
            background:#222;
            color:white;
        }

        .blue{
            background:#3498db;
            color:white;
        }

        .green{
            background:#27ae60;
            color:white;
        }
    </style>
</head>

<body>

    <div class="container">
        <h1>Color Theme Changer</h1>
        <p>Select a theme:</p>

        <button onclick="changeTheme('light')">Light</button>
        <button onclick="changeTheme('dark')">Dark</button>
        <button onclick="changeTheme('blue')">Blue</button>
        <button onclick="changeTheme('green')">Green</button>
    </div>

    <script>

        function changeTheme(theme){

            document.body.className = "";

            document.body.classList.add(theme);
        }

    </script>

</body>
</html>
