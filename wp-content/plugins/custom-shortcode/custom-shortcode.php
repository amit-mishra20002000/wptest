<?php
    /*Plugin Name: Custom Shortcode
    Description: Creating a form with comman fileds and display a form using shortcode
    Version: 1.0
    Author: Custom User*/

    class RSB_Archive {

        public function __construct() {
           // don't call add_shortcode here
           // actually, I worked with wordpress last year and
           // i think this is a good place to call add_shortcode 
           // (and all other filters) now...
        }
    
        public function shortcode() {

            if(isset($_REQUEST['submit'])){
                global $wpdb;
                $first_name = $_REQUEST['first_name'];
                $last_name = $_REQUEST['last_name'];
                $email = $_REQUEST['email'];
                $pass = $_REQUEST['pass'];

                if (empty($first_name)) {
                    $firstNameErr = "First Name is required";
                       
                }elseif (empty($last_name)) {
                    $lasttNameErr = "Last Name is required";
                       
                }elseif(empty($email)){
                    $emailErr = "Email is required";
                }elseif(!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email)){
                    $emailErr= 'error : You did not enter a valid email.';
                    
                }elseif(empty($pass)){
                    $passErr = "Password is required";
                }else{
                    $sql = $wpdb->prepare( "INSERT INTO custom_table (first_name, last_name ,email, password ) VALUES ( %s, %s, %s, %s )", $first_name, $last_name ,$email, md5($pass) );
                    $result = $wpdb->query($sql);

                    if($result){
                        echo 'Record submitted successfully.';
                        $first_name = "";
                        $last_name = "";
                        $email = "";
                        $pass="";
                    }else{
                        echo 'Something issue in data submission.';
                    }
                }
                
            }
            ob_start();
                //echo 'doTheDoo';
            ?>
            <form name="customForm" method="post">
                <div>
                    <label>First Name * </label>
                    <input type="text" name="first_name" value="<?php if(isset($_REQUEST['first_name'])) echo $_REQUEST['first_name']; ?>" id="first_name"/>
                    <span class="error">* <?php if(isset($firstNameErr)){ echo $firstNameErr; }?></span>
                </div>
                <div>
                    <label>Last Name * </label>
                    <input type="text" name="last_name" value="<?php if(isset($_REQUEST['last_name'])) echo $_REQUEST['last_name']; ?>" id="last_name"/>
                    <span class="error">* <?php if(isset($lasttNameErr)){ echo $lasttNameErr; }?></span>
                </div>
                <div>
                    <label>Email * </label>
                    <input type="email" name="email" value="<?php if(isset($_REQUEST['email'])) echo $_REQUEST['email']; ?>" require/>
                    <span class="error">* <?php if(isset($emailErr)){ echo $emailErr; }?></span>
                </div>
                <div>
                    <label>Password * </label>
                    <input type="password" name="pass" id="pass"/>
                    <span class="error">* <?php if(isset($passErr)){ echo $passErr; }?></span>
                </div>
                <div>
                    <input style="cursor:pointer" type="submit" name="submit" value="submit" />
                </div>
            </form>
            <?php
            return ob_get_clean();
        }
    }
    
    $myWidget = new RSB_Archive();
    
    add_shortcode('my-code', array($myWidget, 'shortcode'));

?>
