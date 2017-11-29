# Functions

<dl>
<dt><a href="#split">split(bundles)</a></dt>
<dd><p>Splits bundles.</p>
</dd>
<dt><a href="#isVendor">isVendor(param0)</a></dt>
<dd><p>Determines if a bundle is a vendor bundle
i.e. is installed in node_modules</p>
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
<dt><a href="#library">library(param0)</a></dt>
<dd><p>Output settings for a library.
Defaults to UMD format.</p>
</dd>
<dt><a href="#page">page(param0)</a></dt>
<dd><p>Output settings for a page.</p>
</dd>
<dt><a href="#useImages">useImages(param0)</a></dt>
<dd><p>Handle images.</p>
</dd>
<dt><a href="#useFonts">useFonts(param0)</a></dt>
<dd><p>Handle fonts.</p>
</dd>
</dl>

<a name="split"></a>

# split(bundles)
Splits bundles.

**Kind**: global function  

| Param | Type |
| --- | --- |
| bundles | <code>\*</code> | 

<a name="isVendor"></a>

# isVendor(param0)
Determines if a bundle is a vendor bundle
i.e. is installed in node_modules

**Kind**: global function  

| Param | Type |
| --- | --- |
| param0 | <code>\*</code> | 

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

<a name="library"></a>

# library(param0)
Output settings for a library.
Defaults to UMD format.

**Kind**: global function  

| Param | Type |
| --- | --- |
| param0 | <code>\*</code> | 

<a name="page"></a>

# page(param0)
Output settings for a page.

**Kind**: global function  

| Param | Type |
| --- | --- |
| param0 | <code>\*</code> | 

<a name="useImages"></a>

# useImages(param0)
Handle images.

**Kind**: global function  

| Param | Type |
| --- | --- |
| param0 | <code>\*</code> | 

<a name="useFonts"></a>

# useFonts(param0)
Handle fonts.

**Kind**: global function  

| Param | Type |
| --- | --- |
| param0 | <code>\*</code> | 

