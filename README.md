#Norbert - a simple & lightweight jquery plugin

![Norbert, a jQuery plugin by Sam Markiewicz](http://sammarkiewi.cz/norbert/norbert.png) 

**View the live demo and website** : [http://sammarkiewi.cz/norbert](http://sammarkiewi.cz/norbert "Norbert").

## The What
**Norbert** is a plugin that you can use to enhance user experience while they are using a form.
It simply displays a tooltip after the user start typing whose content replace the now vanished *placeholder*.

##The how
Implement **Norbert** is fairly easy.
Here is how to proceed :

**Step 1** 

Include the latest version of jQuery

```html
  <script type="text/javascript" src="http//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
```

**Step 2** 

Include *norbert.js* and *norbert.css*

```html
<script type="text/javascript" src="norbert.js"></script> <!--Please, right before the end of the </body> tag-->
<link rel="stylesheet" href="norbert.css">
```

**Step 3** 

Put your HTML :

```html
<form action="" id="yourForm"> 
 <label for="name"> 
  <span>Name</span> 
  <input type="text" placeholder="Enter your name" id="name"> 
 </label> 
</form>
```

**Step 4** 

Activate the plugin, and voila !

```html
<script> 
 $(document).ready(function() { 
  $('#yourForm').placeholdTip({ 
   position: 'left' // Position can be 'top', 'left', 'bottom' or 'right' 
  }); 
 }); 
</script>
```

##Issues, questions, etc
**Compatibity, etc...**

I don't really bother of older or weird browser for my personal projects.
So, Norbert is using some CSS properties (to display the tooltip) that should work on recent browsers, and should crash on the crappy ones. 

**If you find issues**

Please don't spam me with emails, and open an issue.
I'll do my best to fix what can be fixed and answer.

**If you want to contribute to improve**

Please if you have some ideas or if you want to improve the plugin, feel free to suggest.
As Norbert is pretty basic, there is a lot of room for improvement.


