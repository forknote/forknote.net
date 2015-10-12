---
title: Contact us | Forknote.net
layout: contact
---

<script src="//ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js"></script>

<script>
  // When the browser is ready...
  $(function() {
  
    // Setup form validation on the #new_contact_request element
    $("#new_contact_request").validate({
    
        // Specify the validation rules
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required"
        },
        
        // Specify the validation error messages
        messages: {
            name: "Required field",
            email: "Not a valid email",
            message: "Required field"
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

  });

  $(document).ready(function(){
    $("button#toogle_consult_fields").click(function(){
        $("div#consult_fields").show(500);
    });
  });
</script>

# Contact form

<form accept-charset="UTF-8" action="http://45.32.236.95:4445" class="new_contact_request" id="new_contact_request" method="post">

    <fieldset id="signup-form" class="ga-signup-form azure-enabled">

    <p class="input" id="name">
    <label for="contact_request_user_attributes_name">Name</label>
    <input id="contact_request_user_attributes_name" name="name" type="text">
    </p>

    <p class="input" id="email">
    <label for="contact_request_user_attributes_email">
    Email</label>
    <input id="contact_request_user_attributes_email" name="email" type="email">
    </p>

    <div id="message-textarea">
        <label for="contact_request_message">Message</label>
        <textarea cols="50" id="contact_request_message" name="message" rows="7" style="resize: vertical;"></textarea>
    </div>

    <button class="btn-success js-trial-submit ga-button-trial-form-send" type="submit">
            Send
    </button>
    </fieldset>
</form><!-- /form -->
