/*!
 * Freelancer for Pico v2.0.7 (https://github.com/mayamcdougall/freelancer-pico)
 * Ported by Maya McDougall (https://github.com/mayamcdougall)
 * Based on upstream Freelancer v7.0.4 by Start Bootstrap (https://startbootstrap.com/theme/freelancer)
 * Licensed under MIT (https://github.com/mayamcdougall/freelancer-pico/blob/main/LICENSE)
 * 
 * Contact Form Script for basic validation and ajax form submission (Without SB Forms).
 */
$(document).ready(function() {
    $("#contactForm").on("submit", function(event) {
        event.preventDefault();
        this.classList.add("was-validated")
        if (this.checkValidity()) {
            $.ajax({
                type: $(this).attr("method"),
                url: $(this).attr("action"),
                data: $(this).serialize(),
                success: function(data) {
                    $("#submitErrorMessage").addClass("d-none")
                    $("#submitSuccessMessage").removeClass("d-none");
                    $("#submitButton").addClass("d-none");
                    $("#contactForm").find(':input:not(:disabled)').prop('disabled',true)
                },
                error: function(data){
                    $("#submitErrorMessage").removeClass("d-none");
                }
            })
        }
    })
})
