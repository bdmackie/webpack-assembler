# Functions

<dl>
<dt><a href="#split">split(bundles)</a></dt>
<dd><p>Splits bundles.</p>
</dd>
<dt><a href="#isVendor">isVendor(options)</a></dt>
<dd><p>Checks if a bundle is a vendor bundle
i.e. is installed in node_modules
Used as an include filter for split to 
create a &#39;vendor bundle&#39;.</p>
</dd>
<dt><a href="#analyze">analyze()</a></dt>
<dd><p>Analyzes bundles for diagnostics.</p>
</dd>
<dt><a href="#env">env(vars)</a></dt>
<dd><p>Setup the node process environment.
e.g. 
 parts.env({NODE_ENV: &#39;development&#39;})
 =&gt; process.env.NODE_ENV === &#39;development</p>
</dd>
<dt><a href="#clean">clean(paths, options, noDefaults)</a></dt>
<dd></dd>
<dt><a href="#copy">copy(patterns)</a></dt>
<dd><p>Copy straight from source to destination.</p>
</dd>
<dt><a href="#circularDependency">circularDependency(options, noDefaults)</a></dt>
<dd><p>Detect circular dependencies.</p>
</dd>
<dt><a href="#assemble">assemble(genBase, genDev, genProd)</a></dt>
<dd><p>Assembles a configuration function that recieves a single
&quot;env&quot; object contianing the environment commmand line
argument passed thorugh to wepack</p>
</dd>
<dt><a href="#library">library(options)</a></dt>
<dd><p>Output settings for a library.
Defaults to UMD format.</p>
</dd>
<dt><a href="#page">page(options)</a></dt>
<dd><p>Output settings for a page.</p>
</dd>
<dt><a href="#useImages">useImages(options)</a></dt>
<dd><p>Handle images.</p>
</dd>
<dt><a href="#useFonts">useFonts(options)</a></dt>
<dd><p>Handle fonts.</p>
</dd>
</dl>

<a name="split"></a>

# split(bundles)
Splits bundles.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| bundles | <code>Array.&lt;Object&gt;</code> | An array of bundle configuration passed through to CommonsChunkPlugin |

<a name="isVendor"></a>

# isVendor(options)
Checks if a bundle is a vendor bundle
i.e. is installed in node_modules
Used as an include filter for split to 
create a 'vendor bundle'.

**Kind**: global function  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="analyze"></a>

# analyze()
Analyzes bundles for diagnostics.

**Kind**: global function  
<a name="env"></a>

# env(vars)
Setup the node process environment.
e.g. 
 parts.env({NODE_ENV: 'development'})
 => process.env.NODE_ENV === 'development

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| vars | <code>\*</code> | An object of variables to set. |

<a name="clean"></a>

# clean(paths, options, noDefaults)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| paths | <code>\*</code> | an array of paths to clean |
| options | <code>\*</code> | options for clean-webpack-plugin |
| noDefaults | <code>\*</code> | Indicates to not use this library's defaults |

<a name="copy"></a>

# copy(patterns)
Copy straight from source to destination.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| patterns | <code>\*</code> | Patterns to copy, passed through to copy-webpack-plugin |

<a name="circularDependency"></a>

# circularDependency(options, noDefaults)
Detect circular dependencies.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>\*</code> | options to pass through to circular-dependency-plugin |
| noDefaults | <code>\*</code> | Indicates to not use this library's defaults |

<a name="assemble"></a>

# assemble(genBase, genDev, genProd)
Assembles a configuration function that recieves a single
"env" object contianing the environment commmand line
argument passed thorugh to wepack

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| genBase | <code>\*</code> | A function to return a base config / parts array. |
| genDev | <code>\*</code> | A function to return a dev config / parts array. |
| genProd | <code>\*</code> | A function to return a prod config / parts array. |

<a name="library"></a>

# library(options)
Output settings for a library.
Defaults to UMD format.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | library options including path, filename, library, libraryTarget and externals |

<a name="page"></a>

# page(options)
Output settings for a page.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | library options including path, template, title, entry and chunks. |

<a name="useImages"></a>

# useImages(options)
Handle images.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Images options including inlude, exclude on the rule and options on 'use'. |

<a name="useFonts"></a>

# useFonts(options)
Handle fonts.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Fonts options including include and exclude on the rule and options on 'use'. |

