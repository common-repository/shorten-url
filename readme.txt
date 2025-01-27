=== Short URL ===
Contributors: kaizencoders, mikeatkaizencoders
Author URI: https://www.kaizencoders.com/
Plugin URI: http://wordpress.org/plugins/shorten-url/
Tags: shorttag, shortag, bitly, url, short
Stable tag: 1.6.8
Requires at least: 3.0
Tested up to: 6.2.2
License: GPL-3.0+
License URI: http://www.gnu.org/licenses

Your article (including custom type) may have a short url hosted by your own domain.

== Description ==

#### Important Update

> We have built a new plugin [URL Shortify](https://wordpress.org/plugins/url-shortify) and encourage everyone to migrate to this plugin. As we will not maintain this plugin further and all the active development will take place on URL Shortify.
>
> We have already added import process in URL Shortify using which you can easily import all your short links from this plugin to URL Shortify in one click.

Your article (including custom type) may have a short url hosted by your own domain.

Replace the internal function of wordpress wp_get_shortlink() by a bit.ly like url.

Instead of having a short link like http://www.yourdomain.com/?p=3564, your short link will be http://www.yourdomain.com/NgH5z (for instance).

You can configure:

* the length of the short link,
* if the link is prefixed with a static word,
* the characters used for the short link.

Moreover, you can manage external links with this plugin. The links in your posts will be automatically replace by the short one if available.

This plugin is under GPL licence.

= Multisite - WordPress MU =

This plugin is compatible with multisite installation. Each blog may manage their own list of links.

= Localization =

* Arabic (U.A.E.) translation provided by ZILZAL, alaaasly
* Arabic (Saudi Arabia) translation provided by ZILZAL
* German (Austria) translation provided by AndreasK., kikunosuke
* German (Germany) translation provided by reitermarkus, navelbrush, HenningKlocke, RobertBittner, Netzwerkstudio
* English (United States), default language
* Spanish (Spain) translation provided by SebasContre, JosLuisCruz, CalvT
* Farsi (Iran) translation provided by EhsanKing, sehrama.ir, HamidEslami, Yhayakhaledi, Masoud.B
* French (France) translation provided by SedLex, jlmcreation
* Indonesian (Indonesia) translation provided by Adhityawicaksana
* Polish (Poland) translation provided by PiotrL
* Portuguese (Brazil) translation provided by Blinky, TonyFranco, ViniciusSantos, Bruno
* Russian (Russia) translation provided by Pacifik, AndreyFedotov
* Swedish (Sweden) translation provided by Kozley
* Chinese (People's Republic of China) translation provided by OWenT

= Features of the framework =

This plugin uses the SL framework. This framework eases the creation of new plugins by providing tools and frames (see dev-toolbox plugin for more info).

You may easily translate the text of the plugin and submit it to the developer, send a feedback, or choose the location of the plugin in the admin panel.

Have fun !

== Installation ==

1. Upload this folder shorten-url to your plugin directory (for instance '/wp-content/plugins/')
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Navigate to the 'SL plugins' box
4. All plugins developed with the SL core will be listed in this box
5. Enjoy !

== Screenshots ==

1. The synthesis of the short link generated for your post and page
2. The configuration page of the plugin

== Changelog ==

= 1.6.8 =

* Security update.

= 1.6.7 =

* Update: Compatibility check with PHP 7.4.33.

= 1.6.6 =

* Update: Fixed compatibility issue with PHP 7.4

= 1.6.5 =
* Update: Fixed Vulnerability.

= 1.6.4 =
* NEW: Compatibility with WordPress 5.8.3
* Update: Update notice to migrate to [URL Shortify](https://wordpress.org/plugins/url-shortify)

= 1.6.3 =
* NEW: Update of the core

= 1.6.2 =
* NEW: icons
* NEW: delete data on uninstall
* NEW: list the custom posts if they exist

= 1.6.1 =
* BUG: The import function were not working ... now solved

= 1.6.0 =
* NEW: redirection through an internal page if wanted
* NEW: HOW TO

= 1.5.0 -&gt; 1.5.4 =
* BUG: convert url_externe into text to remove the 255 characters limitations
* BUG: do not test correctly diplicate entries for external link (now, only one shortlink may be available per external link)
* BUG: Remove the key of the MySQL table ;
* NEW: new look
* NEW: comment for external link
* NEW: export / import function
* BUG: avoid problem with &
* BUG: avoid problem when too many articles
* NEW: the shortlink may point to another domain
* NEW: support of custom page
* Various enhancements

= 1.4.0 -&gt; 1.4.5 =
* Now compatible with full HTTPS site
* A new keyword %short_url_without_link% is available to display short link without any html link
* The short URL may be displayed in the excerpt
* Some issue when the number of articles were too big
* Some page may be excluded
* The short URL may be displayed in the page

= 1.3.0 -&gt; 1.3.11 =
* Re-add the image button
* Warning popup
* Big issue with excerpt
* Update the core
* Avoid an infinite loop when 404 error
* Root URL for short link may be modified
* Correct a problem in quick move
* Search URL feature
* Shorten all links in posts
* www may be removed from short URL
* Even non published posts have short url
* Add http:// if missing
* Add a counter of the number of clicks on links
* The links may be ordered
* Update of Russian translation
* Major release of the framework

= 1.2.0 -&gt; 1.2.3 =
* Russian translation (by Pacifik)
* Improve English text thanks to Rene
* Correct a bug since home_url is different from site_url (thanks to Julian)
* Update of the core and translations
* SVN support

= 1.1.0 -&gt; 1.1.3 =
* Updating the core plugin
* Replacing the word "force" into "edit" (trevor's suggestion)
* When forcing an url, you may use a-zA-Z0-9.-_ characters (trevor's suggestion)
* ZipArchive class has been suppressed and pclzip is used instead
* Ensure that folders and files permissions are correct for an adequate behavior
* You can add any shortlink you want (i.e. with external links)
* Add translation for French

= 1.0.0 -&gt; 1.0.2 =
* Upgrade of the framework (version 3.0)
* First release in the wild web (enjoy)