# imgplay
Image sequence player jQuery plugin with streaming and dynamic loading.

## Usage

Add styles inside `<head>` tag.

~~~html
<link rel="stylesheet" href="path/to/imgplay/jquery.imgplay.css" />
~~~

Add plugin at the bottom of the page after jQuery

~~~html
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="path/to/imgplay/jquery.imgplay.min.js"></script>
~~~

List the set of images inside a container `<div>` so that payer can 
pick them and play.

~~~html
<div id="imageplayer" class="imageplayer">
    <img src="image1.jpg" />
    <img src="image2.jpg" />
    <img src="image3.jpg" />
    <img src="image4.jpg" />
    <img src="image5.jpg" />
    <img data-src="image6.jpg" />
    <img data-src="image7.jpg" />
    <img data-src="image8.jpg" />
    <img data-src="image9.jpg" />
    <img data-src="image10.jpg" />
</div>
~~~

Notice that only from `image1.jpg` to `image5.jpg` are loaded when the
page is loaded and other images have `data-src` attribute instead of the
`src` attribute. This makes the player dynamically load these images 
while it plays images till `image5.jpg`.

Now invoke the player.

~~~html
<script type="text/javascript">
    (function($) {
        $(document).ready(function() {
            $('#imageplayer').imgplay({rate: 2}); // start imgplay
        });
    })(jQuery);
</script>
~~~


## Options

Following options are currently available for configuring the plugin.

- `rate` - Number of frames per second. Default is `1`.
- `controls` - Whether to show player controls. Default is `true`.


## Methods

Following methods can be called on the player object to programatically
control it's behaviour.

- `play()` - Play the image sequence.
- `pause()` - Pause the player.
- `stop()` - Stop the player.
- `rewind(frames)` - Jump number of `frames` backward.
- `forward(frames)` - Jump number of `frames` forward.
- `fastRewind(rate)` - Play backword at given `rate`.
- `fastForward(rate)` - Play forword at given `rate`.
- `previousFrame()` - Pause and jump to the previous frame.
- `nextFrame()` - Pause and jump to the next frame.
- `toFrame(i)` - Jump to the frame number `i`.
- `fullscreen()` - Toggle fullscreen mode.
    
All the methods are simply callable through the `data` property of the container 
element after initialisation.

~~~js
$('#imageplayer').data('imgplay').play();
~~~


## Contribute

- If you think the idea of imgplay is intersting just let me know
That surely will be a push forward.
- If you find a bug or a way we can improve imgplay, just open a
new issue.
- If you have fixed something or added new feature, just send a pull
request.


## License

MIT License. Please see [LICENSE](LICENSE) for license details.
