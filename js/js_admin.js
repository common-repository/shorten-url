/* =====================================================================================
*
*  Permet le reset d'une URL courte
*
*/

function resetLink (num) {
	jQuery("#wait"+num).show();
	jQuery("#lien"+num).html("Reset in progress...");

	var security = jQuery('#resetLink_' + num).attr('data-su-security');

	//Supprime la ligne
	var arguments = {
		action: 'handle_request',
		cmd: 'reset_link',
		security: security,
		idLink : num
	} 
	//POST the data and append the results to the results div
	jQuery.post(ajaxurl, arguments, function(response) {
		jQuery("#wait"+num).fadeOut();
		jQuery("#lien"+num).html(response);
	});    
}

/* =====================================================================================
*
*  Affiche le formulaire de changement de url force
*
*/

function forceLink (num) {
	var response = "<label for='shorturl"+num+"'>"+site+"/</label><input name='tag-name' id='shorturl"+num+"' value='' size='10' type='text'><input type='submit' name='' id='valid"+num+"' class='button-primary validButton' value='Update' onclick='validButtonF(this);' /><input type='submit' name='' id='cancel"+num+"' class='button cancelButton' value='Cancel' onclick='cancelButtonF(this);' />" ; 
	jQuery("#lien"+num).html(response);
}

/* =====================================================================================
*
*  Cancel du formulaire
*
*/

function cancelButtonF (element) {
	var num = element.getAttribute("id").replace("cancel","") ;
	jQuery("#wait"+num).show();

	var security = jQuery('#resetLink_' + num).attr('data-su-security');

	var arguments = {
		action: 'handle_request',
		cmd: 'cancel_link',
		security: security,
		idLink : num
	} 
	//POST the data and append the results to the results div
	jQuery.post(ajaxurl, arguments, function(response) {
		jQuery("#wait"+num).fadeOut();
		jQuery("#lien"+num).html(response);
	});    
}

/* =====================================================================================
*
*  Valid du formulaire
*
*/

function validButtonF (element) {
	var num = element.getAttribute("id").replace("valid","") ;
	jQuery("#wait"+num).show();

	var security = jQuery('#resetLink_' + num).attr('data-su-security');

	var arguments = {
		action: 'handle_request',
		cmd: 'valid_link',
		security: security,
		idLink : num,
		link : document.getElementById("shorturl"+num).value
	} 
	
	//POST the data and append the results to the results div
	jQuery.post(ajaxurl, arguments, function(response) {
		jQuery("#wait"+num).fadeOut();
		jQuery("#lien"+num).html(response);
	});    
}








/* =====================================================================================
*
*  Permet le reset d'une URL courte
*
*/

function resetLink_external (num) {
	jQuery("#wait_external"+num).show();
	jQuery("#lien_external"+num).html("Reset in progress...");

	var security = jQuery('#resetLink_external' + num + '_' + num).attr('data-su-security');

	var arguments = {
		action: 'handle_request',
		cmd: 'reset_link_external',
		security: security,
		idLink : num
	}

	//POST the data and append the results to the results div
	jQuery.post(ajaxurl, arguments, function(response) {
		jQuery("#wait_external"+num).fadeOut();
		jQuery("#lien_external"+num).html(response);
	});    
}

/* =====================================================================================
*
*  Affiche le formulaire de changement de url force
*
*/

function forceLink_external (num) {
	var response = "<label for='shorturl_external"+num+"'>"+site+"/</label><input name='tag-name' id='shorturl_external"+num+"' value='' size='10' type='text'><input type='submit' name='' id='valid_external"+num+"' class='button-primary validButton' value='Update' onclick='validButtonF_external(\""+num+"\");' /><input type='submit' name='' id='cancel_external"+num+"' class='button cancelButton' value='Cancel' onclick='cancelButtonF_external(\""+num+"\");' />" ; 
	jQuery("#lien_external"+num).html(response);
}

/* =====================================================================================
*
*  Cancel du formulaire
*
*/

function cancelButtonF_external (num) {
	jQuery("#wait_external"+num).show();

	var security = jQuery('#resetLink_external' + num + '_' + num).attr('data-su-security');
	
	var arguments = {
		action: 'handle_request',
		cmd: 'cancel_link_external',
		security: security,
		idLink : num
	} 
	//POST the data and append the results to the results div
	jQuery.post(ajaxurl, arguments, function(response) {
		jQuery("#wait_external"+num).fadeOut();
		jQuery("#lien_external"+num).html(response);
	});    
}

/* =====================================================================================
*
*  Valid du formulaire
*
*/

function validButtonF_external (num) {
	jQuery("#wait_external"+num).show();

	var security = jQuery('#resetLink_external' + num + '_' + num).attr('data-su-security');

	var arguments = {
		action: 'handle_request',
		cmd: 'valid_link_external',
		security: security,
		idLink : num,
		link : document.getElementById("shorturl_external"+num).value
	} 
	
	//POST the data and append the results to the results div
	jQuery.post(ajaxurl, arguments, function(response) {
		jQuery("#wait_external"+num).fadeOut();
		jQuery("#lien_external"+num).html(response);
	});    
}

/* =====================================================================================
*
*  Delete an entry
*
*/

function deleteLink_external (num) {
	jQuery("#wait_external"+num).show();

	var security = jQuery('#deleteLink_external' + num + '_' + num).attr('data-su-security');

	var arguments = {
		action: 'handle_request',
		cmd: 'delete_link_external',
		security: security,
		idLink : num
	} 
	
	//POST the data and append the results to the results div
	jQuery.post(ajaxurl, arguments, function(response) {
		jQuery("#wait_external"+num).fadeOut();
		jQuery("#lien_external"+num).html("Deleted");
		jQuery("#ligne"+num).fadeOut() ; 
	});    
}