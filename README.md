# jltn-auto

Use Plugin

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <!-- Tell the browser to be responsive to screen width -->
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

        <script src="js/jQuery-2.1.4.min.js"></script>
        <!-- Bootstrap 3.3.5 -->
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jltn-auto.js"></script>
        
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/jltn-auto.css">
        

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body class="hold-transition skin-blue sidebar-mini  sidebar-collapse ">
        <div class="wrapper">

            <div class="content-wrapper">

                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group cl1">

                            <input type="text" class="form-control ajaxSelect" data-url='busca.php' value="" />
                        </div>
                    </div><!-- /.content-wrapper -->
                </div>
                
                <footer class="main-footer ">

                    <div class="pull-right hidden-xs">
                        <b>Version</b> 1.0.0
                    </div>
                    <strong>Copyright &copy; 2017 .</strong> All rights reserved.
                </footer>

                <!-- Control Sidebar -->

                <!-- Add the sidebar's background. This div must be placed
                immediately after the control sidebar -->
                <div class="control-sidebar-bg"></div>
            </div><!-- ./wrapper -->

            <!-- Page script -->
            
            <script>
                $(document).ready(function() {
                    ajaxSelect.init('ajaxSelect');

                });

            </script>

            <style>
                

            </style>

    </body>
</html>



