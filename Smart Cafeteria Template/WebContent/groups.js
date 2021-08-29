<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Cafeteria</title>

    <!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js" type="text/javascript"></script>
    <![endif]-->

    <link href="assets/css/grid.css" rel="stylesheet">
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
    <link href="assets/css/base-admin.css" rel="stylesheet">
    <link href="assets/css/base-admin-responsive.css" rel="stylesheet">
    <link href="assets/css/dashboard.css" rel="stylesheet">

    <link href="assets/css/application.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">

  </head>
  <body>
    <div class="container-outer">
      <div class="container-inner">
        <div class="sixteen columns">
          <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
              <div class="container">

                <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </a>

                <!-- Be sure to leave the brand out there if you want it shown -->
                <a class="brand" href="#"><span>Smart Cafeteria</span></a>
                <ul class="nav">
                  <li class=""><a href="dashboard.html">Dashboard</a></li>
                </ul>
                <!-- Everything you want hidden at 940px or less, place within here -->
                <div class="nav-collapse collapse">
                  <ul class="nav pull-right">
                    <li><a href="#"><i class="icon-user"></i>Welcome Richard</a></li>
                    <li class="divider-vertical"></li>
                    <li><a href="login.html"><i class="icon-off"></i>Logout</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-outer">
      <div class="container-inner">
        <div class="sixteen columns">
          <div class="one-one column">
            <div class="widget">

              <div class="widget-header">
                <i class="icon-user"></i>
                <h3>Friends' Activity</h3>
                <div class="pull-right">
                  <!--a class="btn btn-mini button-icon" href="create-menu.html"><i class="icon-plus"></i> &nbsp;</a-->
                </div>
              </div> <!-- /widget-header -->

              <div class="widget-content">

                <div class="one-one column">
                  <div class="pagination pagination-centered">
                    <ul>
                      <li><a href="#">Prev</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">Next</a></li>
                    </ul>
                  </div>
                </div>

                <div class="one-one column">

                  <!--Body content-->
                  <div class="widget">

                    <div class="widget">
                      <div class="food-item has-alternative">
                              <img src="assets/img/friends/abdullah.png" class="img-polaroid scale-with-grid">
                       </div>
                      <h5>Abdullah</h3> 
                      
                    </div> <!-- /widget-header -->
                    
                    <div class="widget-content has-footer">

                      <div class="tabbable"> <!-- Only required for left/right tabs -->
                       
                        <div class="tab-content">
						  <div class="tab-pane active" id="activity1">
                              <div class="food-item has-alternative">
                              <i class="icon-food"></i>
                              <span>Going to Mensa at <a>Povo</a> for
							  <a>lunch</a></span>
                              </div>
                           
                          </div>
						  
                          
                          
                        </div>
                      </div>

                    </div> <!-- /widget-content -->

                    <!-- /widget-header -->
                  </div> <!-- /widget -->
                </div>
                
                <div class="one-one column">

                  <!--Body content-->
                  <div class="widget">

                    <div class="widget-header">

                      <div class="food-item has-alternative">
                              <img src="assets/img/friends/abdullah.png" class="img-polaroid scale-with-grid">
                       </div>
                      <h3>Abdullah</h3>
                      
                    </div> <!-- /widget-header -->

                    <div class="widget-content has-footer">

                      <div class="tabbable"> <!-- Only required for left/right tabs -->
                       
                        <div class="tab-content">
						  <div class="tab-pane active" id="activity2">
                              <div class="food-item has-alternative">
                              <i class="icon-food"></i>
                              <span>Going to Mensa at Povo</span>
                              </div>
                              <br>
                              <i class="icon-heart"></i>
                              <span>Started to follow <a>Richard</a></span>
                            
                          </div>
						  
                          
                          
                        </div>
                      </div>

                    </div> <!-- /widget-content -->

                    
                    

                
                
                <div class="one-one column">
                  <div class="pagination pagination-centered">
                    <ul>
                      <li><a href="#">Prev</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">Next</a></li>
                    </ul>
                  </div>
                </div>
              </div> <!-- /widget-content -->

            </div> <!-- /widget -->
			</div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">

      <div class="footer-inner">

        <div class="container">

          <div class="row">

            <div class="span12">
              &copy; 2012 <a href="#">Smart Cafeteria</a>.
            </div> <!-- /span12 -->

          </div> <!-- /row -->

        </div> <!-- /container -->

      </div> <!-- /footer-inner -->

    </div> <!-- /footer -->

    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/excanvas.min.js"></script>

    <script src="assets/js/bootstrap-transition.js"></script>
    <script src="assets/js/bootstrap-alert.js"></script>
    <script src="assets/js/bootstrap-modal.js"></script>
    <script src="assets/js/bootstrap-dropdown.js"></script>
    <script src="assets/js/bootstrap-scrollspy.js"></script>
    <script src="assets/js/bootstrap-tab.js"></script>
    <script src="assets/js/bootstrap-tooltip.js"></script>
    <script src="assets/js/bootstrap-popover.js"></script>
    <script src="assets/js/bootstrap-button.js"></script>
    <script src="assets/js/bootstrap-collapse.js"></script>
    <script src="assets/js/bootstrap-carousel.js"></script>
    <script src="assets/js/bootstrap-typeahead.js"></script>
  </body>
</html>