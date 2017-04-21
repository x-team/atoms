module.exports = function() {
	return `
<article>
<h1>Title</h1>

<hr />

<h1>A First Level Header</h1>

<h2>A Second Level Header</h2>

<h3>A Third Level Header</h3>

<h4>A Fourth Level Header</h4>

<h5>A Fifth Level Header</h5>

<h6>A Sixth Level Header</h6>

<p>Now is the time for all good men to come to
    the aid of their country. This is just a
    regular paragraph.</p>

<p>The quick brown fox jumped over the lazy
    dog&rsquo;s back.</p>

<hr />

<h3>Header 3</h3>

<blockquote><p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p>

    <p>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
        id sem consectetuer libero luctus adipiscing.</p>

    <h2>This is an H2 in a blockquote</h2>

    <p>This is the first level of quoting.</p>

    <blockquote><p>This is nested blockquote.</p></blockquote>

    <p>Back to the first level.</p></blockquote>

<p>Some of these words <em>are emphasized</em>.
    Some of these words <em>are emphasized also</em>.</p>

<p>Use two asterisks for <strong>strong emphasis</strong>.
    Or, if you prefer, <strong>use two underscores instead</strong>.</p>

<ul>
    <li>Candy.</li>
    <li>Gum.</li>
    <li>Booze.</li>
    <li>Red</li>
    <li>Green</li>
    <li><p>Blue</p></li>
    <li><p>A list item.</p></li>
</ul>


<p>With multiple paragraphs.</p>

<ul>
    <li><p>Another item in the list.</p></li>
    <li><p>This is a list item with two paragraphs. Lorem ipsum dolor
        sit amet, consectetuer adipiscing elit. Aliquam hendrerit
        mi posuere lectus.</p></li>
</ul>


<p>Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.*   Suspendisse id sem consectetuer libero luctus adipiscing.</p>

<ul>
    <li>This is a list item with two paragraphs.</li>
</ul>


<p>This is the second paragraph in the list item. You&rsquo;re
    only required to indent the first line. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit.</p>

<ul>
    <li><p>Another item in the same list.</p></li>
    <li><p>A list item with a bit of <code>code</code> inline.</p></li>
    <li><p>A list item with a blockquote:</p>

        <blockquote><p>This is a blockquote
            inside a list item.</p></blockquote></li>
</ul>


<p>Here is an example of a pre code block</p>

<pre><code>tell application "Foo"
beep
end tell
</code></pre>

<p>This is an <a href="http://example.com/">example link</a>.</p>

<p>I get 10 times more traffic from <a href="http://google.com/" title="Google">Google</a> than from
    <a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a> or <a href="http://search.msn.com/" title="MSN Search">MSN</a>.</p>

<p>I start my morning with a cup of coffee and
    <a href="http://www.nytimes.com/">The New York Times</a>.</p>
</article>
`
}