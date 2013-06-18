$(function(){
    // Get GroupDocs button to toolbar
    var toolbar = jQuery.get('#data_toolbar1');
    // Waiting for toolbar initialization
    toolbar.success(function(data) {
        // Add GroupDocs button to toolbar
        var icon = '<td style="position: relative"><a role="button" id="content_grpdocsass" href="javascript:;" class="mceButton mceButtonEnabled mce_grpdocsass" onmousedown="return false;" onclick="return false;" aria-labelledby="content_grpdocsass_voice" title="GroupDocs Assembly" tabindex="-1"><span class="mceIcon mce_grpdocsass"><img class="mceIcon" src="../e107_plugins/groupdocs_assembly/images/icon_16.png" alt="GroupDocs Assembly"></span><span class="mceVoiceLabel mceIconOnly" style="display: none;" id="content_grpdocsass_voice">GroupDocs Assembly</span></a></td>';
        var data_toolbar1 = jQuery('#data_toolbar1');
        var last_child = data_toolbar1.find('.mceToolbarEnd');
        last_child.before(icon);
        
        // Toolbar button open action
        jQuery('#content_grpdocsass').bind('click', function(){
            var popupHtml = '<div id="gdass-dialog"><table id="info-wrapper"> <tr> <td align="right" class="gray dwl_gray"><strong>File ID</strong><br /></td> <td valign="top"> <input name="fileID" type="text" class="opt dwl" id="fileID" style="width:200px;" value="" /><br/><span id="uri-note"></span> </td> </tr> <tr> <td align="right" class="gray dwl_gray"><strong>Height</strong></td> <td valign="top" style="width:200px;"><input name="height" type="text" class="opt dwl" id="height" size="6" style="text-align:right" value="700" />px</td> </tr> <tr> <td align="right" class="gray dwl_gray"><strong>Width</strong></td> <td valign="top"><input name="width" type="text" class="opt dwl" id="width" size="6" style="text-align:right" value="600" />px</td> </tr> </table><div class="mceActionPanel"> <div style="float: left"> <input type="button" id="gdassInsertCode" name="insert" value="Insert"/> </div> <div style="float: right"> <input type="button" id="gdassCancel" name="cancel" value="Cancel"/> </div> </div></div>';
            jQuery('#grpdocsass-popup').append(popupHtml);
            jQuery('#grpdocsass-popup').toggle();
            
            // Dialog button insert
            jQuery('#gdassInsertCode').bind('click', function(){
                var fileID = jQuery('#fileID').val();
                var width = jQuery('#width').val();
                var height = jQuery('#height').val();
                if(fileID!=null && fileID!='' && width!=null && width!='' && height!=null && height!=''){
                    var iframe = '<iframe src="https://apps.groupdocs.com/assembly2/questionnaire-assembly/'+fileID+'?&referer=e107-Assembly/1.0" frameborder="0" width="'+width+'" height="'+height+'">If you can see this text, your browser does not support iframes. Please enable iframe support in your browser or use the latest version of any popular web browser such as Mozilla Firefox or Google Chrome. For more help, please check our documentation Wiki: http://groupdocs.com/docs/display/assembly/GroupDocs+Assembly+Integration+with+3rd+Party+Platforms</iframe>';
                    jQuery('#tinymce', jQuery('#data_ifr').contents()).append(iframe);
                }
                jQuery('#gdass-dialog').remove();
                jQuery('#grpdocsass-popup').toggle();
            });

            // Dialog button close
            jQuery('#gdassCancel').bind('click', function(){
                jQuery('#gdass-dialog').remove();
                jQuery('#grpdocsass-popup').toggle();
            });
        });

    });
    // Add popup wrapper
    jQuery('body').append('<div id="grpdocsass-popup"><div id="grpdocsass-dialog-header">GroupDocs Assembly</div></div>');
});