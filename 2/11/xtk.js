/*
 * 
 *                  xxxxxxx      xxxxxxx
 *                   x:::::x    x:::::x 
 *                    x:::::x  x:::::x  
 *                     x:::::xx:::::x   
 *                      x::::::::::x    
 *                       x::::::::x     
 *                       x::::::::x     
 *                      x::::::::::x    
 *                     x:::::xx:::::x   
 *                    x:::::x  x:::::x  
 *                   x:::::x    x:::::x 
 *              THE xxxxxxx      xxxxxxx TOOLKIT
 *                    
 *                  http://www.goXTK.com
 *                   
 * Copyright (c) 2012 The X Toolkit Developers <dev@goXTK.com>
 *                   
 *    The X Toolkit (XTK) is licensed under the MIT License:
 *      http://www.opensource.org/licenses/mit-license.php
 * 
 *      "Free software" is a matter of liberty, not price.
 *      "Free" as in "free speech", not as in "free beer".
 *                                         - Richard M. Stallman
 * 
 * FUELED BY:
 *  - the wonderful Constructive Solid Geometry library by Evan Wallace (http://madebyevan.com)
 *    LICENSE: https://raw.github.com/xtk/X/master/lib/csg/LICENSE
 *
 *  - parts of the Google Closure Library (http://code.google.com/closure/library)
 *    LICENSE: https://raw.github.com/xtk/X/master/lib/closure-library/LICENSE
 * 
 *  - the JSXCompressor library (http://jsxgraph.uni-bayreuth.de/wp/jsxcompressor/)
 *    LICENSE: https://raw.github.com/xtk/X/master/lib/JXG/LICENSE
 *
 * MORE CREDITS: https://raw.github.com/xtk/X/master/LICENSE
 *
 */
function $JSCompiler_alias_THROW$$($jscomp_throw_param$$) {
  throw $jscomp_throw_param$$;
}
var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_set$$($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
var $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$nullFunction$$() {
}
function $goog$typeOf$$($value$$41$$) {
  var $s$$2$$ = typeof $value$$41$$;
  if("object" == $s$$2$$) {
    if($value$$41$$) {
      if($value$$41$$ instanceof Array) {
        return"array"
      }
      if($value$$41$$ instanceof Object) {
        return $s$$2$$
      }
      var $className$$1$$ = Object.prototype.toString.call($value$$41$$);
      if("[object Window]" == $className$$1$$) {
        return"object"
      }
      if("[object Array]" == $className$$1$$ || "number" == typeof $value$$41$$.length && "undefined" != typeof $value$$41$$.splice && "undefined" != typeof $value$$41$$.propertyIsEnumerable && !$value$$41$$.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == $className$$1$$ || "undefined" != typeof $value$$41$$.call && "undefined" != typeof $value$$41$$.propertyIsEnumerable && !$value$$41$$.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == $s$$2$$ && "undefined" == typeof $value$$41$$.call) {
      return"object"
    }
  }
  return $s$$2$$
}
function $goog$isDef$$($val$$) {
  return $val$$ !== $JSCompiler_alias_VOID$$
}
function $goog$isDefAndNotNull$$($val$$2$$) {
  return $val$$2$$ != $JSCompiler_alias_NULL$$
}
function $goog$isArray$$($val$$3$$) {
  return"array" == $goog$typeOf$$($val$$3$$)
}
function $goog$isArrayLike$$($val$$4$$) {
  var $type$$47$$ = $goog$typeOf$$($val$$4$$);
  return"array" == $type$$47$$ || "object" == $type$$47$$ && "number" == typeof $val$$4$$.length
}
function $goog$isString$$($val$$6$$) {
  return"string" == typeof $val$$6$$
}
function $goog$isNumber$$($val$$8$$) {
  return"number" == typeof $val$$8$$
}
function $goog$isFunction$$($val$$9$$) {
  return"function" == $goog$typeOf$$($val$$9$$)
}
function $goog$isObject$$($type$$48_val$$10$$) {
  $type$$48_val$$10$$ = $goog$typeOf$$($type$$48_val$$10$$);
  return"object" == $type$$48_val$$10$$ || "array" == $type$$48_val$$10$$ || "function" == $type$$48_val$$10$$
}
function $goog$getUid$$($obj$$17$$) {
  return $obj$$17$$[$goog$UID_PROPERTY_$$] || ($obj$$17$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), $goog$uidCounter_$$ = 0;
function $goog$bindNative_$$($fn$$, $selfObj$$1$$, $var_args$$24$$) {
  return $fn$$.call.apply($fn$$.bind, arguments)
}
function $goog$bindJs_$$($fn$$1$$, $selfObj$$2$$, $var_args$$25$$) {
  $fn$$1$$ || $JSCompiler_alias_THROW$$(Error());
  if(2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$)
    }
  }
  return function() {
    return $fn$$1$$.apply($selfObj$$2$$, arguments)
  }
}
function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$26$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply($JSCompiler_alias_NULL$$, arguments)
}
function $goog$partial$$($fn$$3$$, $var_args$$27$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$1$$ = Array.prototype.slice.call(arguments);
    $newArgs$$1$$.unshift.apply($newArgs$$1$$, $args$$);
    return $fn$$3$$.apply(this, $newArgs$$1$$)
  }
}
var $goog$now$$ = Date.now || function() {
  return+new Date
};
function $goog$exportSymbol$$($publicPath$$, $object$$2$$) {
  var $parts$$inline_56$$ = $publicPath$$.split("."), $cur$$inline_57$$ = $goog$global$$;
  !($parts$$inline_56$$[0] in $cur$$inline_57$$) && $cur$$inline_57$$.execScript && $cur$$inline_57$$.execScript("var " + $parts$$inline_56$$[0]);
  for(var $part$$inline_58$$;$parts$$inline_56$$.length && ($part$$inline_58$$ = $parts$$inline_56$$.shift());) {
    !$parts$$inline_56$$.length && $goog$isDef$$($object$$2$$) ? $cur$$inline_57$$[$part$$inline_58$$] = $object$$2$$ : $cur$$inline_57$$ = $cur$$inline_57$$[$part$$inline_58$$] ? $cur$$inline_57$$[$part$$inline_58$$] : $cur$$inline_57$$[$part$$inline_58$$] = {}
  }
}
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$
}
;window["X.Counter"] = function() {
  var $privateCounter$$ = 0;
  return{$increment$:function() {
    $privateCounter$$ += 1
  }, $decrement$:function() {
    $privateCounter$$ += -1
  }, value:function() {
    return $privateCounter$$
  }}
}();
Function.prototype.bind || (Function.prototype.bind = function $Function$$bind$($oThis$$) {
  function $fBound$$() {
    return $fToBind$$.apply(this instanceof $fNOP$$ ? this : $oThis$$ || window, $aArgs$$.concat($fSlice$$.call(arguments)))
  }
  function $fNOP$$() {
  }
  "function" !== typeof this && $JSCompiler_alias_THROW$$(new TypeError("Function.prototype.bind - what is trying to be bound is not callable"));
  var $fSlice$$ = Array.prototype.slice, $aArgs$$ = $fSlice$$.call(arguments, 1), $fToBind$$ = this;
  $fNOP$$.prototype = this.prototype;
  $fBound$$.prototype = new $fNOP$$;
  return $fBound$$
});
$goog$exportSymbol$$("Function.prototype.bind", Function.prototype.bind);
function $goog$string$subs$$($str$$12$$, $var_args$$29$$) {
  for(var $i$$5$$ = 1;$i$$5$$ < arguments.length;$i$$5$$++) {
    var $replacement$$ = ("" + arguments[$i$$5$$]).replace(/\$/g, "$$$$"), $str$$12$$ = $str$$12$$.replace(/\%s/, $replacement$$)
  }
  return $str$$12$$
}
function $goog$string$htmlEscape$$($str$$31$$) {
  if(!$goog$string$allRe_$$.test($str$$31$$)) {
    return $str$$31$$
  }
  -1 != $str$$31$$.indexOf("&") && ($str$$31$$ = $str$$31$$.replace($goog$string$amperRe_$$, "&amp;"));
  -1 != $str$$31$$.indexOf("<") && ($str$$31$$ = $str$$31$$.replace($goog$string$ltRe_$$, "&lt;"));
  -1 != $str$$31$$.indexOf(">") && ($str$$31$$ = $str$$31$$.replace($goog$string$gtRe_$$, "&gt;"));
  -1 != $str$$31$$.indexOf('"') && ($str$$31$$ = $str$$31$$.replace($goog$string$quotRe_$$, "&quot;"));
  return $str$$31$$
}
var $goog$string$amperRe_$$ = /&/g, $goog$string$ltRe_$$ = /</g, $goog$string$gtRe_$$ = />/g, $goog$string$quotRe_$$ = /\"/g, $goog$string$allRe_$$ = /[&<>\"]/;
var $goog$userAgent$detectedOpera_$$, $goog$userAgent$detectedIe_$$, $goog$userAgent$detectedWebkit_$$, $goog$userAgent$detectedMobile_$$, $goog$userAgent$detectedGecko_$$, $goog$userAgent$detectedMac_$$, $goog$userAgent$detectedWindows_$$;
function $goog$userAgent$getUserAgentString$$() {
  return $goog$global$$.navigator ? $goog$global$$.navigator.userAgent : $JSCompiler_alias_NULL$$
}
function $goog$userAgent$getNavigator$$() {
  return $goog$global$$.navigator
}
$goog$userAgent$detectedGecko_$$ = $goog$userAgent$detectedMobile_$$ = $goog$userAgent$detectedWebkit_$$ = $goog$userAgent$detectedIe_$$ = $goog$userAgent$detectedOpera_$$ = $JSCompiler_alias_FALSE$$;
var $ua$$inline_64$$;
if($ua$$inline_64$$ = $goog$userAgent$getUserAgentString$$()) {
  var $navigator$$inline_65$$ = $goog$userAgent$getNavigator$$();
  $goog$userAgent$detectedOpera_$$ = 0 == $ua$$inline_64$$.indexOf("Opera");
  $goog$userAgent$detectedIe_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_64$$.indexOf("MSIE");
  $goog$userAgent$detectedMobile_$$ = ($goog$userAgent$detectedWebkit_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_64$$.indexOf("WebKit")) && -1 != $ua$$inline_64$$.indexOf("Mobile");
  $goog$userAgent$detectedGecko_$$ = !$goog$userAgent$detectedOpera_$$ && !$goog$userAgent$detectedWebkit_$$ && "Gecko" == $navigator$$inline_65$$.product
}
var $goog$userAgent$OPERA$$ = $goog$userAgent$detectedOpera_$$, $goog$userAgent$IE$$ = $goog$userAgent$detectedIe_$$, $goog$userAgent$GECKO$$ = $goog$userAgent$detectedGecko_$$, $goog$userAgent$WEBKIT$$ = $goog$userAgent$detectedWebkit_$$, $goog$userAgent$MOBILE$$ = $goog$userAgent$detectedMobile_$$, $goog$userAgent$PLATFORM$$, $navigator$$inline_67$$ = $goog$userAgent$getNavigator$$();
$goog$userAgent$PLATFORM$$ = $navigator$$inline_67$$ && $navigator$$inline_67$$.platform || "";
$goog$userAgent$detectedMac_$$ = -1 != $goog$userAgent$PLATFORM$$.indexOf("Mac");
$goog$userAgent$detectedWindows_$$ = -1 != $goog$userAgent$PLATFORM$$.indexOf("Win");
var $goog$userAgent$X11$$ = !!$goog$userAgent$getNavigator$$() && -1 != ($goog$userAgent$getNavigator$$().appVersion || "").indexOf("X11"), $goog$userAgent$VERSION$$;
a: {
  var $version$$inline_70$$ = "", $re$$inline_71$$;
  if($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
    var $operaVersion$$inline_72$$ = $goog$global$$.opera.version, $version$$inline_70$$ = "function" == typeof $operaVersion$$inline_72$$ ? $operaVersion$$inline_72$$() : $operaVersion$$inline_72$$
  }else {
    if($goog$userAgent$GECKO$$ ? $re$$inline_71$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $re$$inline_71$$ = /MSIE\s+([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($re$$inline_71$$ = /WebKit\/(\S+)/), $re$$inline_71$$) {
      var $arr$$inline_73$$ = $re$$inline_71$$.exec($goog$userAgent$getUserAgentString$$()), $version$$inline_70$$ = $arr$$inline_73$$ ? $arr$$inline_73$$[1] : ""
    }
  }
  if($goog$userAgent$IE$$) {
    var $docMode$$inline_74$$, $doc$$inline_571$$ = $goog$global$$.document;
    $docMode$$inline_74$$ = $doc$$inline_571$$ ? $doc$$inline_571$$.documentMode : $JSCompiler_alias_VOID$$;
    if($docMode$$inline_74$$ > parseFloat($version$$inline_70$$)) {
      $goog$userAgent$VERSION$$ = "" + $docMode$$inline_74$$;
      break a
    }
  }
  $goog$userAgent$VERSION$$ = $version$$inline_70$$
}
var $goog$userAgent$isVersionCache_$$ = {};
function $goog$userAgent$isVersion$$($version$$8$$) {
  var $JSCompiler_temp$$48_order$$inline_78$$;
  if(!($JSCompiler_temp$$48_order$$inline_78$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$])) {
    $JSCompiler_temp$$48_order$$inline_78$$ = 0;
    for(var $v1Subs$$inline_79$$ = ("" + $goog$userAgent$VERSION$$).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), $v2Subs$$inline_80$$ = ("" + $version$$8$$).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), $subCount$$inline_81$$ = Math.max($v1Subs$$inline_79$$.length, $v2Subs$$inline_80$$.length), $subIdx$$inline_82$$ = 0;0 == $JSCompiler_temp$$48_order$$inline_78$$ && $subIdx$$inline_82$$ < $subCount$$inline_81$$;$subIdx$$inline_82$$++) {
      var $v1Sub$$inline_83$$ = $v1Subs$$inline_79$$[$subIdx$$inline_82$$] || "", $v2Sub$$inline_84$$ = $v2Subs$$inline_80$$[$subIdx$$inline_82$$] || "", $v1CompParser$$inline_85$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_86$$ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var $v1Comp$$inline_87$$ = $v1CompParser$$inline_85$$.exec($v1Sub$$inline_83$$) || ["", "", ""], $v2Comp$$inline_88$$ = $v2CompParser$$inline_86$$.exec($v2Sub$$inline_84$$) || ["", "", ""];
        if(0 == $v1Comp$$inline_87$$[0].length && 0 == $v2Comp$$inline_88$$[0].length) {
          break
        }
        $JSCompiler_temp$$48_order$$inline_78$$ = ((0 == $v1Comp$$inline_87$$[1].length ? 0 : parseInt($v1Comp$$inline_87$$[1], 10)) < (0 == $v2Comp$$inline_88$$[1].length ? 0 : parseInt($v2Comp$$inline_88$$[1], 10)) ? -1 : (0 == $v1Comp$$inline_87$$[1].length ? 0 : parseInt($v1Comp$$inline_87$$[1], 10)) > (0 == $v2Comp$$inline_88$$[1].length ? 0 : parseInt($v2Comp$$inline_88$$[1], 10)) ? 1 : 0) || ((0 == $v1Comp$$inline_87$$[2].length) < (0 == $v2Comp$$inline_88$$[2].length) ? -1 : (0 == $v1Comp$$inline_87$$[2].length) > 
        (0 == $v2Comp$$inline_88$$[2].length) ? 1 : 0) || ($v1Comp$$inline_87$$[2] < $v2Comp$$inline_88$$[2] ? -1 : $v1Comp$$inline_87$$[2] > $v2Comp$$inline_88$$[2] ? 1 : 0)
      }while(0 == $JSCompiler_temp$$48_order$$inline_78$$)
    }
    $JSCompiler_temp$$48_order$$inline_78$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$] = 0 <= $JSCompiler_temp$$48_order$$inline_78$$
  }
  return $JSCompiler_temp$$48_order$$inline_78$$
}
var $goog$userAgent$isDocumentModeCache_$$ = {};
function $goog$userAgent$isDocumentMode$$($documentMode$$) {
  return $goog$userAgent$isDocumentModeCache_$$[$documentMode$$] || ($goog$userAgent$isDocumentModeCache_$$[$documentMode$$] = $goog$userAgent$IE$$ && document.documentMode && document.documentMode >= $documentMode$$)
}
;function $goog$object$forEach$$($obj$$21$$, $f$$) {
  for(var $key$$16$$ in $obj$$21$$) {
    $f$$.call($JSCompiler_alias_VOID$$, $obj$$21$$[$key$$16$$], $key$$16$$, $obj$$21$$)
  }
}
function $goog$object$getValues$$($obj$$30$$) {
  var $res$$2$$ = [], $i$$12$$ = 0, $key$$24$$;
  for($key$$24$$ in $obj$$30$$) {
    $res$$2$$[$i$$12$$++] = $obj$$30$$[$key$$24$$]
  }
  return $res$$2$$
}
function $goog$object$getKeys$$($obj$$31$$) {
  var $res$$3$$ = [], $i$$13$$ = 0, $key$$25$$;
  for($key$$25$$ in $obj$$31$$) {
    $res$$3$$[$i$$13$$++] = $key$$25$$
  }
  return $res$$3$$
}
var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function $goog$object$extend$$($target$$37$$, $var_args$$32$$) {
  for(var $key$$39$$, $source$$2$$, $i$$16$$ = 1;$i$$16$$ < arguments.length;$i$$16$$++) {
    $source$$2$$ = arguments[$i$$16$$];
    for($key$$39$$ in $source$$2$$) {
      $target$$37$$[$key$$39$$] = $source$$2$$[$key$$39$$]
    }
    for(var $j$$1$$ = 0;$j$$1$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$$1$$++) {
      $key$$39$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$1$$], Object.prototype.hasOwnProperty.call($source$$2$$, $key$$39$$) && ($target$$37$$[$key$$39$$] = $source$$2$$[$key$$39$$])
    }
  }
}
;function $goog$debug$Error$$($opt_msg$$) {
  this.stack = Error().stack || "";
  $opt_msg$$ && (this.message = "" + $opt_msg$$)
}
$goog$inherits$$($goog$debug$Error$$, Error);
$goog$debug$Error$$.prototype.name = "CustomError";
function $goog$asserts$AssertionError$$($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  $goog$debug$Error$$.call(this, $goog$string$subs$$.apply($JSCompiler_alias_NULL$$, $messageArgs$$));
  $messageArgs$$.shift()
}
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
function $goog$asserts$assert$$($condition$$1$$, $opt_message$$8$$, $var_args$$35$$) {
  if(!$condition$$1$$) {
    var $givenArgs$$inline_91$$ = Array.prototype.slice.call(arguments, 2), $message$$inline_92$$ = "Assertion failed";
    if($opt_message$$8$$) {
      var $message$$inline_92$$ = $message$$inline_92$$ + (": " + $opt_message$$8$$), $args$$inline_93$$ = $givenArgs$$inline_91$$
    }
    $JSCompiler_alias_THROW$$(new $goog$asserts$AssertionError$$("" + $message$$inline_92$$, $args$$inline_93$$ || []))
  }
}
;var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function($arr$$11$$, $obj$$47$$, $opt_fromIndex$$6$$) {
  $goog$asserts$assert$$($arr$$11$$.length != $JSCompiler_alias_NULL$$);
  return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$11$$, $obj$$47$$, $opt_fromIndex$$6$$)
} : function($arr$$12$$, $obj$$48$$, $fromIndex_i$$19_opt_fromIndex$$7$$) {
  $fromIndex_i$$19_opt_fromIndex$$7$$ = $fromIndex_i$$19_opt_fromIndex$$7$$ == $JSCompiler_alias_NULL$$ ? 0 : 0 > $fromIndex_i$$19_opt_fromIndex$$7$$ ? Math.max(0, $arr$$12$$.length + $fromIndex_i$$19_opt_fromIndex$$7$$) : $fromIndex_i$$19_opt_fromIndex$$7$$;
  if($goog$isString$$($arr$$12$$)) {
    return!$goog$isString$$($obj$$48$$) || 1 != $obj$$48$$.length ? -1 : $arr$$12$$.indexOf($obj$$48$$, $fromIndex_i$$19_opt_fromIndex$$7$$)
  }
  for(;$fromIndex_i$$19_opt_fromIndex$$7$$ < $arr$$12$$.length;$fromIndex_i$$19_opt_fromIndex$$7$$++) {
    if($fromIndex_i$$19_opt_fromIndex$$7$$ in $arr$$12$$ && $arr$$12$$[$fromIndex_i$$19_opt_fromIndex$$7$$] === $obj$$48$$) {
      return $fromIndex_i$$19_opt_fromIndex$$7$$
    }
  }
  return-1
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$15$$, $f$$7$$, $opt_obj$$6$$) {
  $goog$asserts$assert$$($arr$$15$$.length != $JSCompiler_alias_NULL$$);
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$15$$, $f$$7$$, $opt_obj$$6$$)
} : function($arr$$16$$, $f$$8$$, $opt_obj$$7$$) {
  for(var $l$$2$$ = $arr$$16$$.length, $arr2$$ = $goog$isString$$($arr$$16$$) ? $arr$$16$$.split("") : $arr$$16$$, $i$$21$$ = 0;$i$$21$$ < $l$$2$$;$i$$21$$++) {
    $i$$21$$ in $arr2$$ && $f$$8$$.call($opt_obj$$7$$, $arr2$$[$i$$21$$], $i$$21$$, $arr$$16$$)
  }
}, $goog$array$map$$ = $goog$array$ARRAY_PROTOTYPE_$$.map ? function($arr$$20$$, $f$$12$$, $opt_obj$$11$$) {
  $goog$asserts$assert$$($arr$$20$$.length != $JSCompiler_alias_NULL$$);
  return $goog$array$ARRAY_PROTOTYPE_$$.map.call($arr$$20$$, $f$$12$$, $opt_obj$$11$$)
} : function($arr$$21$$, $f$$13$$, $opt_obj$$12$$) {
  for(var $l$$5$$ = $arr$$21$$.length, $res$$6$$ = Array($l$$5$$), $arr2$$3$$ = $goog$isString$$($arr$$21$$) ? $arr$$21$$.split("") : $arr$$21$$, $i$$24$$ = 0;$i$$24$$ < $l$$5$$;$i$$24$$++) {
    $i$$24$$ in $arr2$$3$$ && ($res$$6$$[$i$$24$$] = $f$$13$$.call($opt_obj$$12$$, $arr2$$3$$[$i$$24$$], $i$$24$$, $arr$$21$$))
  }
  return $res$$6$$
}, $goog$array$some$$ = $goog$array$ARRAY_PROTOTYPE_$$.some ? function($arr$$24$$, $f$$16$$, $opt_obj$$15$$) {
  $goog$asserts$assert$$($arr$$24$$.length != $JSCompiler_alias_NULL$$);
  return $goog$array$ARRAY_PROTOTYPE_$$.some.call($arr$$24$$, $f$$16$$, $opt_obj$$15$$)
} : function($arr$$25$$, $f$$17$$, $opt_obj$$16$$) {
  for(var $l$$6$$ = $arr$$25$$.length, $arr2$$4$$ = $goog$isString$$($arr$$25$$) ? $arr$$25$$.split("") : $arr$$25$$, $i$$25$$ = 0;$i$$25$$ < $l$$6$$;$i$$25$$++) {
    if($i$$25$$ in $arr2$$4$$ && $f$$17$$.call($opt_obj$$16$$, $arr2$$4$$[$i$$25$$], $i$$25$$, $arr$$25$$)) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
}, $goog$array$every$$ = $goog$array$ARRAY_PROTOTYPE_$$.every ? function($arr$$26$$, $f$$18$$, $opt_obj$$17$$) {
  $goog$asserts$assert$$($arr$$26$$.length != $JSCompiler_alias_NULL$$);
  return $goog$array$ARRAY_PROTOTYPE_$$.every.call($arr$$26$$, $f$$18$$, $opt_obj$$17$$)
} : function($arr$$27$$, $f$$19$$, $opt_obj$$18$$) {
  for(var $l$$7$$ = $arr$$27$$.length, $arr2$$5$$ = $goog$isString$$($arr$$27$$) ? $arr$$27$$.split("") : $arr$$27$$, $i$$26$$ = 0;$i$$26$$ < $l$$7$$;$i$$26$$++) {
    if($i$$26$$ in $arr2$$5$$ && !$f$$19$$.call($opt_obj$$18$$, $arr2$$5$$[$i$$26$$], $i$$26$$, $arr$$27$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
function $goog$array$remove$$($arr$$39$$, $obj$$55$$) {
  var $i$$33$$ = $goog$array$indexOf$$($arr$$39$$, $obj$$55$$);
  0 <= $i$$33$$ && ($goog$asserts$assert$$($arr$$39$$.length != $JSCompiler_alias_NULL$$), $goog$array$ARRAY_PROTOTYPE_$$.splice.call($arr$$39$$, $i$$33$$, 1))
}
function $goog$array$concat$$($var_args$$44$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.concat.apply($goog$array$ARRAY_PROTOTYPE_$$, arguments)
}
function $goog$array$clone$$($arr$$42$$) {
  if($goog$isArray$$($arr$$42$$)) {
    return $goog$array$concat$$($arr$$42$$)
  }
  for(var $rv$$7$$ = [], $i$$36$$ = 0, $len$$ = $arr$$42$$.length;$i$$36$$ < $len$$;$i$$36$$++) {
    $rv$$7$$[$i$$36$$] = $arr$$42$$[$i$$36$$]
  }
  return $rv$$7$$
}
function $goog$array$slice$$($arr$$44$$, $start$$5$$, $opt_end$$13$$) {
  $goog$asserts$assert$$($arr$$44$$.length != $JSCompiler_alias_NULL$$);
  return 2 >= arguments.length ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$44$$, $start$$5$$) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$44$$, $start$$5$$, $opt_end$$13$$)
}
;function $goog$structs$getCount$$($JSCompiler_temp$$46_JSCompiler_temp$$47_col$$) {
  if("function" == typeof $JSCompiler_temp$$46_JSCompiler_temp$$47_col$$.$getCount$) {
    $JSCompiler_temp$$46_JSCompiler_temp$$47_col$$ = $JSCompiler_temp$$46_JSCompiler_temp$$47_col$$.$getCount$()
  }else {
    if($goog$isArrayLike$$($JSCompiler_temp$$46_JSCompiler_temp$$47_col$$) || $goog$isString$$($JSCompiler_temp$$46_JSCompiler_temp$$47_col$$)) {
      $JSCompiler_temp$$46_JSCompiler_temp$$47_col$$ = $JSCompiler_temp$$46_JSCompiler_temp$$47_col$$.length
    }else {
      var $rv$$inline_99$$ = 0, $key$$inline_100$$;
      for($key$$inline_100$$ in $JSCompiler_temp$$46_JSCompiler_temp$$47_col$$) {
        $rv$$inline_99$$++
      }
      $JSCompiler_temp$$46_JSCompiler_temp$$47_col$$ = $rv$$inline_99$$
    }
  }
  return $JSCompiler_temp$$46_JSCompiler_temp$$47_col$$
}
function $goog$structs$getValues$$($col$$1$$) {
  if("function" == typeof $col$$1$$.$getValues$) {
    return $col$$1$$.$getValues$()
  }
  if($goog$isString$$($col$$1$$)) {
    return $col$$1$$.split("")
  }
  if($goog$isArrayLike$$($col$$1$$)) {
    for(var $rv$$8$$ = [], $l$$12$$ = $col$$1$$.length, $i$$47$$ = 0;$i$$47$$ < $l$$12$$;$i$$47$$++) {
      $rv$$8$$.push($col$$1$$[$i$$47$$])
    }
    return $rv$$8$$
  }
  return $goog$object$getValues$$($col$$1$$)
}
function $goog$structs$every$$($col$$10$$, $f$$29$$) {
  if("function" == typeof $col$$10$$.every) {
    return $col$$10$$.every($f$$29$$, $JSCompiler_alias_VOID$$)
  }
  if($goog$isArrayLike$$($col$$10$$) || $goog$isString$$($col$$10$$)) {
    return $goog$array$every$$($col$$10$$, $f$$29$$, $JSCompiler_alias_VOID$$)
  }
  var $keys$$5_rv$$inline_103$$;
  if("function" == typeof $col$$10$$.$getKeys$) {
    $keys$$5_rv$$inline_103$$ = $col$$10$$.$getKeys$()
  }else {
    if("function" != typeof $col$$10$$.$getValues$) {
      if($goog$isArrayLike$$($col$$10$$) || $goog$isString$$($col$$10$$)) {
        $keys$$5_rv$$inline_103$$ = [];
        for(var $l$$inline_104_values$$9$$ = $col$$10$$.length, $i$$inline_105_l$$18$$ = 0;$i$$inline_105_l$$18$$ < $l$$inline_104_values$$9$$;$i$$inline_105_l$$18$$++) {
          $keys$$5_rv$$inline_103$$.push($i$$inline_105_l$$18$$)
        }
      }else {
        $keys$$5_rv$$inline_103$$ = $goog$object$getKeys$$($col$$10$$)
      }
    }else {
      $keys$$5_rv$$inline_103$$ = $JSCompiler_alias_VOID$$
    }
  }
  for(var $l$$inline_104_values$$9$$ = $goog$structs$getValues$$($col$$10$$), $i$$inline_105_l$$18$$ = $l$$inline_104_values$$9$$.length, $i$$53$$ = 0;$i$$53$$ < $i$$inline_105_l$$18$$;$i$$53$$++) {
    if(!$f$$29$$.call($JSCompiler_alias_VOID$$, $l$$inline_104_values$$9$$[$i$$53$$], $keys$$5_rv$$inline_103$$ && $keys$$5_rv$$inline_103$$[$i$$53$$], $col$$10$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
}
;var $goog$iter$StopIteration$$ = "StopIteration" in $goog$global$$ ? $goog$global$$.StopIteration : Error("StopIteration");
function $goog$iter$Iterator$$() {
}
$goog$iter$Iterator$$.prototype.next = function $$goog$iter$Iterator$$$$next$() {
  $JSCompiler_alias_THROW$$($goog$iter$StopIteration$$)
};
$goog$iter$Iterator$$.prototype.$__iterator__$ = function $$goog$iter$Iterator$$$$$__iterator__$$() {
  return this
};
function $goog$iter$toIterator$$($iterable$$) {
  if($iterable$$ instanceof $goog$iter$Iterator$$) {
    return $iterable$$
  }
  if("function" == typeof $iterable$$.$__iterator__$) {
    return $iterable$$.$__iterator__$($JSCompiler_alias_FALSE$$)
  }
  if($goog$isArrayLike$$($iterable$$)) {
    var $i$$54$$ = 0, $newIter$$ = new $goog$iter$Iterator$$;
    $newIter$$.next = function $$newIter$$$next$() {
      for(;;) {
        $i$$54$$ >= $iterable$$.length && $JSCompiler_alias_THROW$$($goog$iter$StopIteration$$);
        if($i$$54$$ in $iterable$$) {
          return $iterable$$[$i$$54$$++]
        }
        $i$$54$$++
      }
    };
    return $newIter$$
  }
  $JSCompiler_alias_THROW$$(Error("Not implemented"))
}
function $goog$iter$forEach$$($iterable$$1$$, $f$$30$$) {
  if($goog$isArrayLike$$($iterable$$1$$)) {
    try {
      $goog$array$forEach$$($iterable$$1$$, $f$$30$$, $JSCompiler_alias_VOID$$)
    }catch($ex$$1$$) {
      $ex$$1$$ !== $goog$iter$StopIteration$$ && $JSCompiler_alias_THROW$$($ex$$1$$)
    }
  }else {
    $iterable$$1$$ = $goog$iter$toIterator$$($iterable$$1$$);
    try {
      for(;;) {
        $f$$30$$.call($JSCompiler_alias_VOID$$, $iterable$$1$$.next(), $JSCompiler_alias_VOID$$, $iterable$$1$$)
      }
    }catch($ex$$2$$) {
      $ex$$2$$ !== $goog$iter$StopIteration$$ && $JSCompiler_alias_THROW$$($ex$$2$$)
    }
  }
}
;function $goog$structs$Map$$($opt_map$$, $var_args$$51$$) {
  this.$map_$ = {};
  this.$keys_$ = [];
  var $argLength$$2$$ = arguments.length;
  if(1 < $argLength$$2$$) {
    $argLength$$2$$ % 2 && $JSCompiler_alias_THROW$$(Error("Uneven number of arguments"));
    for(var $i$$57$$ = 0;$i$$57$$ < $argLength$$2$$;$i$$57$$ += 2) {
      this.set(arguments[$i$$57$$], arguments[$i$$57$$ + 1])
    }
  }else {
    $opt_map$$ && this.$addAll$($opt_map$$)
  }
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Map$$.prototype;
$JSCompiler_prototypeAlias$$.$count_$ = 0;
$JSCompiler_prototypeAlias$$.$version_$ = 0;
$JSCompiler_prototypeAlias$$.$getCount$ = $JSCompiler_get$$("$count_$");
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for(var $rv$$13$$ = [], $i$$58$$ = 0;$i$$58$$ < this.$keys_$.length;$i$$58$$++) {
    $rv$$13$$.push(this.$map_$[this.$keys_$[$i$$58$$]])
  }
  return $rv$$13$$
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  return this.$keys_$.concat()
};
$JSCompiler_prototypeAlias$$.$containsValue$ = function $$JSCompiler_prototypeAlias$$$$containsValue$$($val$$28$$) {
  for(var $i$$59$$ = 0;$i$$59$$ < this.$keys_$.length;$i$$59$$++) {
    var $key$$45$$ = this.$keys_$[$i$$59$$];
    if($goog$structs$Map$hasKey_$$(this.$map_$, $key$$45$$) && this.$map_$[$key$$45$$] == $val$$28$$) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($otherMap$$, $opt_equalityFn$$) {
  if(this === $otherMap$$) {
    return $JSCompiler_alias_TRUE$$
  }
  if(this.$count_$ != $otherMap$$.$getCount$()) {
    return $JSCompiler_alias_FALSE$$
  }
  var $equalityFn$$ = $opt_equalityFn$$ || $goog$structs$Map$defaultEquals$$;
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for(var $key$$46$$, $i$$60$$ = 0;$key$$46$$ = this.$keys_$[$i$$60$$];$i$$60$$++) {
    if(!$equalityFn$$(this.get($key$$46$$), $otherMap$$.get($key$$46$$))) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
function $goog$structs$Map$defaultEquals$$($a$$5$$, $b$$4$$) {
  return $a$$5$$ === $b$$4$$
}
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$map_$ = {};
  this.$version_$ = this.$count_$ = this.$keys_$.length = 0
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($key$$47$$) {
  return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$47$$) ? (delete this.$map_$[$key$$47$$], this.$count_$--, this.$version_$++, this.$keys_$.length > 2 * this.$count_$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
function $JSCompiler_StaticMethods_cleanupKeysArray_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  if($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for(var $srcIndex$$ = 0, $destIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      var $key$$48$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$];
      $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$map_$, $key$$48$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$48$$);
      $srcIndex$$++
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$
  }
  if($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for(var $seen$$2$$ = {}, $destIndex$$ = $srcIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      $key$$48$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$], $goog$structs$Map$hasKey_$$($seen$$2$$, $key$$48$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$48$$, $seen$$2$$[$key$$48$$] = 1), $srcIndex$$++
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$
  }
}
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$$49$$, $opt_val$$1$$) {
  return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$49$$) ? this.$map_$[$key$$49$$] : $opt_val$$1$$
};
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$50$$, $value$$58$$) {
  $goog$structs$Map$hasKey_$$(this.$map_$, $key$$50$$) || (this.$count_$++, this.$keys_$.push($key$$50$$), this.$version_$++);
  this.$map_$[$key$$50$$] = $value$$58$$
};
$JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($map_values$$10$$) {
  var $keys$$6$$;
  $map_values$$10$$ instanceof $goog$structs$Map$$ ? ($keys$$6$$ = $map_values$$10$$.$getKeys$(), $map_values$$10$$ = $map_values$$10$$.$getValues$()) : ($keys$$6$$ = $goog$object$getKeys$$($map_values$$10$$), $map_values$$10$$ = $goog$object$getValues$$($map_values$$10$$));
  for(var $i$$61$$ = 0;$i$$61$$ < $keys$$6$$.length;$i$$61$$++) {
    this.set($keys$$6$$[$i$$61$$], $map_values$$10$$[$i$$61$$])
  }
};
$JSCompiler_prototypeAlias$$.$clone$ = function $$JSCompiler_prototypeAlias$$$$clone$$() {
  return new $goog$structs$Map$$(this)
};
$JSCompiler_prototypeAlias$$.$__iterator__$ = function $$JSCompiler_prototypeAlias$$$$__iterator__$$($opt_keys$$1$$) {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  var $i$$64$$ = 0, $keys$$7$$ = this.$keys_$, $map$$1$$ = this.$map_$, $version$$9$$ = this.$version_$, $selfObj$$4$$ = this, $newIter$$7$$ = new $goog$iter$Iterator$$;
  $newIter$$7$$.next = function $$newIter$$7$$$next$() {
    for(;;) {
      $version$$9$$ != $selfObj$$4$$.$version_$ && $JSCompiler_alias_THROW$$(Error("The map has changed since the iterator was created"));
      $i$$64$$ >= $keys$$7$$.length && $JSCompiler_alias_THROW$$($goog$iter$StopIteration$$);
      var $key$$53$$ = $keys$$7$$[$i$$64$$++];
      return $opt_keys$$1$$ ? $key$$53$$ : $map$$1$$[$key$$53$$]
    }
  };
  return $newIter$$7$$
};
function $goog$structs$Map$hasKey_$$($obj$$57$$, $key$$54$$) {
  return Object.prototype.hasOwnProperty.call($obj$$57$$, $key$$54$$)
}
;function $goog$structs$Set$$($opt_values$$1$$) {
  this.$map_$ = new $goog$structs$Map$$;
  $opt_values$$1$$ && this.$addAll$($opt_values$$1$$)
}
function $goog$structs$Set$getKey_$$($val$$29$$) {
  var $type$$52$$ = typeof $val$$29$$;
  return"object" == $type$$52$$ && $val$$29$$ || "function" == $type$$52$$ ? "o" + $goog$getUid$$($val$$29$$) : $type$$52$$.substr(0, 1) + $val$$29$$
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Set$$.prototype;
$JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
  return this.$map_$.$getCount$()
};
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($element$$8$$) {
  this.$map_$.set($goog$structs$Set$getKey_$$($element$$8$$), $element$$8$$)
};
$JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($col$$11_values$$11$$) {
  for(var $col$$11_values$$11$$ = $goog$structs$getValues$$($col$$11_values$$11$$), $l$$19$$ = $col$$11_values$$11$$.length, $i$$65$$ = 0;$i$$65$$ < $l$$19$$;$i$$65$$++) {
    this.add($col$$11_values$$11$$[$i$$65$$])
  }
};
$JSCompiler_prototypeAlias$$.$removeAll$ = function $$JSCompiler_prototypeAlias$$$$removeAll$$($col$$12_values$$12$$) {
  for(var $col$$12_values$$12$$ = $goog$structs$getValues$$($col$$12_values$$12$$), $l$$20$$ = $col$$12_values$$12$$.length, $i$$66$$ = 0;$i$$66$$ < $l$$20$$;$i$$66$$++) {
    this.remove($col$$12_values$$12$$[$i$$66$$])
  }
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($element$$9$$) {
  return this.$map_$.remove($goog$structs$Set$getKey_$$($element$$9$$))
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$map_$.clear()
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($element$$10_key$$inline_109$$) {
  $element$$10_key$$inline_109$$ = $goog$structs$Set$getKey_$$($element$$10_key$$inline_109$$);
  return $goog$structs$Map$hasKey_$$(this.$map_$.$map_$, $element$$10_key$$inline_109$$)
};
$JSCompiler_prototypeAlias$$.$intersection$ = function $$JSCompiler_prototypeAlias$$$$intersection$$($col$$14_values$$13$$) {
  for(var $result$$4$$ = new $goog$structs$Set$$, $col$$14_values$$13$$ = $goog$structs$getValues$$($col$$14_values$$13$$), $i$$67$$ = 0;$i$$67$$ < $col$$14_values$$13$$.length;$i$$67$$++) {
    var $value$$60$$ = $col$$14_values$$13$$[$i$$67$$];
    this.contains($value$$60$$) && $result$$4$$.add($value$$60$$)
  }
  return $result$$4$$
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  return this.$map_$.$getValues$()
};
$JSCompiler_prototypeAlias$$.$clone$ = function $$JSCompiler_prototypeAlias$$$$clone$$() {
  return new $goog$structs$Set$$(this)
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($col$$16$$) {
  return this.$getCount$() == $goog$structs$getCount$$($col$$16$$) && $JSCompiler_StaticMethods_isSubsetOf$$(this, $col$$16$$)
};
function $JSCompiler_StaticMethods_isSubsetOf$$($JSCompiler_StaticMethods_isSubsetOf$self$$, $col$$17$$) {
  var $colCount$$ = $goog$structs$getCount$$($col$$17$$);
  if($JSCompiler_StaticMethods_isSubsetOf$self$$.$getCount$() > $colCount$$) {
    return $JSCompiler_alias_FALSE$$
  }
  !($col$$17$$ instanceof $goog$structs$Set$$) && 5 < $colCount$$ && ($col$$17$$ = new $goog$structs$Set$$($col$$17$$));
  return $goog$structs$every$$($JSCompiler_StaticMethods_isSubsetOf$self$$, function($JSCompiler_temp$$567_JSCompiler_temp$$568_JSCompiler_temp$$569_value$$61$$) {
    if("function" == typeof $col$$17$$.contains) {
      $JSCompiler_temp$$567_JSCompiler_temp$$568_JSCompiler_temp$$569_value$$61$$ = $col$$17$$.contains($JSCompiler_temp$$567_JSCompiler_temp$$568_JSCompiler_temp$$569_value$$61$$)
    }else {
      if("function" == typeof $col$$17$$.$containsValue$) {
        $JSCompiler_temp$$567_JSCompiler_temp$$568_JSCompiler_temp$$569_value$$61$$ = $col$$17$$.$containsValue$($JSCompiler_temp$$567_JSCompiler_temp$$568_JSCompiler_temp$$569_value$$61$$)
      }else {
        if($goog$isArrayLike$$($col$$17$$) || $goog$isString$$($col$$17$$)) {
          $JSCompiler_temp$$567_JSCompiler_temp$$568_JSCompiler_temp$$569_value$$61$$ = 0 <= $goog$array$indexOf$$($col$$17$$, $JSCompiler_temp$$567_JSCompiler_temp$$568_JSCompiler_temp$$569_value$$61$$)
        }else {
          a: {
            for(var $key$$inline_575$$ in $col$$17$$) {
              if($col$$17$$[$key$$inline_575$$] == $JSCompiler_temp$$567_JSCompiler_temp$$568_JSCompiler_temp$$569_value$$61$$) {
                $JSCompiler_temp$$567_JSCompiler_temp$$568_JSCompiler_temp$$569_value$$61$$ = $JSCompiler_alias_TRUE$$;
                break a
              }
            }
            $JSCompiler_temp$$567_JSCompiler_temp$$568_JSCompiler_temp$$569_value$$61$$ = $JSCompiler_alias_FALSE$$
          }
        }
      }
    }
    return $JSCompiler_temp$$567_JSCompiler_temp$$568_JSCompiler_temp$$569_value$$61$$
  })
}
$JSCompiler_prototypeAlias$$.$__iterator__$ = function $$JSCompiler_prototypeAlias$$$$__iterator__$$() {
  return this.$map_$.$__iterator__$($JSCompiler_alias_FALSE$$)
};
function $goog$Disposable$$() {
}
$goog$Disposable$$.prototype.$disposed_$ = $JSCompiler_alias_FALSE$$;
$goog$Disposable$$.prototype.$dispose$ = function $$goog$Disposable$$$$$dispose$$() {
  this.$disposed_$ || (this.$disposed_$ = $JSCompiler_alias_TRUE$$, this.$disposeInternal$())
};
$goog$Disposable$$.prototype.$disposeInternal$ = function $$goog$Disposable$$$$$disposeInternal$$() {
  this.$dependentDisposables_$ && $goog$disposeAll$$.apply($JSCompiler_alias_NULL$$, this.$dependentDisposables_$)
};
function $goog$dispose$$($obj$$61$$) {
  $obj$$61$$ && "function" == typeof $obj$$61$$.$dispose$ && $obj$$61$$.$dispose$()
}
function $goog$disposeAll$$($var_args$$52$$) {
  for(var $i$$70$$ = 0, $len$$1$$ = arguments.length;$i$$70$$ < $len$$1$$;++$i$$70$$) {
    var $disposable$$1$$ = arguments[$i$$70$$];
    $goog$isArrayLike$$($disposable$$1$$) ? $goog$disposeAll$$.apply($JSCompiler_alias_NULL$$, $disposable$$1$$) : $goog$dispose$$($disposable$$1$$)
  }
}
;function $goog$structs$SimplePool$$($initialCount$$, $maxCount$$) {
  this.$maxCount_$ = $maxCount$$;
  this.$freeQueue_$ = [];
  $initialCount$$ > this.$maxCount_$ && $JSCompiler_alias_THROW$$(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var $i$$inline_113$$ = 0;$i$$inline_113$$ < $initialCount$$;$i$$inline_113$$++) {
    this.$freeQueue_$.push(this.$createObject$())
  }
}
$goog$inherits$$($goog$structs$SimplePool$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$structs$SimplePool$$.prototype;
$JSCompiler_prototypeAlias$$.$createObjectFn_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$disposeObjectFn_$ = $JSCompiler_alias_NULL$$;
function $JSCompiler_StaticMethods_releaseObject$$($JSCompiler_StaticMethods_releaseObject$self$$, $obj$$62$$) {
  $JSCompiler_StaticMethods_releaseObject$self$$.$freeQueue_$.length < $JSCompiler_StaticMethods_releaseObject$self$$.$maxCount_$ ? $JSCompiler_StaticMethods_releaseObject$self$$.$freeQueue_$.push($obj$$62$$) : $JSCompiler_StaticMethods_releaseObject$self$$.$disposeObject$($obj$$62$$)
}
$JSCompiler_prototypeAlias$$.$createObject$ = function $$JSCompiler_prototypeAlias$$$$createObject$$() {
  return this.$createObjectFn_$ ? this.$createObjectFn_$() : {}
};
$JSCompiler_prototypeAlias$$.$disposeObject$ = function $$JSCompiler_prototypeAlias$$$$disposeObject$$($obj$$63$$) {
  if(this.$disposeObjectFn_$) {
    this.$disposeObjectFn_$($obj$$63$$)
  }else {
    if($goog$isObject$$($obj$$63$$)) {
      if($goog$isFunction$$($obj$$63$$.$dispose$)) {
        $obj$$63$$.$dispose$()
      }else {
        for(var $i$$72$$ in $obj$$63$$) {
          delete $obj$$63$$[$i$$72$$]
        }
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$structs$SimplePool$$.$superClass_$.$disposeInternal$.call(this);
  for(var $freeQueue$$ = this.$freeQueue_$;$freeQueue$$.length;) {
    this.$disposeObject$($freeQueue$$.pop())
  }
  delete this.$freeQueue_$
};
function $goog$debug$Trace_$$() {
  this.$events_$ = [];
  this.$outstandingEvents_$ = new $goog$structs$Map$$;
  this.$tracerOverheadComment_$ = this.$tracerOverheadEnd_$ = this.$tracerOverheadStart_$ = this.$startTime_$ = 0;
  this.$stats_$ = new $goog$structs$Map$$;
  this.$commentCount_$ = this.$tracerCount_$ = 0;
  this.$nextId_$ = 1;
  this.$eventPool_$ = new $goog$structs$SimplePool$$(0, 4E3);
  this.$eventPool_$.$createObject$ = function $this$$eventPool_$$$createObject$$() {
    return new $goog$debug$Trace_$Event_$$
  };
  this.$statPool_$ = new $goog$structs$SimplePool$$(0, 50);
  this.$statPool_$.$createObject$ = function $this$$statPool_$$$createObject$$() {
    return new $goog$debug$Trace_$Stat_$$
  };
  var $that$$ = this;
  this.$idPool_$ = new $goog$structs$SimplePool$$(0, 2E3);
  this.$idPool_$.$createObject$ = function $this$$idPool_$$$createObject$$() {
    return"" + $that$$.$nextId_$++
  };
  this.$idPool_$.$disposeObject$ = $JSCompiler_emptyFn$$()
}
function $goog$debug$Trace_$Stat_$$() {
  this.$varAlloc$ = this.time = this.count = 0
}
$goog$debug$Trace_$Stat_$$.prototype.toString = function $$goog$debug$Trace_$Stat_$$$$toString$() {
  var $sb$$4$$ = [];
  $sb$$4$$.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
  this.$varAlloc$ && $sb$$4$$.push(" [VarAlloc = ", this.$varAlloc$, "]");
  return $sb$$4$$.join("")
};
function $goog$debug$Trace_$Event_$$() {
}
function $JSCompiler_StaticMethods_toTraceString$$($JSCompiler_StaticMethods_toTraceString$self$$, $startTime$$, $prevTime$$, $indent$$) {
  var $sb$$5$$ = [];
  -1 == $prevTime$$ ? $sb$$5$$.push("    ") : $sb$$5$$.push($goog$debug$Trace_$longToPaddedString_$$($JSCompiler_StaticMethods_toTraceString$self$$.$eventTime$ - $prevTime$$));
  $sb$$5$$.push(" ", $goog$debug$Trace_$formatTime_$$($JSCompiler_StaticMethods_toTraceString$self$$.$eventTime$ - $startTime$$));
  0 == $JSCompiler_StaticMethods_toTraceString$self$$.$eventType$ ? $sb$$5$$.push(" Start        ") : 1 == $JSCompiler_StaticMethods_toTraceString$self$$.$eventType$ ? ($sb$$5$$.push(" Done "), $sb$$5$$.push($goog$debug$Trace_$longToPaddedString_$$($JSCompiler_StaticMethods_toTraceString$self$$.$stopTime$ - $JSCompiler_StaticMethods_toTraceString$self$$.startTime), " ms ")) : $sb$$5$$.push(" Comment      ");
  $sb$$5$$.push($indent$$, $JSCompiler_StaticMethods_toTraceString$self$$);
  0 < $JSCompiler_StaticMethods_toTraceString$self$$.$totalVarAlloc$ && $sb$$5$$.push("[VarAlloc ", $JSCompiler_StaticMethods_toTraceString$self$$.$totalVarAlloc$, "] ");
  return $sb$$5$$.join("")
}
$goog$debug$Trace_$Event_$$.prototype.toString = function $$goog$debug$Trace_$Event_$$$$toString$() {
  return this.type == $JSCompiler_alias_NULL$$ ? this.$comment$ : "[" + this.type + "] " + this.$comment$
};
$goog$debug$Trace_$$.prototype.reset = function $$goog$debug$Trace_$$$$reset$() {
  for(var $i$$78$$ = 0;$i$$78$$ < this.$events_$.length;$i$$78$$++) {
    var $id$$2_keys$$8$$ = this.$eventPool_$.id;
    $id$$2_keys$$8$$ && $JSCompiler_StaticMethods_releaseObject$$(this.$idPool_$, $id$$2_keys$$8$$);
    $JSCompiler_StaticMethods_releaseObject$$(this.$eventPool_$, this.$events_$[$i$$78$$])
  }
  this.$events_$.length = 0;
  this.$outstandingEvents_$.clear();
  this.$startTime_$ = $goog$now$$();
  this.$commentCount_$ = this.$tracerCount_$ = this.$tracerOverheadComment_$ = this.$tracerOverheadEnd_$ = this.$tracerOverheadStart_$ = 0;
  $id$$2_keys$$8$$ = this.$stats_$.$getKeys$();
  for($i$$78$$ = 0;$i$$78$$ < $id$$2_keys$$8$$.length;$i$$78$$++) {
    var $stat$$ = this.$stats_$.get($id$$2_keys$$8$$[$i$$78$$]);
    $stat$$.count = 0;
    $stat$$.time = 0;
    $stat$$.$varAlloc$ = 0;
    $JSCompiler_StaticMethods_releaseObject$$(this.$statPool_$, $stat$$)
  }
  this.$stats_$.clear()
};
$goog$debug$Trace_$$.prototype.toString = function $$goog$debug$Trace_$$$$toString$() {
  for(var $sb$$6$$ = [], $etime_statKeys$$ = -1, $indent$$1_stat$$4$$ = [], $i$$82$$ = 0;$i$$82$$ < this.$events_$.length;$i$$82$$++) {
    var $e$$17$$ = this.$events_$[$i$$82$$];
    1 == $e$$17$$.$eventType$ && $indent$$1_stat$$4$$.pop();
    $sb$$6$$.push(" ", $JSCompiler_StaticMethods_toTraceString$$($e$$17$$, this.$startTime_$, $etime_statKeys$$, $indent$$1_stat$$4$$.join("")));
    $etime_statKeys$$ = $e$$17$$.$eventTime$;
    $sb$$6$$.push("\n");
    0 == $e$$17$$.$eventType$ && $indent$$1_stat$$4$$.push("|  ")
  }
  if(0 != this.$outstandingEvents_$.$getCount$()) {
    var $now$$3$$ = $goog$now$$();
    $sb$$6$$.push(" Unstopped timers:\n");
    $goog$iter$forEach$$(this.$outstandingEvents_$, function($startEvent$$1$$) {
      $sb$$6$$.push("  ", $startEvent$$1$$, " (", $now$$3$$ - $startEvent$$1$$.startTime, " ms, started at ", $goog$debug$Trace_$formatTime_$$($startEvent$$1$$.startTime), ")\n")
    })
  }
  $etime_statKeys$$ = this.$stats_$.$getKeys$();
  for($i$$82$$ = 0;$i$$82$$ < $etime_statKeys$$.length;$i$$82$$++) {
    $indent$$1_stat$$4$$ = this.$stats_$.get($etime_statKeys$$[$i$$82$$]), 1 < $indent$$1_stat$$4$$.count && $sb$$6$$.push(" TOTAL ", $indent$$1_stat$$4$$, "\n")
  }
  $sb$$6$$.push("Total tracers created ", this.$tracerCount_$, "\n", "Total comments created ", this.$commentCount_$, "\n", "Overhead start: ", this.$tracerOverheadStart_$, " ms\n", "Overhead end: ", this.$tracerOverheadEnd_$, " ms\n", "Overhead comment: ", this.$tracerOverheadComment_$, " ms\n");
  return $sb$$6$$.join("")
};
function $goog$debug$Trace_$longToPaddedString_$$($v$$) {
  var $v$$ = Math.round($v$$), $space$$1$$ = "";
  1E3 > $v$$ && ($space$$1$$ = " ");
  100 > $v$$ && ($space$$1$$ = "  ");
  10 > $v$$ && ($space$$1$$ = "   ");
  return $space$$1$$ + $v$$
}
function $goog$debug$Trace_$formatTime_$$($time$$1$$) {
  $time$$1$$ = Math.round($time$$1$$);
  return("" + (100 + $time$$1$$ / 1E3 % 60)).substring(1, 3) + "." + ("" + (1E3 + $time$$1$$ % 1E3)).substring(1, 4)
}
new $goog$debug$Trace_$$;
function $goog$events$Listener$$() {
}
var $goog$events$Listener$counter_$$ = 0;
$JSCompiler_prototypeAlias$$ = $goog$events$Listener$$.prototype;
$JSCompiler_prototypeAlias$$.key = 0;
$JSCompiler_prototypeAlias$$.$removed$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$callOnce$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$init$ = function $$JSCompiler_prototypeAlias$$$$init$$($listener$$26$$, $proxy$$, $src$$4$$, $type$$56$$, $capture$$, $opt_handler$$) {
  $goog$isFunction$$($listener$$26$$) ? this.$isFunctionListener_$ = $JSCompiler_alias_TRUE$$ : $listener$$26$$ && $listener$$26$$.handleEvent && $goog$isFunction$$($listener$$26$$.handleEvent) ? this.$isFunctionListener_$ = $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_THROW$$(Error("Invalid listener argument"));
  this.$listener$ = $listener$$26$$;
  this.$proxy$ = $proxy$$;
  this.src = $src$$4$$;
  this.type = $type$$56$$;
  this.capture = !!$capture$$;
  this.$handler$ = $opt_handler$$;
  this.$callOnce$ = $JSCompiler_alias_FALSE$$;
  this.key = ++$goog$events$Listener$counter_$$;
  this.$removed$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.handleEvent = function $$JSCompiler_prototypeAlias$$$handleEvent$($eventObject$$) {
  return this.$isFunctionListener_$ ? this.$listener$.call(this.$handler$ || this.src, $eventObject$$) : this.$listener$.handleEvent.call(this.$listener$, $eventObject$$)
};
!$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$(9);
var $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$(9), $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("8");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersion$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("528");
!$goog$userAgent$GECKO$$ || $goog$userAgent$isVersion$$("8");
function $goog$events$Event$$($type$$57$$, $opt_target$$2$$) {
  this.type = $type$$57$$;
  this.currentTarget = this.target = $opt_target$$2$$
}
$goog$inherits$$($goog$events$Event$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$events$Event$$.prototype;
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
$JSCompiler_prototypeAlias$$.$propagationStopped_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$returnValue_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.stopPropagation = function $$JSCompiler_prototypeAlias$$$stopPropagation$() {
  this.$propagationStopped_$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.preventDefault = function $$JSCompiler_prototypeAlias$$$preventDefault$() {
  this.$returnValue_$ = $JSCompiler_alias_FALSE$$
};
function $goog$reflect$sinkValue$$($x$$54$$) {
  $goog$reflect$sinkValue$$[" "]($x$$54$$);
  return $x$$54$$
}
$goog$reflect$sinkValue$$[" "] = $goog$nullFunction$$;
function $goog$events$BrowserEvent$$($opt_e$$, $opt_currentTarget$$) {
  $opt_e$$ && this.$init$($opt_e$$, $opt_currentTarget$$)
}
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
$JSCompiler_prototypeAlias$$ = $goog$events$BrowserEvent$$.prototype;
$JSCompiler_prototypeAlias$$.target = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.relatedTarget = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.offsetX = 0;
$JSCompiler_prototypeAlias$$.offsetY = 0;
$JSCompiler_prototypeAlias$$.clientX = 0;
$JSCompiler_prototypeAlias$$.clientY = 0;
$JSCompiler_prototypeAlias$$.screenX = 0;
$JSCompiler_prototypeAlias$$.screenY = 0;
$JSCompiler_prototypeAlias$$.button = 0;
$JSCompiler_prototypeAlias$$.keyCode = 0;
$JSCompiler_prototypeAlias$$.charCode = 0;
$JSCompiler_prototypeAlias$$.ctrlKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.altKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.shiftKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.metaKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$event_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$init$ = function $$JSCompiler_prototypeAlias$$$$init$$($e$$22$$, $opt_currentTarget$$1$$) {
  var $type$$59$$ = this.type = $e$$22$$.type;
  $goog$events$Event$$.call(this, $type$$59$$);
  this.target = $e$$22$$.target || $e$$22$$.srcElement;
  this.currentTarget = $opt_currentTarget$$1$$;
  var $relatedTarget$$ = $e$$22$$.relatedTarget;
  if($relatedTarget$$) {
    if($goog$userAgent$GECKO$$) {
      var $JSCompiler_inline_result$$115$$;
      a: {
        try {
          $goog$reflect$sinkValue$$($relatedTarget$$.nodeName);
          $JSCompiler_inline_result$$115$$ = $JSCompiler_alias_TRUE$$;
          break a
        }catch($e$$inline_117$$) {
        }
        $JSCompiler_inline_result$$115$$ = $JSCompiler_alias_FALSE$$
      }
      $JSCompiler_inline_result$$115$$ || ($relatedTarget$$ = $JSCompiler_alias_NULL$$)
    }
  }else {
    "mouseover" == $type$$59$$ ? $relatedTarget$$ = $e$$22$$.fromElement : "mouseout" == $type$$59$$ && ($relatedTarget$$ = $e$$22$$.toElement)
  }
  this.relatedTarget = $relatedTarget$$;
  this.offsetX = $goog$userAgent$WEBKIT$$ || $e$$22$$.offsetX !== $JSCompiler_alias_VOID$$ ? $e$$22$$.offsetX : $e$$22$$.layerX;
  this.offsetY = $goog$userAgent$WEBKIT$$ || $e$$22$$.offsetY !== $JSCompiler_alias_VOID$$ ? $e$$22$$.offsetY : $e$$22$$.layerY;
  this.clientX = $e$$22$$.clientX !== $JSCompiler_alias_VOID$$ ? $e$$22$$.clientX : $e$$22$$.pageX;
  this.clientY = $e$$22$$.clientY !== $JSCompiler_alias_VOID$$ ? $e$$22$$.clientY : $e$$22$$.pageY;
  this.screenX = $e$$22$$.screenX || 0;
  this.screenY = $e$$22$$.screenY || 0;
  this.button = $e$$22$$.button;
  this.keyCode = $e$$22$$.keyCode || 0;
  this.charCode = $e$$22$$.charCode || ("keypress" == $type$$59$$ ? $e$$22$$.keyCode : 0);
  this.ctrlKey = $e$$22$$.ctrlKey;
  this.altKey = $e$$22$$.altKey;
  this.shiftKey = $e$$22$$.shiftKey;
  this.metaKey = $e$$22$$.metaKey;
  this.state = $e$$22$$.state;
  this.$event_$ = $e$$22$$;
  delete this.$returnValue_$;
  delete this.$propagationStopped_$
};
$JSCompiler_prototypeAlias$$.stopPropagation = function $$JSCompiler_prototypeAlias$$$stopPropagation$() {
  $goog$events$BrowserEvent$$.$superClass_$.stopPropagation.call(this);
  this.$event_$.stopPropagation ? this.$event_$.stopPropagation() : this.$event_$.cancelBubble = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.preventDefault = function $$JSCompiler_prototypeAlias$$$preventDefault$() {
  $goog$events$BrowserEvent$$.$superClass_$.preventDefault.call(this);
  var $be$$ = this.$event_$;
  if($be$$.preventDefault) {
    $be$$.preventDefault()
  }else {
    if($be$$.returnValue = $JSCompiler_alias_FALSE$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$) {
      try {
        if($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
          $be$$.keyCode = -1
        }
      }catch($ex$$7$$) {
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$getBrowserEvent$ = $JSCompiler_get$$("$event_$");
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$BrowserEvent$$.$superClass_$.$disposeInternal$.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.$event_$ = $JSCompiler_alias_NULL$$
};
var $goog$events$listeners_$$ = {}, $goog$events$listenerTree_$$ = {}, $goog$events$sources_$$ = {}, $goog$events$onStringMap_$$ = {};
function $goog$events$listen$$($src$$7$$, $type$$60$$, $key$$56_listener$$29$$, $capture$$1_opt_capt$$2$$, $opt_handler$$1$$) {
  if($type$$60$$) {
    if($goog$isArray$$($type$$60$$)) {
      for(var $i$$86_proxy$$1$$ = 0;$i$$86_proxy$$1$$ < $type$$60$$.length;$i$$86_proxy$$1$$++) {
        $goog$events$listen$$($src$$7$$, $type$$60$$[$i$$86_proxy$$1$$], $key$$56_listener$$29$$, $capture$$1_opt_capt$$2$$, $opt_handler$$1$$)
      }
      return $JSCompiler_alias_NULL$$
    }
    var $capture$$1_opt_capt$$2$$ = !!$capture$$1_opt_capt$$2$$, $listenerObj_map$$2$$ = $goog$events$listenerTree_$$;
    $type$$60$$ in $listenerObj_map$$2$$ || ($listenerObj_map$$2$$[$type$$60$$] = {$count_$:0, $remaining_$:0});
    $listenerObj_map$$2$$ = $listenerObj_map$$2$$[$type$$60$$];
    $capture$$1_opt_capt$$2$$ in $listenerObj_map$$2$$ || ($listenerObj_map$$2$$[$capture$$1_opt_capt$$2$$] = {$count_$:0, $remaining_$:0}, $listenerObj_map$$2$$.$count_$++);
    var $listenerObj_map$$2$$ = $listenerObj_map$$2$$[$capture$$1_opt_capt$$2$$], $srcUid$$ = $goog$getUid$$($src$$7$$), $listenerArray$$;
    $listenerObj_map$$2$$.$remaining_$++;
    if($listenerObj_map$$2$$[$srcUid$$]) {
      $listenerArray$$ = $listenerObj_map$$2$$[$srcUid$$];
      for($i$$86_proxy$$1$$ = 0;$i$$86_proxy$$1$$ < $listenerArray$$.length;$i$$86_proxy$$1$$++) {
        if($listenerObj_map$$2$$ = $listenerArray$$[$i$$86_proxy$$1$$], $listenerObj_map$$2$$.$listener$ == $key$$56_listener$$29$$ && $listenerObj_map$$2$$.$handler$ == $opt_handler$$1$$) {
          if($listenerObj_map$$2$$.$removed$) {
            break
          }
          return $listenerArray$$[$i$$86_proxy$$1$$].key
        }
      }
    }else {
      $listenerArray$$ = $listenerObj_map$$2$$[$srcUid$$] = [], $listenerObj_map$$2$$.$count_$++
    }
    $i$$86_proxy$$1$$ = $goog$events$getProxy$$();
    $i$$86_proxy$$1$$.src = $src$$7$$;
    $listenerObj_map$$2$$ = new $goog$events$Listener$$;
    $listenerObj_map$$2$$.$init$($key$$56_listener$$29$$, $i$$86_proxy$$1$$, $src$$7$$, $type$$60$$, $capture$$1_opt_capt$$2$$, $opt_handler$$1$$);
    $key$$56_listener$$29$$ = $listenerObj_map$$2$$.key;
    $i$$86_proxy$$1$$.key = $key$$56_listener$$29$$;
    $listenerArray$$.push($listenerObj_map$$2$$);
    $goog$events$listeners_$$[$key$$56_listener$$29$$] = $listenerObj_map$$2$$;
    $goog$events$sources_$$[$srcUid$$] || ($goog$events$sources_$$[$srcUid$$] = []);
    $goog$events$sources_$$[$srcUid$$].push($listenerObj_map$$2$$);
    $src$$7$$.addEventListener ? ($src$$7$$ == $goog$global$$ || !$src$$7$$.$customEvent_$) && $src$$7$$.addEventListener($type$$60$$, $i$$86_proxy$$1$$, $capture$$1_opt_capt$$2$$) : $src$$7$$.attachEvent($type$$60$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$60$$] : $goog$events$onStringMap_$$[$type$$60$$] = "on" + $type$$60$$, $i$$86_proxy$$1$$);
    return $key$$56_listener$$29$$
  }
  $JSCompiler_alias_THROW$$(Error("Invalid event type"))
}
function $goog$events$getProxy$$() {
  var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$, $f$$38$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function($eventObject$$1$$) {
    return $proxyCallbackFunction$$.call($f$$38$$.src, $f$$38$$.key, $eventObject$$1$$)
  } : function($eventObject$$2_v$$1$$) {
    $eventObject$$2_v$$1$$ = $proxyCallbackFunction$$.call($f$$38$$.src, $f$$38$$.key, $eventObject$$2_v$$1$$);
    if(!$eventObject$$2_v$$1$$) {
      return $eventObject$$2_v$$1$$
    }
  };
  return $f$$38$$
}
function $goog$events$listenOnce$$($key$$57_src$$8$$, $type$$61$$, $listener$$30$$, $opt_capt$$3$$, $opt_handler$$2$$) {
  if($goog$isArray$$($type$$61$$)) {
    for(var $i$$87$$ = 0;$i$$87$$ < $type$$61$$.length;$i$$87$$++) {
      $goog$events$listenOnce$$($key$$57_src$$8$$, $type$$61$$[$i$$87$$], $listener$$30$$, $opt_capt$$3$$, $opt_handler$$2$$)
    }
  }else {
    $key$$57_src$$8$$ = $goog$events$listen$$($key$$57_src$$8$$, $type$$61$$, $listener$$30$$, $opt_capt$$3$$, $opt_handler$$2$$), $goog$events$listeners_$$[$key$$57_src$$8$$].$callOnce$ = $JSCompiler_alias_TRUE$$
  }
}
function $goog$events$unlisten$$($listenerArray$$1_objUid$$inline_123_src$$10$$, $type$$62$$, $listener$$32$$, $capture$$2_opt_capt$$5$$, $opt_handler$$4$$) {
  if($goog$isArray$$($type$$62$$)) {
    for(var $i$$88_map$$inline_122$$ = 0;$i$$88_map$$inline_122$$ < $type$$62$$.length;$i$$88_map$$inline_122$$++) {
      $goog$events$unlisten$$($listenerArray$$1_objUid$$inline_123_src$$10$$, $type$$62$$[$i$$88_map$$inline_122$$], $listener$$32$$, $capture$$2_opt_capt$$5$$, $opt_handler$$4$$)
    }
  }else {
    $capture$$2_opt_capt$$5$$ = !!$capture$$2_opt_capt$$5$$;
    a: {
      $i$$88_map$$inline_122$$ = $goog$events$listenerTree_$$;
      if($type$$62$$ in $i$$88_map$$inline_122$$ && ($i$$88_map$$inline_122$$ = $i$$88_map$$inline_122$$[$type$$62$$], $capture$$2_opt_capt$$5$$ in $i$$88_map$$inline_122$$ && ($i$$88_map$$inline_122$$ = $i$$88_map$$inline_122$$[$capture$$2_opt_capt$$5$$], $listenerArray$$1_objUid$$inline_123_src$$10$$ = $goog$getUid$$($listenerArray$$1_objUid$$inline_123_src$$10$$), $i$$88_map$$inline_122$$[$listenerArray$$1_objUid$$inline_123_src$$10$$]))) {
        $listenerArray$$1_objUid$$inline_123_src$$10$$ = $i$$88_map$$inline_122$$[$listenerArray$$1_objUid$$inline_123_src$$10$$];
        break a
      }
      $listenerArray$$1_objUid$$inline_123_src$$10$$ = $JSCompiler_alias_NULL$$
    }
    if($listenerArray$$1_objUid$$inline_123_src$$10$$) {
      for($i$$88_map$$inline_122$$ = 0;$i$$88_map$$inline_122$$ < $listenerArray$$1_objUid$$inline_123_src$$10$$.length;$i$$88_map$$inline_122$$++) {
        if($listenerArray$$1_objUid$$inline_123_src$$10$$[$i$$88_map$$inline_122$$].$listener$ == $listener$$32$$ && $listenerArray$$1_objUid$$inline_123_src$$10$$[$i$$88_map$$inline_122$$].capture == $capture$$2_opt_capt$$5$$ && $listenerArray$$1_objUid$$inline_123_src$$10$$[$i$$88_map$$inline_122$$].$handler$ == $opt_handler$$4$$) {
          $goog$events$unlistenByKey$$($listenerArray$$1_objUid$$inline_123_src$$10$$[$i$$88_map$$inline_122$$].key);
          break
        }
      }
    }
  }
}
function $goog$events$unlistenByKey$$($key$$58$$) {
  if(!$goog$events$listeners_$$[$key$$58$$]) {
    return $JSCompiler_alias_FALSE$$
  }
  var $listener$$33$$ = $goog$events$listeners_$$[$key$$58$$];
  if($listener$$33$$.$removed$) {
    return $JSCompiler_alias_FALSE$$
  }
  var $src$$11_srcUid$$1$$ = $listener$$33$$.src, $type$$63$$ = $listener$$33$$.type, $listenerArray$$2_proxy$$2$$ = $listener$$33$$.$proxy$, $capture$$3$$ = $listener$$33$$.capture;
  $src$$11_srcUid$$1$$.removeEventListener ? ($src$$11_srcUid$$1$$ == $goog$global$$ || !$src$$11_srcUid$$1$$.$customEvent_$) && $src$$11_srcUid$$1$$.removeEventListener($type$$63$$, $listenerArray$$2_proxy$$2$$, $capture$$3$$) : $src$$11_srcUid$$1$$.detachEvent && $src$$11_srcUid$$1$$.detachEvent($type$$63$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$63$$] : $goog$events$onStringMap_$$[$type$$63$$] = "on" + $type$$63$$, $listenerArray$$2_proxy$$2$$);
  $src$$11_srcUid$$1$$ = $goog$getUid$$($src$$11_srcUid$$1$$);
  $listenerArray$$2_proxy$$2$$ = $goog$events$listenerTree_$$[$type$$63$$][$capture$$3$$][$src$$11_srcUid$$1$$];
  if($goog$events$sources_$$[$src$$11_srcUid$$1$$]) {
    var $sourcesArray$$ = $goog$events$sources_$$[$src$$11_srcUid$$1$$];
    $goog$array$remove$$($sourcesArray$$, $listener$$33$$);
    0 == $sourcesArray$$.length && delete $goog$events$sources_$$[$src$$11_srcUid$$1$$]
  }
  $listener$$33$$.$removed$ = $JSCompiler_alias_TRUE$$;
  $listenerArray$$2_proxy$$2$$.$needsCleanup_$ = $JSCompiler_alias_TRUE$$;
  $goog$events$cleanUp_$$($type$$63$$, $capture$$3$$, $src$$11_srcUid$$1$$, $listenerArray$$2_proxy$$2$$);
  delete $goog$events$listeners_$$[$key$$58$$];
  return $JSCompiler_alias_TRUE$$
}
function $goog$events$cleanUp_$$($type$$64$$, $capture$$4$$, $srcUid$$2$$, $listenerArray$$3$$) {
  if(!$listenerArray$$3$$.$locked_$ && $listenerArray$$3$$.$needsCleanup_$) {
    for(var $oldIndex$$ = 0, $newIndex$$ = 0;$oldIndex$$ < $listenerArray$$3$$.length;$oldIndex$$++) {
      $listenerArray$$3$$[$oldIndex$$].$removed$ ? $listenerArray$$3$$[$oldIndex$$].$proxy$.src = $JSCompiler_alias_NULL$$ : ($oldIndex$$ != $newIndex$$ && ($listenerArray$$3$$[$newIndex$$] = $listenerArray$$3$$[$oldIndex$$]), $newIndex$$++)
    }
    $listenerArray$$3$$.length = $newIndex$$;
    $listenerArray$$3$$.$needsCleanup_$ = $JSCompiler_alias_FALSE$$;
    0 == $newIndex$$ && (delete $goog$events$listenerTree_$$[$type$$64$$][$capture$$4$$][$srcUid$$2$$], $goog$events$listenerTree_$$[$type$$64$$][$capture$$4$$].$count_$--, 0 == $goog$events$listenerTree_$$[$type$$64$$][$capture$$4$$].$count_$ && (delete $goog$events$listenerTree_$$[$type$$64$$][$capture$$4$$], $goog$events$listenerTree_$$[$type$$64$$].$count_$--), 0 == $goog$events$listenerTree_$$[$type$$64$$].$count_$ && delete $goog$events$listenerTree_$$[$type$$64$$])
  }
}
function $goog$events$removeAll$$($opt_obj$$38_sourcesArray$$1_srcUid$$3$$) {
  var $opt_capt$$7$$, $count$$8$$ = 0, $noCapt$$ = $opt_capt$$7$$ == $JSCompiler_alias_NULL$$;
  $opt_capt$$7$$ = !!$opt_capt$$7$$;
  if($opt_obj$$38_sourcesArray$$1_srcUid$$3$$ == $JSCompiler_alias_NULL$$) {
    $goog$object$forEach$$($goog$events$sources_$$, function($listeners$$) {
      for(var $i$$90$$ = $listeners$$.length - 1;0 <= $i$$90$$;$i$$90$$--) {
        var $listener$$36$$ = $listeners$$[$i$$90$$];
        if($noCapt$$ || $opt_capt$$7$$ == $listener$$36$$.capture) {
          $goog$events$unlistenByKey$$($listener$$36$$.key), $count$$8$$++
        }
      }
    })
  }else {
    if($opt_obj$$38_sourcesArray$$1_srcUid$$3$$ = $goog$getUid$$($opt_obj$$38_sourcesArray$$1_srcUid$$3$$), $goog$events$sources_$$[$opt_obj$$38_sourcesArray$$1_srcUid$$3$$]) {
      for(var $opt_obj$$38_sourcesArray$$1_srcUid$$3$$ = $goog$events$sources_$$[$opt_obj$$38_sourcesArray$$1_srcUid$$3$$], $i$$89$$ = $opt_obj$$38_sourcesArray$$1_srcUid$$3$$.length - 1;0 <= $i$$89$$;$i$$89$$--) {
        var $listener$$35$$ = $opt_obj$$38_sourcesArray$$1_srcUid$$3$$[$i$$89$$];
        if($noCapt$$ || $opt_capt$$7$$ == $listener$$35$$.capture) {
          $goog$events$unlistenByKey$$($listener$$35$$.key), $count$$8$$++
        }
      }
    }
  }
}
function $goog$events$hasListener$$($obj$$68_objUid$$1$$) {
  var $opt_type$$8$$ = $X$event$events$MODIFIED$$, $obj$$68_objUid$$1$$ = $goog$getUid$$($obj$$68_objUid$$1$$), $listeners$$1_map$$4$$ = $goog$events$sources_$$[$obj$$68_objUid$$1$$];
  if($listeners$$1_map$$4$$) {
    var $hasType$$ = $goog$isDef$$($opt_type$$8$$), $hasCapture$$ = $goog$isDef$$($JSCompiler_alias_VOID$$);
    return $hasType$$ && $hasCapture$$ ? ($listeners$$1_map$$4$$ = $goog$events$listenerTree_$$[$opt_type$$8$$], !!$listeners$$1_map$$4$$ && !!$listeners$$1_map$$4$$[$JSCompiler_alias_VOID$$] && $obj$$68_objUid$$1$$ in $listeners$$1_map$$4$$[$JSCompiler_alias_VOID$$]) : !$hasType$$ && !$hasCapture$$ ? $JSCompiler_alias_TRUE$$ : $goog$array$some$$($listeners$$1_map$$4$$, function($listener$$38$$) {
      return $hasType$$ && $listener$$38$$.type == $opt_type$$8$$ || $hasCapture$$ && $listener$$38$$.capture == $JSCompiler_alias_VOID$$
    })
  }
  return $JSCompiler_alias_FALSE$$
}
function $goog$events$fireListeners_$$($listenerArray$$5_map$$6$$, $obj$$70_objUid$$2$$, $type$$70$$, $capture$$9$$, $eventObject$$4$$) {
  var $retval$$ = 1, $obj$$70_objUid$$2$$ = $goog$getUid$$($obj$$70_objUid$$2$$);
  if($listenerArray$$5_map$$6$$[$obj$$70_objUid$$2$$]) {
    $listenerArray$$5_map$$6$$.$remaining_$--;
    $listenerArray$$5_map$$6$$ = $listenerArray$$5_map$$6$$[$obj$$70_objUid$$2$$];
    $listenerArray$$5_map$$6$$.$locked_$ ? $listenerArray$$5_map$$6$$.$locked_$++ : $listenerArray$$5_map$$6$$.$locked_$ = 1;
    try {
      for(var $length$$16$$ = $listenerArray$$5_map$$6$$.length, $i$$92$$ = 0;$i$$92$$ < $length$$16$$;$i$$92$$++) {
        var $listener$$39$$ = $listenerArray$$5_map$$6$$[$i$$92$$];
        $listener$$39$$ && !$listener$$39$$.$removed$ && ($retval$$ &= $goog$events$fireListener$$($listener$$39$$, $eventObject$$4$$) !== $JSCompiler_alias_FALSE$$)
      }
    }finally {
      $listenerArray$$5_map$$6$$.$locked_$--, $goog$events$cleanUp_$$($type$$70$$, $capture$$9$$, $obj$$70_objUid$$2$$, $listenerArray$$5_map$$6$$)
    }
  }
  return Boolean($retval$$)
}
function $goog$events$fireListener$$($listener$$40$$, $eventObject$$5$$) {
  var $rv$$14$$ = $listener$$40$$.handleEvent($eventObject$$5$$);
  $listener$$40$$.$callOnce$ && $goog$events$unlistenByKey$$($listener$$40$$.key);
  return $rv$$14$$
}
function $goog$events$handleBrowserEvent_$$($key$$60$$, $opt_evt$$) {
  if(!$goog$events$listeners_$$[$key$$60$$]) {
    return $JSCompiler_alias_TRUE$$
  }
  var $listener$$41$$ = $goog$events$listeners_$$[$key$$60$$], $be$$1_type$$72$$ = $listener$$41$$.type, $map$$8$$ = $goog$events$listenerTree_$$;
  if(!($be$$1_type$$72$$ in $map$$8$$)) {
    return $JSCompiler_alias_TRUE$$
  }
  var $map$$8$$ = $map$$8$$[$be$$1_type$$72$$], $ieEvent_part$$inline_127_retval$$1$$, $targetsMap$$1$$;
  if(!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
    var $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_125$$;
    if(!($JSCompiler_temp$$31_hasCapture$$2_parts$$inline_125$$ = $opt_evt$$)) {
      a: {
        $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_125$$ = ["window", "event"];
        for(var $cur$$inline_126_hasBubble$$1$$ = $goog$global$$;$ieEvent_part$$inline_127_retval$$1$$ = $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_125$$.shift();) {
          if($goog$isDefAndNotNull$$($cur$$inline_126_hasBubble$$1$$[$ieEvent_part$$inline_127_retval$$1$$])) {
            $cur$$inline_126_hasBubble$$1$$ = $cur$$inline_126_hasBubble$$1$$[$ieEvent_part$$inline_127_retval$$1$$]
          }else {
            $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_125$$ = $JSCompiler_alias_NULL$$;
            break a
          }
        }
        $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_125$$ = $cur$$inline_126_hasBubble$$1$$
      }
    }
    $ieEvent_part$$inline_127_retval$$1$$ = $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_125$$;
    $JSCompiler_temp$$31_hasCapture$$2_parts$$inline_125$$ = $JSCompiler_alias_TRUE$$ in $map$$8$$;
    $cur$$inline_126_hasBubble$$1$$ = $JSCompiler_alias_FALSE$$ in $map$$8$$;
    if($JSCompiler_temp$$31_hasCapture$$2_parts$$inline_125$$) {
      if(0 > $ieEvent_part$$inline_127_retval$$1$$.keyCode || $ieEvent_part$$inline_127_retval$$1$$.returnValue != $JSCompiler_alias_VOID$$) {
        return $JSCompiler_alias_TRUE$$
      }
      a: {
        var $evt$$14_useReturnValue$$inline_130$$ = $JSCompiler_alias_FALSE$$;
        if(0 == $ieEvent_part$$inline_127_retval$$1$$.keyCode) {
          try {
            $ieEvent_part$$inline_127_retval$$1$$.keyCode = -1;
            break a
          }catch($ex$$inline_131$$) {
            $evt$$14_useReturnValue$$inline_130$$ = $JSCompiler_alias_TRUE$$
          }
        }
        if($evt$$14_useReturnValue$$inline_130$$ || $ieEvent_part$$inline_127_retval$$1$$.returnValue == $JSCompiler_alias_VOID$$) {
          $ieEvent_part$$inline_127_retval$$1$$.returnValue = $JSCompiler_alias_TRUE$$
        }
      }
    }
    $evt$$14_useReturnValue$$inline_130$$ = new $goog$events$BrowserEvent$$;
    $evt$$14_useReturnValue$$inline_130$$.$init$($ieEvent_part$$inline_127_retval$$1$$, this);
    $ieEvent_part$$inline_127_retval$$1$$ = $JSCompiler_alias_TRUE$$;
    try {
      if($JSCompiler_temp$$31_hasCapture$$2_parts$$inline_125$$) {
        for(var $ancestors$$1$$ = [], $parent$$4$$ = $evt$$14_useReturnValue$$inline_130$$.currentTarget;$parent$$4$$;$parent$$4$$ = $parent$$4$$.parentNode) {
          $ancestors$$1$$.push($parent$$4$$)
        }
        $targetsMap$$1$$ = $map$$8$$[$JSCompiler_alias_TRUE$$];
        $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
        for(var $i$$94$$ = $ancestors$$1$$.length - 1;!$evt$$14_useReturnValue$$inline_130$$.$propagationStopped_$ && 0 <= $i$$94$$ && $targetsMap$$1$$.$remaining_$;$i$$94$$--) {
          $evt$$14_useReturnValue$$inline_130$$.currentTarget = $ancestors$$1$$[$i$$94$$], $ieEvent_part$$inline_127_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$1$$[$i$$94$$], $be$$1_type$$72$$, $JSCompiler_alias_TRUE$$, $evt$$14_useReturnValue$$inline_130$$)
        }
        if($cur$$inline_126_hasBubble$$1$$) {
          $targetsMap$$1$$ = $map$$8$$[$JSCompiler_alias_FALSE$$];
          $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
          for($i$$94$$ = 0;!$evt$$14_useReturnValue$$inline_130$$.$propagationStopped_$ && $i$$94$$ < $ancestors$$1$$.length && $targetsMap$$1$$.$remaining_$;$i$$94$$++) {
            $evt$$14_useReturnValue$$inline_130$$.currentTarget = $ancestors$$1$$[$i$$94$$], $ieEvent_part$$inline_127_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$1$$[$i$$94$$], $be$$1_type$$72$$, $JSCompiler_alias_FALSE$$, $evt$$14_useReturnValue$$inline_130$$)
          }
        }
      }else {
        $ieEvent_part$$inline_127_retval$$1$$ = $goog$events$fireListener$$($listener$$41$$, $evt$$14_useReturnValue$$inline_130$$)
      }
    }finally {
      $ancestors$$1$$ && ($ancestors$$1$$.length = 0), $evt$$14_useReturnValue$$inline_130$$.$dispose$()
    }
    return $ieEvent_part$$inline_127_retval$$1$$
  }
  $be$$1_type$$72$$ = new $goog$events$BrowserEvent$$($opt_evt$$, this);
  try {
    $ieEvent_part$$inline_127_retval$$1$$ = $goog$events$fireListener$$($listener$$41$$, $be$$1_type$$72$$)
  }finally {
    $be$$1_type$$72$$.$dispose$()
  }
  return $ieEvent_part$$inline_127_retval$$1$$
}
var $goog$events$uniqueIdCounter_$$ = 0;
function $goog$events$getUniqueId$$($identifier$$1$$) {
  return $identifier$$1$$ + "_" + $goog$events$uniqueIdCounter_$$++
}
;function $csgVector$$($ix$$, $iy$$, $iz$$) {
  this.$z_$ = this.$y_$ = this.$x_$ = 0;
  3 == arguments.length ? (this.$x_$ = Number($ix$$), this.$y_$ = Number($iy$$), this.$z_$ = Number($iz$$)) : "x" in $ix$$ && "y" in $ix$$ && "z" in $ix$$ ? (this.$x_$ = Number($ix$$.x()), this.$y_$ = Number($ix$$.y()), this.$z_$ = Number($ix$$.$z$())) : (this.$x_$ = Number($ix$$[0]), this.$y_$ = Number($ix$$[1]), this.$z_$ = Number($ix$$[2]))
}
$csgVector$$.prototype = {$clone$:function $$csgVector$$$$$clone$$() {
  return new $csgVector$$(this.$x_$, this.$y_$, this.$z_$)
}, $negated$:function $$csgVector$$$$$negated$$() {
  return new $csgVector$$(-this.$x_$, -this.$y_$, -this.$z_$)
}, $plus$:function $$csgVector$$$$$plus$$($a$$6$$) {
  return new $csgVector$$(this.$x_$ + $a$$6$$.x(), this.$y_$ + $a$$6$$.y(), this.$z_$ + $a$$6$$.$z$())
}, $minus$:function $$csgVector$$$$$minus$$($a$$7$$) {
  return new $csgVector$$(this.$x_$ - $a$$7$$.x(), this.$y_$ - $a$$7$$.y(), this.$z_$ - $a$$7$$.$z$())
}, $times$:function $$csgVector$$$$$times$$($a$$8$$) {
  return new $csgVector$$(this.$x_$ * $a$$8$$, this.$y_$ * $a$$8$$, this.$z_$ * $a$$8$$)
}, $dividedBy$:function $$csgVector$$$$$dividedBy$$($a$$9$$) {
  return new $csgVector$$(this.$x_$ / $a$$9$$, this.$y_$ / $a$$9$$, this.$z_$ / $a$$9$$)
}, $dot$:function $$csgVector$$$$$dot$$($a$$10$$) {
  return this.$x_$ * $a$$10$$.x() + this.$y_$ * $a$$10$$.y() + this.$z_$ * $a$$10$$.$z$()
}, $lerp$:function $$csgVector$$$$$lerp$$($a$$11$$, $t$$) {
  return this.$plus$($a$$11$$.$minus$(this).$times$($t$$))
}, length:function $$csgVector$$$$length$() {
  return Math.sqrt(this.$dot$(this))
}, $unit$:function $$csgVector$$$$$unit$$() {
  return this.$dividedBy$(this.length())
}, $cross$:function $$csgVector$$$$$cross$$($a$$12$$) {
  return new $csgVector$$(this.$y_$ * $a$$12$$.$z$() - this.$z_$ * $a$$12$$.y(), this.$z_$ * $a$$12$$.x() - this.$x_$ * $a$$12$$.$z$(), this.$x_$ * $a$$12$$.y() - this.$y_$ * $a$$12$$.x())
}, x:$JSCompiler_get$$("$x_$"), y:$JSCompiler_get$$("$y_$"), $z$:$JSCompiler_get$$("$z_$")};
$goog$exportSymbol$$("csgVector", $csgVector$$);
$goog$exportSymbol$$("csgVector.prototype.clone", $csgVector$$.prototype.$clone$);
$goog$exportSymbol$$("csgVector.prototype.plus", $csgVector$$.prototype.$plus$);
$goog$exportSymbol$$("csgVector.prototype.minus", $csgVector$$.prototype.$minus$);
$goog$exportSymbol$$("csgVector.prototype.dividedBy", $csgVector$$.prototype.$dividedBy$);
$goog$exportSymbol$$("csgVector.prototype.times", $csgVector$$.prototype.$times$);
$goog$exportSymbol$$("csgVector.prototype.dot", $csgVector$$.prototype.$dot$);
$goog$exportSymbol$$("csgVector.prototype.lerp", $csgVector$$.prototype.$lerp$);
$goog$exportSymbol$$("csgVector.prototype.length", $csgVector$$.prototype.length);
$goog$exportSymbol$$("csgVector.prototype.unit", $csgVector$$.prototype.$unit$);
$goog$exportSymbol$$("csgVector.prototype.cross", $csgVector$$.prototype.$cross$);
$goog$exportSymbol$$("csgVector.prototype.negated", $csgVector$$.prototype.$negated$);
$goog$exportSymbol$$("csgVector.prototype.x", $csgVector$$.prototype.x);
$goog$exportSymbol$$("csgVector.prototype.y", $csgVector$$.prototype.y);
$goog$exportSymbol$$("csgVector.prototype.z", $csgVector$$.prototype.$z$);
function $goog$json$Serializer$$() {
  this.$replacer_$ = $JSCompiler_alias_VOID$$
}
function $JSCompiler_StaticMethods_serialize_$$($JSCompiler_StaticMethods_serialize_$self$$, $object$$8$$, $sb$$8$$) {
  switch(typeof $object$$8$$) {
    case "string":
      $JSCompiler_StaticMethods_serializeString_$$($object$$8$$, $sb$$8$$);
      break;
    case "number":
      $sb$$8$$.push(isFinite($object$$8$$) && !isNaN($object$$8$$) ? $object$$8$$ : "null");
      break;
    case "boolean":
      $sb$$8$$.push($object$$8$$);
      break;
    case "undefined":
      $sb$$8$$.push("null");
      break;
    case "object":
      if($object$$8$$ == $JSCompiler_alias_NULL$$) {
        $sb$$8$$.push("null");
        break
      }
      if($goog$isArray$$($object$$8$$)) {
        var $l$$inline_140_sep$$inline_148$$ = $object$$8$$.length;
        $sb$$8$$.push("[");
        for(var $sep$$inline_141_value$$inline_143_value$$inline_150$$ = "", $i$$inline_142_key$$inline_149$$ = 0;$i$$inline_142_key$$inline_149$$ < $l$$inline_140_sep$$inline_148$$;$i$$inline_142_key$$inline_149$$++) {
          $sb$$8$$.push($sep$$inline_141_value$$inline_143_value$$inline_150$$), $sep$$inline_141_value$$inline_143_value$$inline_150$$ = $object$$8$$[$i$$inline_142_key$$inline_149$$], $JSCompiler_StaticMethods_serialize_$$($JSCompiler_StaticMethods_serialize_$self$$, $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$ ? $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$.call($object$$8$$, "" + $i$$inline_142_key$$inline_149$$, $sep$$inline_141_value$$inline_143_value$$inline_150$$) : $sep$$inline_141_value$$inline_143_value$$inline_150$$, 
          $sb$$8$$), $sep$$inline_141_value$$inline_143_value$$inline_150$$ = ","
        }
        $sb$$8$$.push("]");
        break
      }
      $sb$$8$$.push("{");
      $l$$inline_140_sep$$inline_148$$ = "";
      for($i$$inline_142_key$$inline_149$$ in $object$$8$$) {
        Object.prototype.hasOwnProperty.call($object$$8$$, $i$$inline_142_key$$inline_149$$) && ($sep$$inline_141_value$$inline_143_value$$inline_150$$ = $object$$8$$[$i$$inline_142_key$$inline_149$$], "function" != typeof $sep$$inline_141_value$$inline_143_value$$inline_150$$ && ($sb$$8$$.push($l$$inline_140_sep$$inline_148$$), $JSCompiler_StaticMethods_serializeString_$$($i$$inline_142_key$$inline_149$$, $sb$$8$$), $sb$$8$$.push(":"), $JSCompiler_StaticMethods_serialize_$$($JSCompiler_StaticMethods_serialize_$self$$, 
        $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$ ? $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$.call($object$$8$$, $i$$inline_142_key$$inline_149$$, $sep$$inline_141_value$$inline_143_value$$inline_150$$) : $sep$$inline_141_value$$inline_143_value$$inline_150$$, $sb$$8$$), $l$$inline_140_sep$$inline_148$$ = ","))
      }
      $sb$$8$$.push("}");
      break;
    case "function":
      break;
    default:
      $JSCompiler_alias_THROW$$(Error("Unknown type: " + typeof $object$$8$$))
  }
}
var $goog$json$Serializer$charToJsonCharCache_$$ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, $goog$json$Serializer$charsToReplace_$$ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function $JSCompiler_StaticMethods_serializeString_$$($s$$18$$, $sb$$9$$) {
  $sb$$9$$.push('"', $s$$18$$.replace($goog$json$Serializer$charsToReplace_$$, function($c$$1$$) {
    if($c$$1$$ in $goog$json$Serializer$charToJsonCharCache_$$) {
      return $goog$json$Serializer$charToJsonCharCache_$$[$c$$1$$]
    }
    var $cc$$2$$ = $c$$1$$.charCodeAt(0), $rv$$16$$ = "\\u";
    16 > $cc$$2$$ ? $rv$$16$$ += "000" : 256 > $cc$$2$$ ? $rv$$16$$ += "00" : 4096 > $cc$$2$$ && ($rv$$16$$ += "0");
    return $goog$json$Serializer$charToJsonCharCache_$$[$c$$1$$] = $rv$$16$$ + $cc$$2$$.toString(16)
  }), '"')
}
;function $goog$events$EventTarget$$() {
}
$goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$events$EventTarget$$.prototype;
$JSCompiler_prototypeAlias$$.$customEvent_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$parentEventTarget_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$setParentEventTarget$ = $JSCompiler_set$$("$parentEventTarget_$");
$JSCompiler_prototypeAlias$$.addEventListener = function $$JSCompiler_prototypeAlias$$$addEventListener$($type$$73$$, $handler$$8$$, $opt_capture$$1$$, $opt_handlerScope$$) {
  $goog$events$listen$$(this, $type$$73$$, $handler$$8$$, $opt_capture$$1$$, $opt_handlerScope$$)
};
$JSCompiler_prototypeAlias$$.removeEventListener = function $$JSCompiler_prototypeAlias$$$removeEventListener$($type$$74$$, $handler$$9$$, $opt_capture$$2$$, $opt_handlerScope$$1$$) {
  $goog$events$unlisten$$(this, $type$$74$$, $handler$$9$$, $opt_capture$$2$$, $opt_handlerScope$$1$$)
};
$JSCompiler_prototypeAlias$$.dispatchEvent = function $$JSCompiler_prototypeAlias$$$dispatchEvent$($JSCompiler_inline_result$$152_e$$27_e$$inline_154$$) {
  var $hasCapture$$inline_160_type$$inline_155$$ = $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.type || $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$, $map$$inline_156$$ = $goog$events$listenerTree_$$;
  if($hasCapture$$inline_160_type$$inline_155$$ in $map$$inline_156$$) {
    if($goog$isString$$($JSCompiler_inline_result$$152_e$$27_e$$inline_154$$)) {
      $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$ = new $goog$events$Event$$($JSCompiler_inline_result$$152_e$$27_e$$inline_154$$, this)
    }else {
      if($JSCompiler_inline_result$$152_e$$27_e$$inline_154$$ instanceof $goog$events$Event$$) {
        $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.target = $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.target || this
      }else {
        var $oldEvent$$inline_157_rv$$inline_158$$ = $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$, $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$ = new $goog$events$Event$$($hasCapture$$inline_160_type$$inline_155$$, this);
        $goog$object$extend$$($JSCompiler_inline_result$$152_e$$27_e$$inline_154$$, $oldEvent$$inline_157_rv$$inline_158$$)
      }
    }
    var $oldEvent$$inline_157_rv$$inline_158$$ = 1, $ancestors$$inline_159_current$$inline_164$$, $map$$inline_156$$ = $map$$inline_156$$[$hasCapture$$inline_160_type$$inline_155$$], $hasCapture$$inline_160_type$$inline_155$$ = $JSCompiler_alias_TRUE$$ in $map$$inline_156$$, $parent$$inline_162_targetsMap$$inline_161$$;
    if($hasCapture$$inline_160_type$$inline_155$$) {
      $ancestors$$inline_159_current$$inline_164$$ = [];
      for($parent$$inline_162_targetsMap$$inline_161$$ = this;$parent$$inline_162_targetsMap$$inline_161$$;$parent$$inline_162_targetsMap$$inline_161$$ = $parent$$inline_162_targetsMap$$inline_161$$.$parentEventTarget_$) {
        $ancestors$$inline_159_current$$inline_164$$.push($parent$$inline_162_targetsMap$$inline_161$$)
      }
      $parent$$inline_162_targetsMap$$inline_161$$ = $map$$inline_156$$[$JSCompiler_alias_TRUE$$];
      $parent$$inline_162_targetsMap$$inline_161$$.$remaining_$ = $parent$$inline_162_targetsMap$$inline_161$$.$count_$;
      for(var $i$$inline_163$$ = $ancestors$$inline_159_current$$inline_164$$.length - 1;!$JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.$propagationStopped_$ && 0 <= $i$$inline_163$$ && $parent$$inline_162_targetsMap$$inline_161$$.$remaining_$;$i$$inline_163$$--) {
        $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.currentTarget = $ancestors$$inline_159_current$$inline_164$$[$i$$inline_163$$], $oldEvent$$inline_157_rv$$inline_158$$ &= $goog$events$fireListeners_$$($parent$$inline_162_targetsMap$$inline_161$$, $ancestors$$inline_159_current$$inline_164$$[$i$$inline_163$$], $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.type, $JSCompiler_alias_TRUE$$, $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$) && $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.$returnValue_$ != 
        $JSCompiler_alias_FALSE$$
      }
    }
    if($JSCompiler_alias_FALSE$$ in $map$$inline_156$$) {
      if($parent$$inline_162_targetsMap$$inline_161$$ = $map$$inline_156$$[$JSCompiler_alias_FALSE$$], $parent$$inline_162_targetsMap$$inline_161$$.$remaining_$ = $parent$$inline_162_targetsMap$$inline_161$$.$count_$, $hasCapture$$inline_160_type$$inline_155$$) {
        for($i$$inline_163$$ = 0;!$JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.$propagationStopped_$ && $i$$inline_163$$ < $ancestors$$inline_159_current$$inline_164$$.length && $parent$$inline_162_targetsMap$$inline_161$$.$remaining_$;$i$$inline_163$$++) {
          $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.currentTarget = $ancestors$$inline_159_current$$inline_164$$[$i$$inline_163$$], $oldEvent$$inline_157_rv$$inline_158$$ &= $goog$events$fireListeners_$$($parent$$inline_162_targetsMap$$inline_161$$, $ancestors$$inline_159_current$$inline_164$$[$i$$inline_163$$], $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.type, $JSCompiler_alias_FALSE$$, $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$) && $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.$returnValue_$ != 
          $JSCompiler_alias_FALSE$$
        }
      }else {
        for($ancestors$$inline_159_current$$inline_164$$ = this;!$JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.$propagationStopped_$ && $ancestors$$inline_159_current$$inline_164$$ && $parent$$inline_162_targetsMap$$inline_161$$.$remaining_$;$ancestors$$inline_159_current$$inline_164$$ = $ancestors$$inline_159_current$$inline_164$$.$parentEventTarget_$) {
          $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.currentTarget = $ancestors$$inline_159_current$$inline_164$$, $oldEvent$$inline_157_rv$$inline_158$$ &= $goog$events$fireListeners_$$($parent$$inline_162_targetsMap$$inline_161$$, $ancestors$$inline_159_current$$inline_164$$, $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.type, $JSCompiler_alias_FALSE$$, $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$) && $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$.$returnValue_$ != 
          $JSCompiler_alias_FALSE$$
        }
      }
    }
    $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$ = Boolean($oldEvent$$inline_157_rv$$inline_158$$)
  }else {
    $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$ = $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_inline_result$$152_e$$27_e$$inline_154$$
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
  $goog$events$removeAll$$(this);
  this.$parentEventTarget_$ = $JSCompiler_alias_NULL$$
};
function $X$base$$() {
  this._className = "base";
  this.$_dirty$ = $JSCompiler_alias_FALSE$$
}
$goog$inherits$$($X$base$$, $goog$events$EventTarget$$);
$X$base$$.prototype.className = $JSCompiler_get$$("_className");
$X$base$$.prototype.print = function $$X$base$$$$print$() {
  var $attributes$$ = Object.keys(this), $attributesStringList$$ = "", $className$$3$$ = "<unknown>", $a$$13$$ = 0;
  for($a$$13$$ in $attributes$$) {
    var $aName$$ = "this." + $attributes$$[$a$$13$$], $aValue$$ = eval($aName$$);
    "this._className" == $aName$$ ? $className$$3$$ = $aValue$$ : $attributesStringList$$ += $aName$$ + ": " + $aValue$$ + "\n"
  }
  return"== X." + $className$$3$$ + " ==\n" + $attributesStringList$$
};
$X$base$$.prototype.$dirty$ = $JSCompiler_get$$("$_dirty$");
function $JSCompiler_StaticMethods_setClean$$($JSCompiler_StaticMethods_setClean$self$$) {
  $JSCompiler_StaticMethods_setClean$self$$.$_dirty$ = $JSCompiler_alias_FALSE$$
}
$goog$exportSymbol$$("X.base", $X$base$$);
$goog$exportSymbol$$("X.base.prototype.className", $X$base$$.prototype.className);
$goog$exportSymbol$$("X.base.prototype.print", $X$base$$.prototype.print);
$goog$exportSymbol$$("X.base.prototype.dirty", $X$base$$.prototype.$dirty$);
function $X$indexer$$() {
  $X$base$$.call(this);
  this._className = "indexer";
  this.$_unique$ = [];
  this.$_map$ = {}
}
$goog$inherits$$($X$indexer$$, $X$base$$);
$X$indexer$$.prototype.add = function $$X$indexer$$$$add$($object$$9$$) {
  $goog$isDefAndNotNull$$($object$$9$$) || $JSCompiler_alias_THROW$$(Error("Invalid object."));
  var $key$$62_sb$$inline_578$$;
  $key$$62_sb$$inline_578$$ = [];
  $JSCompiler_StaticMethods_serialize_$$(new $goog$json$Serializer$$, $object$$9$$, $key$$62_sb$$inline_578$$);
  $key$$62_sb$$inline_578$$ = $key$$62_sb$$inline_578$$.join("");
  $key$$62_sb$$inline_578$$ in this.$_map$ || (this.$_map$[$key$$62_sb$$inline_578$$] = this.$_unique$.length, this.$_unique$.push($object$$9$$));
  return this.$_map$[$key$$62_sb$$inline_578$$]
};
$X$indexer$$.prototype.unique = $JSCompiler_get$$("$_unique$");
function $csgVertex$$($pos$$, $normal$$) {
  this.$pos_$ = new $csgVector$$($pos$$);
  this.$normal_$ = new $csgVector$$($normal$$)
}
$csgVertex$$.prototype = {$clone$:function $$csgVertex$$$$$clone$$() {
  return new $csgVertex$$(this.$pos_$.$clone$(), this.$normal_$.$clone$())
}, $flip$:function $$csgVertex$$$$$flip$$() {
  this.$normal_$ = this.$normal_$.$negated$()
}, $interpolate$:function $$csgVertex$$$$$interpolate$$($other$$4$$, $t$$1$$) {
  return new $csgVertex$$(this.$pos_$.$lerp$($other$$4$$.$pos_$, $t$$1$$), this.$normal_$.$lerp$($other$$4$$.$normal_$, $t$$1$$))
}, $pos$:$JSCompiler_get$$("$pos_$"), $normal$:$JSCompiler_get$$("$normal_$")};
$goog$exportSymbol$$("csgVertex", $csgVertex$$);
$goog$exportSymbol$$("csgVertex.prototype.clone", $csgVertex$$.prototype.$clone$);
$goog$exportSymbol$$("csgVertex.prototype.flip", $csgVertex$$.prototype.$flip$);
$goog$exportSymbol$$("csgVertex.prototype.interpolate", $csgVertex$$.prototype.$interpolate$);
$goog$exportSymbol$$("csgVertex.prototype.pos", $csgVertex$$.prototype.$pos$);
$goog$exportSymbol$$("csgVertex.prototype.normal", $csgVertex$$.prototype.$normal$);
function $X$file$$($path$$6$$) {
  $X$base$$.call(this);
  this._className = "file";
  this.$_path$ = $path$$6$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
}
$goog$inherits$$($X$file$$, $X$base$$);
$X$file$$.prototype.path = $JSCompiler_get$$("$_path$");
function $X$colorTable$$() {
  $X$base$$.call(this);
  this._className = "colorTable";
  this.$_map$ = new $goog$structs$Map$$;
  var $counter$$ = window["X.Counter"];
  $counter$$.$increment$();
  this._id = $counter$$.value();
  this.$_file$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($X$colorTable$$, $X$base$$);
$X$colorTable$$.prototype.add = function $$X$colorTable$$$$add$($value$$66$$, $label$$2$$, $r$$, $g$$, $b$$5$$, $a$$14$$) {
  (!$goog$isNumber$$($value$$66$$) || !$goog$isNumber$$($r$$) || !$goog$isNumber$$($g$$) || !$goog$isNumber$$($b$$5$$) || !$goog$isNumber$$($a$$14$$)) && $JSCompiler_alias_THROW$$(Error("Invalid color table entry."));
  this.$_map$.set($value$$66$$, [$label$$2$$, $r$$, $g$$, $b$$5$$, $a$$14$$]);
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$X$colorTable$$.prototype.id = $JSCompiler_get$$("_id");
$X$colorTable$$.prototype.file = $JSCompiler_get$$("$_file$");
$X$colorTable$$.prototype.$setFile$ = function $$X$colorTable$$$$$setFile$$($file$$) {
  $goog$isDefAndNotNull$$($file$$) ? ($goog$isString$$($file$$) && ($file$$ = new $X$file$$($file$$)), this.$_file$ = $file$$) : this.$_file$ = $JSCompiler_alias_NULL$$
};
function $csgPlane$$($normal$$1$$, $w$$4$$) {
  this.$normal_$ = $normal$$1$$;
  this.$w_$ = $w$$4$$
}
$csgPlane$$.prototype = {$clone$:function $$csgPlane$$$$$clone$$() {
  return new $csgPlane$$(this.$normal_$.$clone$(), this.$w_$)
}, $flip$:function $$csgPlane$$$$$flip$$() {
  this.$normal_$ = this.$normal_$.$negated$();
  this.$w_$ = -this.$w_$
}, $w$:$JSCompiler_get$$("$w_$"), $normal$:$JSCompiler_get$$("$normal_$")};
$goog$exportSymbol$$("csgPlane.prototype.w", $csgPlane$$.prototype.$w$);
$goog$exportSymbol$$("csgPlane.prototype.normal", $csgPlane$$.prototype.$normal$);
function $csgPolygon$$($vertices$$, $shared$$) {
  this.$vertices_$ = $vertices$$;
  this.$shared_$ = $shared$$;
  var $a$$inline_168$$ = $vertices$$[0].$pos_$, $c$$inline_170_n$$inline_171$$ = $vertices$$[2].$pos_$, $c$$inline_170_n$$inline_171$$ = $vertices$$[1].$pos_$.$minus$($a$$inline_168$$).$cross$($c$$inline_170_n$$inline_171$$.$minus$($a$$inline_168$$)).$unit$();
  this.$plane_$ = new $csgPlane$$($c$$inline_170_n$$inline_171$$, $c$$inline_170_n$$inline_171$$.$dot$($a$$inline_168$$))
}
$csgPolygon$$.prototype = {$clone$:function $$csgPolygon$$$$$clone$$() {
  var $vertices$$1$$ = this.$vertices_$.map(function($v$$2$$) {
    return $v$$2$$.$clone$()
  });
  return new $csgPolygon$$($vertices$$1$$, this.$shared_$)
}, $flip$:function $$csgPolygon$$$$$flip$$() {
  this.$vertices_$.reverse().map(function($v$$3$$) {
    $v$$3$$.$flip$()
  });
  this.$plane_$.$flip$()
}, $vertices$:$JSCompiler_get$$("$vertices_$"), $shared$:$JSCompiler_get$$("$shared_$"), $splitPolygon$:function $$csgPolygon$$$$$splitPolygon$$($plane$$, $coplanarFront_f$$39$$, $b$$7_coplanarBack$$, $front$$, $back$$) {
  for(var $polygonType_vi$$ = 0, $types$$ = [], $i$$96$$ = 0;$i$$96$$ < this.$vertices_$.length;$i$$96$$++) {
    var $t$$2_ti_type$$75_v$$4$$ = $plane$$.$normal_$.$dot$(this.$vertices_$[$i$$96$$].$pos_$) - $plane$$.$w_$, $t$$2_ti_type$$75_v$$4$$ = -1.0E-5 > $t$$2_ti_type$$75_v$$4$$ ? 2 : 1.0E-5 < $t$$2_ti_type$$75_v$$4$$ ? 1 : 0, $polygonType_vi$$ = $polygonType_vi$$ | $t$$2_ti_type$$75_v$$4$$;
    $types$$.push($t$$2_ti_type$$75_v$$4$$)
  }
  switch($polygonType_vi$$) {
    case 0:
      (0 < $plane$$.$normal_$.$dot$(this.$plane_$.$normal_$) ? $coplanarFront_f$$39$$ : $b$$7_coplanarBack$$).push(this);
      break;
    case 1:
      $front$$.push(this);
      break;
    case 2:
      $back$$.push(this);
      break;
    case 3:
      $coplanarFront_f$$39$$ = [];
      $b$$7_coplanarBack$$ = [];
      for($i$$96$$ = 0;$i$$96$$ < this.$vertices_$.length;$i$$96$$++) {
        var $j$$5_vj$$ = ($i$$96$$ + 1) % this.$vertices_$.length, $t$$2_ti_type$$75_v$$4$$ = $types$$[$i$$96$$], $tj$$ = $types$$[$j$$5_vj$$], $polygonType_vi$$ = this.$vertices_$[$i$$96$$], $j$$5_vj$$ = this.$vertices_$[$j$$5_vj$$];
        2 != $t$$2_ti_type$$75_v$$4$$ && $coplanarFront_f$$39$$.push($polygonType_vi$$);
        1 != $t$$2_ti_type$$75_v$$4$$ && $b$$7_coplanarBack$$.push(2 != $t$$2_ti_type$$75_v$$4$$ ? $polygonType_vi$$.$clone$() : $polygonType_vi$$);
        3 == ($t$$2_ti_type$$75_v$$4$$ | $tj$$) && ($t$$2_ti_type$$75_v$$4$$ = ($plane$$.$w_$ - $plane$$.$normal_$.$dot$($polygonType_vi$$.$pos_$)) / $plane$$.$normal_$.$dot$($j$$5_vj$$.$pos_$.$minus$($polygonType_vi$$.$pos_$)), $t$$2_ti_type$$75_v$$4$$ = $polygonType_vi$$.$interpolate$($j$$5_vj$$, $t$$2_ti_type$$75_v$$4$$), $coplanarFront_f$$39$$.push($t$$2_ti_type$$75_v$$4$$), $b$$7_coplanarBack$$.push($t$$2_ti_type$$75_v$$4$$.$clone$()))
      }
      3 <= $coplanarFront_f$$39$$.length && $front$$.push(new $csgPolygon$$($coplanarFront_f$$39$$, this.$shared_$));
      3 <= $b$$7_coplanarBack$$.length && $back$$.push(new $csgPolygon$$($b$$7_coplanarBack$$, this.$shared_$))
  }
}};
$goog$exportSymbol$$("csgPolygon", $csgPolygon$$);
$goog$exportSymbol$$("csgPolygon.prototype.clone", $csgPolygon$$.prototype.$clone$);
$goog$exportSymbol$$("csgPolygon.prototype.flip", $csgPolygon$$.prototype.$flip$);
$goog$exportSymbol$$("csgPolygon.prototype.vertices", $csgPolygon$$.prototype.$vertices$);
$goog$exportSymbol$$("csgPolygon.prototype.shared", $csgPolygon$$.prototype.$shared$);
function $csgNode$$($polygons$$) {
  this.$back_$ = this.$front_$ = this.$plane_$ = $JSCompiler_alias_NULL$$;
  this.$polygons_$ = [];
  $polygons$$ && this.$build$($polygons$$)
}
$csgNode$$.prototype = {$clone$:function $$csgNode$$$$$clone$$() {
  var $node$$2$$ = new $csgNode$$;
  $node$$2$$.$setPlane$(this.$plane_$ && this.$plane_$.$clone$());
  $node$$2$$.$setFront$(this.$front_$ && this.$front_$.$clone$());
  $node$$2$$.$setBack$(this.$back_$ && this.$back_$.$clone$());
  $node$$2$$.$setPolygons$(this.$polygons_$.map(function($p$$) {
    return $p$$.$clone$()
  }));
  return $node$$2$$
}, $invert$:function $$csgNode$$$$$invert$$() {
  for(var $i$$97_temp$$ = 0;$i$$97_temp$$ < this.$polygons_$.length;$i$$97_temp$$++) {
    this.$polygons_$[$i$$97_temp$$].$flip$()
  }
  this.$plane_$.$flip$();
  this.$front_$ && this.$front_$.$invert$();
  this.$back_$ && this.$back_$.$invert$();
  $i$$97_temp$$ = this.$front_$;
  this.$front_$ = this.$back_$;
  this.$back_$ = $i$$97_temp$$
}, $clipPolygons$:function $$csgNode$$$$$clipPolygons$$($polygons$$1$$) {
  if(!this.$plane_$) {
    return $polygons$$1$$.slice()
  }
  for(var $front$$1$$ = [], $back$$1$$ = [], $i$$98$$ = 0;$i$$98$$ < $polygons$$1$$.length;$i$$98$$++) {
    $polygons$$1$$[$i$$98$$].$splitPolygon$(this.$plane_$, $front$$1$$, $back$$1$$, $front$$1$$, $back$$1$$)
  }
  this.$front_$ && ($front$$1$$ = this.$front_$.$clipPolygons$($front$$1$$));
  $back$$1$$ = this.$back_$ ? this.$back_$.$clipPolygons$($back$$1$$) : [];
  return $front$$1$$.concat($back$$1$$)
}, $clipTo$:function $$csgNode$$$$$clipTo$$($bsp$$) {
  this.$polygons_$ = $bsp$$.$clipPolygons$(this.$polygons_$);
  this.$front_$ && this.$front_$.$clipTo$($bsp$$);
  this.$back_$ && this.$back_$.$clipTo$($bsp$$)
}, $allPolygons$:function $$csgNode$$$$$allPolygons$$() {
  var $polygons$$2$$ = this.$polygons_$.slice();
  this.$front_$ && ($polygons$$2$$ = $polygons$$2$$.concat(this.$front_$.$allPolygons$()));
  this.$back_$ && ($polygons$$2$$ = $polygons$$2$$.concat(this.$back_$.$allPolygons$()));
  return $polygons$$2$$
}, $build$:function $$csgNode$$$$$build$$($polygons$$3$$) {
  if($polygons$$3$$.length) {
    this.$plane_$ || (this.$plane_$ = $polygons$$3$$[0].$plane_$.$clone$());
    for(var $front$$2$$ = [], $back$$2$$ = [], $i$$99$$ = 0;$i$$99$$ < $polygons$$3$$.length;$i$$99$$++) {
      $polygons$$3$$[$i$$99$$].$splitPolygon$(this.$plane_$, this.$polygons_$, this.$polygons_$, $front$$2$$, $back$$2$$)
    }
    $front$$2$$.length && (this.$front_$ || (this.$front_$ = new $csgNode$$), this.$front_$.$build$($front$$2$$));
    $back$$2$$.length && (this.$back_$ || (this.$back_$ = new $csgNode$$), this.$back_$.$build$($back$$2$$))
  }
}, $setPlane$:$JSCompiler_set$$("$plane_$"), $setFront$:$JSCompiler_set$$("$front_$"), $setBack$:$JSCompiler_set$$("$back_$"), $polygons$:$JSCompiler_get$$("$polygons_$"), $setPolygons$:$JSCompiler_set$$("$polygons_$")};
function $CSG$$() {
  this.$polygons_$ = []
}
function $CSG$fromPolygons$$($polygons$$4$$) {
  var $csg$$ = new $CSG$$;
  $csg$$.$setPolygons$($polygons$$4$$);
  return $csg$$
}
$CSG$$.prototype = {$clone$:function $$CSG$$$$$clone$$() {
  var $csg$$1$$ = new $CSG$$;
  $csg$$1$$.$setPolygons$(this.$polygons_$.map(function($p$$1$$) {
    return $p$$1$$.$clone$()
  }));
  return $csg$$1$$
}, $toPolygons$:$JSCompiler_get$$("$polygons_$"), $union$:function $$CSG$$$$$union$$($b$$8_csg$$2$$) {
  var $a$$16$$ = new $csgNode$$(this.$clone$().$polygons_$), $b$$8_csg$$2$$ = new $csgNode$$($b$$8_csg$$2$$.$clone$().$polygons_$);
  $a$$16$$.$clipTo$($b$$8_csg$$2$$);
  $b$$8_csg$$2$$.$clipTo$($a$$16$$);
  $b$$8_csg$$2$$.$invert$();
  $b$$8_csg$$2$$.$clipTo$($a$$16$$);
  $b$$8_csg$$2$$.$invert$();
  $a$$16$$.$build$($b$$8_csg$$2$$.$allPolygons$());
  return $CSG$fromPolygons$$($a$$16$$.$allPolygons$())
}, $subtract$:function $$CSG$$$$$subtract$$($b$$9_csg$$3$$) {
  var $a$$17$$ = new $csgNode$$(this.$clone$().$polygons_$), $b$$9_csg$$3$$ = new $csgNode$$($b$$9_csg$$3$$.$clone$().$polygons_$);
  $a$$17$$.$invert$();
  $a$$17$$.$clipTo$($b$$9_csg$$3$$);
  $b$$9_csg$$3$$.$clipTo$($a$$17$$);
  $b$$9_csg$$3$$.$invert$();
  $b$$9_csg$$3$$.$clipTo$($a$$17$$);
  $b$$9_csg$$3$$.$invert$();
  $a$$17$$.$build$($b$$9_csg$$3$$.$allPolygons$());
  $a$$17$$.$invert$();
  return $CSG$fromPolygons$$($a$$17$$.$allPolygons$())
}, $intersect$:function $$CSG$$$$$intersect$$($b$$10_csg$$4$$) {
  var $a$$18$$ = new $csgNode$$(this.$clone$().$polygons_$), $b$$10_csg$$4$$ = new $csgNode$$($b$$10_csg$$4$$.$clone$().$polygons_$);
  $a$$18$$.$invert$();
  $b$$10_csg$$4$$.$clipTo$($a$$18$$);
  $b$$10_csg$$4$$.$invert$();
  $a$$18$$.$clipTo$($b$$10_csg$$4$$);
  $b$$10_csg$$4$$.$clipTo$($a$$18$$);
  $a$$18$$.$build$($b$$10_csg$$4$$.$allPolygons$());
  $a$$18$$.$invert$();
  return $CSG$fromPolygons$$($a$$18$$.$allPolygons$())
}, inverse:function $$CSG$$$$inverse$() {
  var $csg$$5$$ = this.$clone$();
  $csg$$5$$.$polygons_$.map(function($p$$2$$) {
    $p$$2$$.$flip$()
  });
  return $csg$$5$$
}, $polygons$:$JSCompiler_get$$("$polygons_$"), $setPolygons$:$JSCompiler_set$$("$polygons_$")};
$goog$exportSymbol$$("CSG", $CSG$$);
$goog$exportSymbol$$("CSG.fromPolygons", $CSG$fromPolygons$$);
$goog$exportSymbol$$("CSG.prototype.toPolygons", $CSG$$.prototype.$toPolygons$);
$goog$exportSymbol$$("CSG.prototype.union", $CSG$$.prototype.$union$);
$goog$exportSymbol$$("CSG.prototype.subtract", $CSG$$.prototype.$subtract$);
$goog$exportSymbol$$("CSG.prototype.intersect", $CSG$$.prototype.$intersect$);
$goog$exportSymbol$$("CSG.prototype.inverse", $CSG$$.prototype.inverse);
$goog$exportSymbol$$("CSG.prototype.polygons", $CSG$$.prototype.$polygons$);
$goog$exportSymbol$$("CSG.prototype.setPolygons", $CSG$$.prototype.$setPolygons$);
function $goog$math$Coordinate3$$($opt_x$$, $opt_y$$, $opt_z$$) {
  this.x = $goog$isDef$$($opt_x$$) ? $opt_x$$ : 0;
  this.y = $goog$isDef$$($opt_y$$) ? $opt_y$$ : 0;
  this.$z$ = $goog$isDef$$($opt_z$$) ? $opt_z$$ : 0
}
$goog$math$Coordinate3$$.prototype.$clone$ = function $$goog$math$Coordinate3$$$$$clone$$() {
  return new $goog$math$Coordinate3$$(this.x, this.y, this.$z$)
};
$goog$math$Coordinate3$$.prototype.toString = function $$goog$math$Coordinate3$$$$toString$() {
  return"(" + this.x + ", " + this.y + ", " + this.$z$ + ")"
};
$goog$math$Coordinate3$$.prototype.$toArray$ = function $$goog$math$Coordinate3$$$$$toArray$$() {
  return[this.x, this.y, this.$z$]
};
function $X$triplets$$($data$$19$$) {
  $X$base$$.call(this);
  this._className = "triplets";
  this.$_minA$ = Infinity;
  this.$_maxA$ = -Infinity;
  this.$_minB$ = Infinity;
  this.$_maxB$ = -Infinity;
  this.$_minC$ = Infinity;
  this.$_maxC$ = -Infinity;
  this.$_centroid$ = [0, 0, 0];
  this.$_triplets_$ = [];
  $goog$isDefAndNotNull$$($data$$19$$) && (this.$_triplets_$ = $data$$19$$.$_triplets_$.slice(), this.$_minA$ = $data$$19$$.$_minA$, this.$_maxA$ = $data$$19$$.$_maxA$, this.$_minB$ = $data$$19$$.$_minB$, this.$_maxB$ = $data$$19$$.$_maxB$, this.$_minC$ = $data$$19$$.$_minC$, this.$_maxC$ = $data$$19$$.$_maxC$, this.$_centroid$ = $data$$19$$.$_centroid$.slice())
}
$goog$inherits$$($X$triplets$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$triplets$$.prototype;
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($a$$24$$, $b$$15$$, $c$$3$$) {
  (!$goog$isNumber$$($a$$24$$) || !$goog$isNumber$$($b$$15$$) || !$goog$isNumber$$($c$$3$$)) && $JSCompiler_alias_THROW$$(Error("Invalid triplet."));
  $JSCompiler_StaticMethods_parseTriplet_$$(this, $a$$24$$, $b$$15$$, $c$$3$$);
  this.$_dirty$ = $JSCompiler_alias_TRUE$$;
  return this.$_triplets_$.push($a$$24$$, $b$$15$$, $c$$3$$) / 3
};
function $JSCompiler_StaticMethods_parseTriplet_$$($JSCompiler_StaticMethods_parseTriplet_$self$$, $a$$25$$, $b$$16$$, $c$$4$$) {
  $JSCompiler_StaticMethods_parseTriplet_$self$$.$_minA$ = Math.min($JSCompiler_StaticMethods_parseTriplet_$self$$.$_minA$, $a$$25$$);
  $JSCompiler_StaticMethods_parseTriplet_$self$$.$_maxA$ = Math.max($JSCompiler_StaticMethods_parseTriplet_$self$$.$_maxA$, $a$$25$$);
  $JSCompiler_StaticMethods_parseTriplet_$self$$.$_minB$ = Math.min($JSCompiler_StaticMethods_parseTriplet_$self$$.$_minB$, $b$$16$$);
  $JSCompiler_StaticMethods_parseTriplet_$self$$.$_maxB$ = Math.max($JSCompiler_StaticMethods_parseTriplet_$self$$.$_maxB$, $b$$16$$);
  $JSCompiler_StaticMethods_parseTriplet_$self$$.$_minC$ = Math.min($JSCompiler_StaticMethods_parseTriplet_$self$$.$_minC$, $c$$4$$);
  $JSCompiler_StaticMethods_parseTriplet_$self$$.$_maxC$ = Math.max($JSCompiler_StaticMethods_parseTriplet_$self$$.$_maxC$, $c$$4$$);
  $JSCompiler_StaticMethods_parseTriplet_$self$$.$_centroid$ = [($JSCompiler_StaticMethods_parseTriplet_$self$$.$_minA$ + $JSCompiler_StaticMethods_parseTriplet_$self$$.$_maxA$) / 2, ($JSCompiler_StaticMethods_parseTriplet_$self$$.$_minB$ + $JSCompiler_StaticMethods_parseTriplet_$self$$.$_maxB$) / 2, ($JSCompiler_StaticMethods_parseTriplet_$self$$.$_minC$ + $JSCompiler_StaticMethods_parseTriplet_$self$$.$_maxC$) / 2]
}
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($id$$4$$) {
  (!$goog$isNumber$$($id$$4$$) || 0 > $id$$4$$ || 3 * $id$$4$$ > this.$_triplets_$.length || $id$$4$$ == this.count()) && $JSCompiler_alias_THROW$$(Error("Invalid id."));
  $id$$4$$ *= 3;
  return[this.$_triplets_$[$id$$4$$], this.$_triplets_$[$id$$4$$ + 1], this.$_triplets_$[$id$$4$$ + 2]]
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($id$$5$$) {
  (!$goog$isNumber$$($id$$5$$) || 0 > $id$$5$$ || 3 * $id$$5$$ > this.$_triplets_$.length || $id$$5$$ == this.count()) && $JSCompiler_alias_THROW$$(Error("Invalid id."));
  this.$_triplets_$.splice($id$$5$$, 3);
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.all = $JSCompiler_get$$("$_triplets_$");
$JSCompiler_prototypeAlias$$.$setAll$ = function $$JSCompiler_prototypeAlias$$$$setAll$$($i$$100_triplets$$, $_triplet_minA$$, $maxA$$, $minB$$, $maxB$$, $minC$$, $maxC$$, $centroid$$) {
  this.$_triplets_$ = $i$$100_triplets$$;
  if(!$goog$isDefAndNotNull$$($_triplet_minA$$) || !$goog$isDefAndNotNull$$($maxA$$) || !$goog$isDefAndNotNull$$($minB$$) || !$goog$isDefAndNotNull$$($maxB$$) || !$goog$isDefAndNotNull$$($minC$$) || !$goog$isDefAndNotNull$$($maxC$$) || !$goog$isDefAndNotNull$$($centroid$$)) {
    this.$_minA$ = $_triplet_minA$$, this.$_maxA$ = $maxA$$, this.$_minB$ = $minB$$, this.$_maxB$ = $maxB$$, this.$_minC$ = $minC$$, this.$_maxC$ = $maxC$$, this.$_centroid$ = $centroid$$
  }else {
    for($i$$100_triplets$$ = $i$$100_triplets$$ = 0;$i$$100_triplets$$ < this.count();$i$$100_triplets$$++) {
      $_triplet_minA$$ = this.get($i$$100_triplets$$), $JSCompiler_StaticMethods_parseTriplet_$$(this, $_triplet_minA$$[0], $_triplet_minA$$[1], $_triplet_minA$$[2])
    }
  }
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$_triplets_$ = [];
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.count = function $$JSCompiler_prototypeAlias$$$count$() {
  return this.$_triplets_$.length / 3
};
$JSCompiler_prototypeAlias$$.length = function $$JSCompiler_prototypeAlias$$$length$() {
  return this.$_triplets_$.length
};
$JSCompiler_prototypeAlias$$.$minA$ = $JSCompiler_get$$("$_minA$");
$JSCompiler_prototypeAlias$$.$maxA$ = $JSCompiler_get$$("$_maxA$");
$JSCompiler_prototypeAlias$$.$minB$ = $JSCompiler_get$$("$_minB$");
$JSCompiler_prototypeAlias$$.$maxB$ = $JSCompiler_get$$("$_maxB$");
$JSCompiler_prototypeAlias$$.$minC$ = $JSCompiler_get$$("$_minC$");
$JSCompiler_prototypeAlias$$.$maxC$ = $JSCompiler_get$$("$_maxC$");
$JSCompiler_prototypeAlias$$.$centroid$ = $JSCompiler_get$$("$_centroid$");
$goog$exportSymbol$$("X.triplets", $X$triplets$$);
$goog$exportSymbol$$("X.triplets.prototype.add", $X$triplets$$.prototype.add);
$goog$exportSymbol$$("X.triplets.prototype.get", $X$triplets$$.prototype.get);
$goog$exportSymbol$$("X.triplets.prototype.remove", $X$triplets$$.prototype.remove);
$goog$exportSymbol$$("X.triplets.prototype.all", $X$triplets$$.prototype.all);
$goog$exportSymbol$$("X.triplets.prototype.setAll", $X$triplets$$.prototype.$setAll$);
$goog$exportSymbol$$("X.triplets.prototype.clear", $X$triplets$$.prototype.clear);
$goog$exportSymbol$$("X.triplets.prototype.count", $X$triplets$$.prototype.count);
$goog$exportSymbol$$("X.triplets.prototype.length", $X$triplets$$.prototype.length);
$goog$exportSymbol$$("X.triplets.prototype.minA", $X$triplets$$.prototype.$minA$);
$goog$exportSymbol$$("X.triplets.prototype.maxA", $X$triplets$$.prototype.$maxA$);
$goog$exportSymbol$$("X.triplets.prototype.minB", $X$triplets$$.prototype.$minB$);
$goog$exportSymbol$$("X.triplets.prototype.maxB", $X$triplets$$.prototype.$maxB$);
$goog$exportSymbol$$("X.triplets.prototype.minC", $X$triplets$$.prototype.$minC$);
$goog$exportSymbol$$("X.triplets.prototype.maxC", $X$triplets$$.prototype.$maxC$);
$goog$exportSymbol$$("X.triplets.prototype.centroid", $X$triplets$$.prototype.$centroid$);
function $goog$math$Vec3$$($x$$57$$, $y$$32$$, $z$$2$$) {
  this.x = $x$$57$$;
  this.y = $y$$32$$;
  this.$z$ = $z$$2$$
}
$goog$inherits$$($goog$math$Vec3$$, $goog$math$Coordinate3$$);
$JSCompiler_prototypeAlias$$ = $goog$math$Vec3$$.prototype;
$JSCompiler_prototypeAlias$$.$clone$ = function $$JSCompiler_prototypeAlias$$$$clone$$() {
  return new $goog$math$Vec3$$(this.x, this.y, this.$z$)
};
$JSCompiler_prototypeAlias$$.$magnitude$ = function $$JSCompiler_prototypeAlias$$$$magnitude$$() {
  return Math.sqrt(this.x * this.x + this.y * this.y + this.$z$ * this.$z$)
};
$JSCompiler_prototypeAlias$$.scale = function $$JSCompiler_prototypeAlias$$$scale$($s$$19$$) {
  this.x *= $s$$19$$;
  this.y *= $s$$19$$;
  this.$z$ *= $s$$19$$;
  return this
};
$JSCompiler_prototypeAlias$$.$invert$ = function $$JSCompiler_prototypeAlias$$$$invert$$() {
  this.x = -this.x;
  this.y = -this.y;
  this.$z$ = -this.$z$;
  return this
};
$JSCompiler_prototypeAlias$$.normalize = function $$JSCompiler_prototypeAlias$$$normalize$() {
  return this.scale(1 / this.$magnitude$())
};
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($b$$22$$) {
  this.x += $b$$22$$.x;
  this.y += $b$$22$$.y;
  this.$z$ += $b$$22$$.$z$;
  return this
};
$JSCompiler_prototypeAlias$$.$subtract$ = function $$JSCompiler_prototypeAlias$$$$subtract$$($b$$23$$) {
  this.x -= $b$$23$$.x;
  this.y -= $b$$23$$.y;
  this.$z$ -= $b$$23$$.$z$;
  return this
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($b$$24$$) {
  return this == $b$$24$$ || !!$b$$24$$ && this.x == $b$$24$$.x && this.y == $b$$24$$.y && this.$z$ == $b$$24$$.$z$
};
function $goog$math$Vec3$distance$$($a$$20$$, $b$$12$$) {
  var $dx$$4$$ = $a$$20$$.x - $b$$12$$.x, $dy$$4$$ = $a$$20$$.y - $b$$12$$.y, $dz$$ = $a$$20$$.$z$ - $b$$12$$.$z$;
  return Math.sqrt($dx$$4$$ * $dx$$4$$ + $dy$$4$$ * $dy$$4$$ + $dz$$ * $dz$$)
}
function $goog$math$Vec3$sum$$($a$$33$$, $b$$25$$) {
  return new $goog$math$Vec3$$($a$$33$$.x + $b$$25$$.x, $a$$33$$.y + $b$$25$$.y, $a$$33$$.$z$ + $b$$25$$.$z$)
}
function $goog$math$Vec3$cross$$($a$$36$$, $b$$28$$) {
  return new $goog$math$Vec3$$($a$$36$$.y * $b$$28$$.$z$ - $a$$36$$.$z$ * $b$$28$$.y, $a$$36$$.$z$ * $b$$28$$.x - $a$$36$$.x * $b$$28$$.$z$, $a$$36$$.x * $b$$28$$.y - $a$$36$$.y * $b$$28$$.x)
}
;function $goog$math$Coordinate$$($opt_x$$1$$, $opt_y$$1$$) {
  this.x = $goog$isDef$$($opt_x$$1$$) ? $opt_x$$1$$ : 0;
  this.y = $goog$isDef$$($opt_y$$1$$) ? $opt_y$$1$$ : 0
}
$goog$math$Coordinate$$.prototype.$clone$ = function $$goog$math$Coordinate$$$$$clone$$() {
  return new $goog$math$Coordinate$$(this.x, this.y)
};
$goog$math$Coordinate$$.prototype.toString = function $$goog$math$Coordinate$$$$toString$() {
  return"(" + this.x + ", " + this.y + ")"
};
function $goog$math$Coordinate$difference$$($a$$41$$, $b$$33$$) {
  return new $goog$math$Coordinate$$($a$$41$$.x - $b$$33$$.x, $a$$41$$.y - $b$$33$$.y)
}
;function $goog$math$Vec2$$($x$$60$$, $y$$34$$) {
  this.x = $x$$60$$;
  this.y = $y$$34$$
}
$goog$inherits$$($goog$math$Vec2$$, $goog$math$Coordinate$$);
$JSCompiler_prototypeAlias$$ = $goog$math$Vec2$$.prototype;
$JSCompiler_prototypeAlias$$.$clone$ = function $$JSCompiler_prototypeAlias$$$$clone$$() {
  return new $goog$math$Vec2$$(this.x, this.y)
};
$JSCompiler_prototypeAlias$$.$magnitude$ = function $$JSCompiler_prototypeAlias$$$$magnitude$$() {
  return Math.sqrt(this.x * this.x + this.y * this.y)
};
$JSCompiler_prototypeAlias$$.scale = function $$JSCompiler_prototypeAlias$$$scale$($s$$20$$) {
  this.x *= $s$$20$$;
  this.y *= $s$$20$$;
  return this
};
$JSCompiler_prototypeAlias$$.$invert$ = function $$JSCompiler_prototypeAlias$$$$invert$$() {
  this.x = -this.x;
  this.y = -this.y;
  return this
};
$JSCompiler_prototypeAlias$$.normalize = function $$JSCompiler_prototypeAlias$$$normalize$() {
  return this.scale(1 / this.$magnitude$())
};
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($b$$35$$) {
  this.x += $b$$35$$.x;
  this.y += $b$$35$$.y;
  return this
};
$JSCompiler_prototypeAlias$$.$subtract$ = function $$JSCompiler_prototypeAlias$$$$subtract$$($b$$36$$) {
  this.x -= $b$$36$$.x;
  this.y -= $b$$36$$.y;
  return this
};
$JSCompiler_prototypeAlias$$.rotate = function $$JSCompiler_prototypeAlias$$$rotate$($angle$$5_sin$$) {
  var $cos$$ = Math.cos($angle$$5_sin$$), $angle$$5_sin$$ = Math.sin($angle$$5_sin$$), $newY$$ = this.y * $cos$$ + this.x * $angle$$5_sin$$;
  this.x = this.x * $cos$$ - this.y * $angle$$5_sin$$;
  this.y = $newY$$;
  return this
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($b$$37$$) {
  return this == $b$$37$$ || !!$b$$37$$ && this.x == $b$$37$$.x && this.y == $b$$37$$.y
};
function $goog$math$Size$$($width$$10$$, $height$$9$$) {
  this.width = $width$$10$$;
  this.height = $height$$9$$
}
function $goog$math$Size$equals$$($a$$48$$, $b$$42$$) {
  return $a$$48$$ == $b$$42$$ ? $JSCompiler_alias_TRUE$$ : !$a$$48$$ || !$b$$42$$ ? $JSCompiler_alias_FALSE$$ : $a$$48$$.width == $b$$42$$.width && $a$$48$$.height == $b$$42$$.height
}
$JSCompiler_prototypeAlias$$ = $goog$math$Size$$.prototype;
$JSCompiler_prototypeAlias$$.$clone$ = function $$JSCompiler_prototypeAlias$$$$clone$$() {
  return new $goog$math$Size$$(this.width, this.height)
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  return"(" + this.width + " x " + this.height + ")"
};
$JSCompiler_prototypeAlias$$.floor = function $$JSCompiler_prototypeAlias$$$floor$() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
$JSCompiler_prototypeAlias$$.round = function $$JSCompiler_prototypeAlias$$$round$() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
$JSCompiler_prototypeAlias$$.scale = function $$JSCompiler_prototypeAlias$$$scale$($s$$21$$) {
  this.width *= $s$$21$$;
  this.height *= $s$$21$$;
  return this
};
function $goog$math$Matrix$$($m$$, $opt_n$$) {
  if($m$$ instanceof $goog$math$Matrix$$) {
    this.$array_$ = $m$$.$toArray$()
  }else {
    var $JSCompiler_temp$$32_len$$inline_174$$;
    if($JSCompiler_temp$$32_len$$inline_174$$ = $goog$isArrayLike$$($m$$)) {
      a: {
        for(var $i$$inline_175$$ = $JSCompiler_temp$$32_len$$inline_174$$ = 0;$i$$inline_175$$ < $m$$.length;$i$$inline_175$$++) {
          if(!$goog$isArrayLike$$($m$$[$i$$inline_175$$]) || 0 < $JSCompiler_temp$$32_len$$inline_174$$ && $m$$[$i$$inline_175$$].length != $JSCompiler_temp$$32_len$$inline_174$$) {
            $JSCompiler_temp$$32_len$$inline_174$$ = $JSCompiler_alias_FALSE$$;
            break a
          }
          for(var $j$$inline_176$$ = 0;$j$$inline_176$$ < $m$$[$i$$inline_175$$].length;$j$$inline_176$$++) {
            if(!$goog$isNumber$$($m$$[$i$$inline_175$$][$j$$inline_176$$])) {
              $JSCompiler_temp$$32_len$$inline_174$$ = $JSCompiler_alias_FALSE$$;
              break a
            }
          }
          0 == $JSCompiler_temp$$32_len$$inline_174$$ && ($JSCompiler_temp$$32_len$$inline_174$$ = $m$$[$i$$inline_175$$].length)
        }
        $JSCompiler_temp$$32_len$$inline_174$$ = 0 != $JSCompiler_temp$$32_len$$inline_174$$
      }
    }
    $JSCompiler_temp$$32_len$$inline_174$$ ? this.$array_$ = $goog$array$clone$$($m$$) : $m$$ instanceof $goog$math$Size$$ ? this.$array_$ = $goog$math$Matrix$createZeroPaddedArray_$$($m$$.height, $m$$.width) : $goog$isNumber$$($m$$) && $goog$isNumber$$($opt_n$$) && 0 < $m$$ && 0 < $opt_n$$ ? this.$array_$ = $goog$math$Matrix$createZeroPaddedArray_$$($m$$, $opt_n$$) : $JSCompiler_alias_THROW$$(Error("Invalid argument(s) for Matrix contructor"))
  }
  this.$size_$ = new $goog$math$Size$$(this.$array_$[0].length, this.$array_$.length)
}
function $goog$math$Matrix$createIdentityMatrix$$($n$$7$$) {
  for(var $rv$$17$$ = [], $i$$102$$ = 0;$i$$102$$ < $n$$7$$;$i$$102$$++) {
    $rv$$17$$[$i$$102$$] = [];
    for(var $j$$7$$ = 0;$j$$7$$ < $n$$7$$;$j$$7$$++) {
      $rv$$17$$[$i$$102$$][$j$$7$$] = $i$$102$$ == $j$$7$$ ? 1 : 0
    }
  }
  return new $goog$math$Matrix$$($rv$$17$$)
}
function $goog$math$Matrix$forEach$$($matrix$$2$$, $fn$$14$$, $opt_obj$$39$$) {
  for(var $i$$103$$ = 0;$i$$103$$ < $matrix$$2$$.$getSize$().height;$i$$103$$++) {
    for(var $j$$8$$ = 0;$j$$8$$ < $matrix$$2$$.$getSize$().width;$j$$8$$++) {
      $fn$$14$$.call($opt_obj$$39$$, $matrix$$2$$.$array_$[$i$$103$$][$j$$8$$], $i$$103$$, $j$$8$$, $matrix$$2$$)
    }
  }
}
function $goog$math$Matrix$map$$($matrix$$3$$, $fn$$15$$) {
  var $m$$1$$ = new $goog$math$Matrix$$($matrix$$3$$.$getSize$());
  $goog$math$Matrix$forEach$$($matrix$$3$$, function($value$$69$$, $i$$105$$, $j$$10$$) {
    $m$$1$$.$array_$[$i$$105$$][$j$$10$$] = $fn$$15$$.call($JSCompiler_alias_VOID$$, $value$$69$$, $i$$105$$, $j$$10$$, $matrix$$3$$)
  });
  return $m$$1$$
}
function $goog$math$Matrix$createZeroPaddedArray_$$($m$$2$$, $n$$8$$) {
  for(var $rv$$18$$ = [], $i$$106$$ = 0;$i$$106$$ < $m$$2$$;$i$$106$$++) {
    $rv$$18$$[$i$$106$$] = [];
    for(var $j$$11$$ = 0;$j$$11$$ < $n$$8$$;$j$$11$$++) {
      $rv$$18$$[$i$$106$$][$j$$11$$] = 0
    }
  }
  return $rv$$18$$
}
$JSCompiler_prototypeAlias$$ = $goog$math$Matrix$$.prototype;
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($m$$3$$) {
  $goog$math$Size$equals$$(this.$size_$, $m$$3$$.$getSize$()) || $JSCompiler_alias_THROW$$(Error("Matrix summation is only supported on arrays of equal size"));
  return $goog$math$Matrix$map$$(this, function($val$$31$$, $i$$107$$, $j$$12$$) {
    return $val$$31$$ + $m$$3$$.$array_$[$i$$107$$][$j$$12$$]
  })
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($m$$6$$, $opt_tolerance$$1$$) {
  if(this.$size_$.width != $m$$6$$.$size_$.width || this.$size_$.height != $m$$6$$.$size_$.height) {
    return $JSCompiler_alias_FALSE$$
  }
  for(var $tolerance$$ = $opt_tolerance$$1$$ || 0, $i$$112$$ = 0;$i$$112$$ < this.$size_$.height;$i$$112$$++) {
    for(var $j$$17$$ = 0;$j$$17$$ < this.$size_$.width;$j$$17$$++) {
      if(!(Math.abs(this.$array_$[$i$$112$$][$j$$17$$] - $m$$6$$.$array_$[$i$$112$$][$j$$17$$]) <= ($tolerance$$ || 1.0E-6))) {
        return $JSCompiler_alias_FALSE$$
      }
    }
  }
  return $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$getSize$ = $JSCompiler_get$$("$size_$");
$JSCompiler_prototypeAlias$$.$getValueAt$ = function $$JSCompiler_prototypeAlias$$$$getValueAt$$($i$$116$$, $j$$20$$) {
  return!(0 <= $i$$116$$ && $i$$116$$ < this.$size_$.height && 0 <= $j$$20$$ && $j$$20$$ < this.$size_$.width) ? $JSCompiler_alias_NULL$$ : this.$array_$[$i$$116$$][$j$$20$$]
};
function $JSCompiler_StaticMethods_setValueAt$$($JSCompiler_StaticMethods_setValueAt$self$$, $i$$117$$, $j$$21$$, $value$$75$$) {
  0 <= $i$$117$$ && $i$$117$$ < $JSCompiler_StaticMethods_setValueAt$self$$.$size_$.height && 0 <= $j$$21$$ && $j$$21$$ < $JSCompiler_StaticMethods_setValueAt$self$$.$size_$.width || $JSCompiler_alias_THROW$$(Error("Index out of bounds when setting matrix value, (" + $i$$117$$ + "," + $j$$21$$ + ") in size (" + $JSCompiler_StaticMethods_setValueAt$self$$.$size_$.height + "," + $JSCompiler_StaticMethods_setValueAt$self$$.$size_$.width + ")"));
  $JSCompiler_StaticMethods_setValueAt$self$$.$array_$[$i$$117$$][$j$$21$$] = $value$$75$$
}
$JSCompiler_prototypeAlias$$.multiply = function $$JSCompiler_prototypeAlias$$$multiply$($m$$8$$) {
  if($m$$8$$ instanceof $goog$math$Matrix$$) {
    return this.$size_$.width != $m$$8$$.$getSize$().height && $JSCompiler_alias_THROW$$(Error("Invalid matrices for multiplication. Second matrix should have the same number of rows as the first has columns.")), $JSCompiler_StaticMethods_matrixMultiply_$$(this, $m$$8$$)
  }
  if($goog$isNumber$$($m$$8$$)) {
    return $JSCompiler_StaticMethods_scalarMultiply_$$(this, $m$$8$$)
  }
  $JSCompiler_alias_THROW$$(Error("A matrix can only be multiplied by a number or another matrix."))
};
$JSCompiler_prototypeAlias$$.$subtract$ = function $$JSCompiler_prototypeAlias$$$$subtract$$($m$$9$$) {
  $goog$math$Size$equals$$(this.$size_$, $m$$9$$.$getSize$()) || $JSCompiler_alias_THROW$$(Error("Matrix subtraction is only supported on arrays of equal size."));
  return $goog$math$Matrix$map$$(this, function($val$$32$$, $i$$118$$, $j$$22$$) {
    return $val$$32$$ - $m$$9$$.$array_$[$i$$118$$][$j$$22$$]
  })
};
$JSCompiler_prototypeAlias$$.$toArray$ = $JSCompiler_get$$("$array_$");
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  var $maxLen$$ = 0;
  $goog$math$Matrix$forEach$$(this, function($len$$3_val$$33$$) {
    $len$$3_val$$33$$ = ("" + $len$$3_val$$33$$).length;
    $len$$3_val$$33$$ > $maxLen$$ && ($maxLen$$ = $len$$3_val$$33$$)
  });
  var $sb$$13$$ = [];
  $goog$array$forEach$$(this.$array_$, function($row$$1$$) {
    $sb$$13$$.push("[ ");
    $goog$array$forEach$$($row$$1$$, function($val$$34$$) {
      $val$$34$$ = "" + $val$$34$$;
      $sb$$13$$.push(Array($maxLen$$ - $val$$34$$.length + 1).join(" ") + $val$$34$$ + " ")
    });
    $sb$$13$$.push("]\n")
  });
  return $sb$$13$$.join("")
};
function $JSCompiler_StaticMethods_matrixMultiply_$$($JSCompiler_StaticMethods_matrixMultiply_$self$$, $m$$11$$) {
  var $resultMatrix$$ = new $goog$math$Matrix$$($JSCompiler_StaticMethods_matrixMultiply_$self$$.$size_$.height, $m$$11$$.$getSize$().width);
  $goog$math$Matrix$forEach$$($resultMatrix$$, function($newVal$$1_val$$35$$, $x$$64$$, $y$$37$$) {
    for(var $i$$124$$ = $newVal$$1_val$$35$$ = 0;$i$$124$$ < this.$size_$.width;$i$$124$$++) {
      $newVal$$1_val$$35$$ += this.$getValueAt$($x$$64$$, $i$$124$$) * $m$$11$$.$getValueAt$($i$$124$$, $y$$37$$)
    }
    $JSCompiler_StaticMethods_setValueAt$$($resultMatrix$$, $x$$64$$, $y$$37$$, $newVal$$1_val$$35$$)
  }, $JSCompiler_StaticMethods_matrixMultiply_$self$$);
  return $resultMatrix$$
}
function $JSCompiler_StaticMethods_scalarMultiply_$$($JSCompiler_StaticMethods_scalarMultiply_$self$$, $m$$12$$) {
  return $goog$math$Matrix$map$$($JSCompiler_StaticMethods_scalarMultiply_$self$$, function($val$$36$$) {
    return $val$$36$$ * $m$$12$$
  })
}
;function $X$matrix$$($m$$13$$, $opt_n$$1$$) {
  $goog$math$Matrix$$.call(this, $m$$13$$, $opt_n$$1$$);
  this._className = "matrix"
}
$goog$inherits$$($X$matrix$$, $goog$math$Matrix$$);
function $X$matrix$createIdentityMatrix$$($n$$9$$) {
  for(var $rv$$19$$ = [], $i$$125$$ = 0;$i$$125$$ < $n$$9$$;$i$$125$$++) {
    $rv$$19$$[$i$$125$$] = [];
    for(var $j$$29$$ = 0;$j$$29$$ < $n$$9$$;$j$$29$$++) {
      $rv$$19$$[$i$$125$$][$j$$29$$] = $i$$125$$ == $j$$29$$ ? 1 : 0
    }
  }
  return new $X$matrix$$($rv$$19$$)
}
$JSCompiler_prototypeAlias$$ = $X$matrix$$.prototype;
$JSCompiler_prototypeAlias$$.$flatten$ = function $$JSCompiler_prototypeAlias$$$$flatten$$() {
  var $result$$13$$ = [], $dimensions$$ = this.$getSize$();
  if(0 == $dimensions$$.height || 0 == $dimensions$$.width) {
    return[]
  }
  var $i$$126$$, $j$$30$$;
  for($j$$30$$ = 0;$j$$30$$ < $dimensions$$.height;$j$$30$$++) {
    for($i$$126$$ = 0;$i$$126$$ < $dimensions$$.width;$i$$126$$++) {
      $result$$13$$.push(this.$getValueAt$($i$$126$$, $j$$30$$))
    }
  }
  return $result$$13$$
};
$JSCompiler_prototypeAlias$$.translate = function $$JSCompiler_prototypeAlias$$$translate$($vector$$) {
  this.$size_$.width != this.$size_$.height && $JSCompiler_alias_THROW$$(Error("Can not translate non-square matrix."));
  var $dimensions$$1$$ = this.$getSize$(), $transformationMatrix$$ = $goog$math$Matrix$createIdentityMatrix$$($dimensions$$1$$.height);
  $vector$$ instanceof $goog$math$Vec2$$ && 3 == $dimensions$$1$$.height ? ($JSCompiler_StaticMethods_setValueAt$$($transformationMatrix$$, 0, 2, $vector$$.x), $JSCompiler_StaticMethods_setValueAt$$($transformationMatrix$$, 1, 2, $vector$$.y)) : $vector$$ instanceof $goog$math$Vec3$$ && 4 == $dimensions$$1$$.height ? ($JSCompiler_StaticMethods_setValueAt$$($transformationMatrix$$, 0, 3, $vector$$.x), $JSCompiler_StaticMethods_setValueAt$$($transformationMatrix$$, 1, 3, $vector$$.y), $JSCompiler_StaticMethods_setValueAt$$($transformationMatrix$$, 
  2, 3, $vector$$.$z$)) : $JSCompiler_alias_THROW$$(Error("Translation failed."));
  return new $X$matrix$$(this.multiply($transformationMatrix$$))
};
$JSCompiler_prototypeAlias$$.rotate = function $$JSCompiler_prototypeAlias$$$rotate$($angle$$7$$, $iaxis$$) {
  (4 != this.$getSize$().height || this.$size_$.width != this.$size_$.height) && $JSCompiler_alias_THROW$$(Error("Only 4x4 matrices can be rotated."));
  (!$goog$isDefAndNotNull$$($iaxis$$) || !($iaxis$$ instanceof $goog$math$Vec3$$)) && $JSCompiler_alias_THROW$$(Error("Invalid axis vector."));
  $goog$isNumber$$($angle$$7$$) || $JSCompiler_alias_THROW$$(Error("Invalid angle."));
  var $axis$$ = $iaxis$$.normalize(), $cos$$1$$ = Math.cos($angle$$7$$), $sin$$1$$ = Math.sin($angle$$7$$), $rotationMatrix$$ = $goog$math$Matrix$createIdentityMatrix$$(4);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 0, 0, $cos$$1$$ + $axis$$.x * $axis$$.x * (1 - $cos$$1$$));
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 0, 1, $axis$$.x * $axis$$.y * (1 - $cos$$1$$) - $axis$$.$z$ * $sin$$1$$);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 0, 2, $axis$$.x * $axis$$.$z$ * (1 - $cos$$1$$) + $axis$$.y * $sin$$1$$);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 1, 0, $axis$$.y * $axis$$.x * (1 - $cos$$1$$) + $axis$$.$z$ * $sin$$1$$);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 1, 1, $cos$$1$$ + $axis$$.y * $axis$$.y * (1 - $cos$$1$$));
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 1, 2, $axis$$.y * $axis$$.$z$ * (1 - $cos$$1$$) - $axis$$.x * $sin$$1$$);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 2, 0, $axis$$.$z$ * $axis$$.x * (1 - $cos$$1$$) - $axis$$.y * $sin$$1$$);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 2, 1, $axis$$.$z$ * $axis$$.y * (1 - $cos$$1$$) + $axis$$.x * $sin$$1$$);
  $JSCompiler_StaticMethods_setValueAt$$($rotationMatrix$$, 2, 2, $cos$$1$$ + $axis$$.$z$ * $axis$$.$z$ * (1 - $cos$$1$$));
  return new $X$matrix$$(this.multiply($rotationMatrix$$))
};
$JSCompiler_prototypeAlias$$.$multiplyByVector$ = function $$JSCompiler_prototypeAlias$$$$multiplyByVector$$($resultMatrix$$1_vector$$1$$) {
  var $dimensions$$3$$ = this.$getSize$(), $vectorAsArray$$ = Array($dimensions$$3$$.width), $i$$127$$;
  for($i$$127$$ = 0;$i$$127$$ < $vectorAsArray$$.length;$i$$127$$++) {
    $vectorAsArray$$[$i$$127$$] = Array(1), $vectorAsArray$$[$i$$127$$][0] = 1
  }
  $resultMatrix$$1_vector$$1$$ instanceof $goog$math$Vec3$$ && 3 <= $dimensions$$3$$.width ? ($vectorAsArray$$[0][0] = $resultMatrix$$1_vector$$1$$.x, $vectorAsArray$$[1][0] = $resultMatrix$$1_vector$$1$$.y, $vectorAsArray$$[2][0] = $resultMatrix$$1_vector$$1$$.$z$) : $JSCompiler_alias_THROW$$(Error("Multiplication by vector failed."));
  $resultMatrix$$1_vector$$1$$ = this.multiply(new $goog$math$Matrix$$($vectorAsArray$$));
  return new $goog$math$Vec3$$(parseFloat($resultMatrix$$1_vector$$1$$.$getValueAt$(0, 0)), parseFloat($resultMatrix$$1_vector$$1$$.$getValueAt$(1, 0)), parseFloat($resultMatrix$$1_vector$$1$$.$getValueAt$(2, 0)))
};
$JSCompiler_prototypeAlias$$.$swapRows$ = function $$JSCompiler_prototypeAlias$$$$swapRows$$($row1$$, $row2$$) {
  var $tmp$$inline_181$$ = this.$array_$[$row1$$];
  this.$array_$[$row1$$] = this.$array_$[$row2$$];
  this.$array_$[$row2$$] = $tmp$$inline_181$$
};
$JSCompiler_prototypeAlias$$.$swapCols$ = function $$JSCompiler_prototypeAlias$$$$swapCols$$($col1$$, $col2$$) {
  for(var $dimensions$$4$$ = this.$getSize$(), $h$$4$$ = 0, $h$$4$$ = 0;$h$$4$$ < $dimensions$$4$$.height;$h$$4$$++) {
    var $tmpValue$$ = this.$getValueAt$($h$$4$$, $col1$$);
    $tmpValue$$ || ($tmpValue$$ = 0);
    var $tmpValue2$$ = this.$getValueAt$($h$$4$$, $col2$$);
    $tmpValue2$$ || ($tmpValue2$$ = 0);
    $JSCompiler_StaticMethods_setValueAt$$(this, $h$$4$$, $col1$$, $tmpValue2$$);
    $JSCompiler_StaticMethods_setValueAt$$(this, $h$$4$$, $col2$$, $tmpValue$$)
  }
};
$goog$exportSymbol$$("X.matrix", $X$matrix$$);
$goog$exportSymbol$$("X.matrix.createIdentityMatrix", $X$matrix$createIdentityMatrix$$);
$goog$exportSymbol$$("X.matrix.prototype.flatten", $X$matrix$$.prototype.$flatten$);
$goog$exportSymbol$$("X.matrix.prototype.translate", $X$matrix$$.prototype.translate);
$goog$exportSymbol$$("X.matrix.prototype.rotate", $X$matrix$$.prototype.rotate);
$goog$exportSymbol$$("X.matrix.prototype.toArray", $X$matrix$$.prototype.$toArray$);
$goog$exportSymbol$$("X.matrix.prototype.getValueAt", $X$matrix$$.prototype.$getValueAt$);
$goog$exportSymbol$$("X.matrix.prototype.multiplyByVector", $X$matrix$$.prototype.$multiplyByVector$);
$goog$exportSymbol$$("X.matrix.prototype.swapRows", $X$matrix$$.prototype.$swapRows$);
$goog$exportSymbol$$("X.matrix.prototype.swapCols", $X$matrix$$.prototype.$swapCols$);
function $X$transform$$() {
  $X$base$$.call(this);
  this._className = "transform";
  this.$_matrix$ = $X$matrix$createIdentityMatrix$$(4);
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$())
}
$goog$inherits$$($X$transform$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$transform$$.prototype;
$JSCompiler_prototypeAlias$$.$rotateX$ = function $$JSCompiler_prototypeAlias$$$$rotateX$$($angle$$8$$) {
  (!$goog$isNumber$$($angle$$8$$) || -360 > $angle$$8$$ || 360 < $angle$$8$$) && $JSCompiler_alias_THROW$$(Error("Invalid angle."));
  this.$_matrix$ = this.$_matrix$.rotate($angle$$8$$ * Math.PI / 180, new $goog$math$Vec3$$(0, 1, 0));
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$rotateY$ = function $$JSCompiler_prototypeAlias$$$$rotateY$$($angle$$9$$) {
  (!$goog$isNumber$$($angle$$9$$) || -360 > $angle$$9$$ || 360 < $angle$$9$$) && $JSCompiler_alias_THROW$$(Error("Invalid angle."));
  this.$_matrix$ = this.$_matrix$.rotate($angle$$9$$ * Math.PI / 180, new $goog$math$Vec3$$(1, 0, 0));
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$rotateZ$ = function $$JSCompiler_prototypeAlias$$$$rotateZ$$($angle$$10$$) {
  (!$goog$isNumber$$($angle$$10$$) || -360 > $angle$$10$$ || 360 < $angle$$10$$) && $JSCompiler_alias_THROW$$(Error("Invalid angle."));
  this.$_matrix$ = this.$_matrix$.rotate($angle$$10$$ * Math.PI / 180, new $goog$math$Vec3$$(0, 0, 1));
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$translateX$ = function $$JSCompiler_prototypeAlias$$$$translateX$$($distance$$) {
  $goog$isNumber$$($distance$$) || $JSCompiler_alias_THROW$$(Error("Invalid distance."));
  this.$_matrix$ = this.$_matrix$.translate(new $goog$math$Vec3$$($distance$$, 0, 0));
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$translateY$ = function $$JSCompiler_prototypeAlias$$$$translateY$$($distance$$1$$) {
  $goog$isNumber$$($distance$$1$$) || $JSCompiler_alias_THROW$$(Error("Invalid distance."));
  this.$_matrix$ = this.$_matrix$.translate(new $goog$math$Vec3$$(0, $distance$$1$$, 0));
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$translateZ$ = function $$JSCompiler_prototypeAlias$$$$translateZ$$($distance$$2$$) {
  $goog$isNumber$$($distance$$2$$) || $JSCompiler_alias_THROW$$(Error("Invalid distance."));
  this.$_matrix$ = this.$_matrix$.translate(new $goog$math$Vec3$$(0, 0, $distance$$2$$));
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$matrix$ = $JSCompiler_get$$("$_matrix$");
$JSCompiler_prototypeAlias$$.$setMatrix$ = function $$JSCompiler_prototypeAlias$$$$setMatrix$$($matrix$$4$$) {
  var $matrix_$$ = $X$matrix$createIdentityMatrix$$(4);
  $goog$isDefAndNotNull$$($matrix$$4$$) && $matrix$$4$$ instanceof $X$matrix$$ && ($matrix_$$ = $matrix$$4$$);
  this.$_matrix$ = $matrix_$$;
  this.$_glMatrix$ = new Float32Array(this.$_matrix$.$flatten$());
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$glMatrix$ = $JSCompiler_get$$("$_glMatrix$");
function $JSCompiler_StaticMethods_flip_$$($JSCompiler_StaticMethods_flip_$self$$, $i$$128$$, $j$$31$$) {
  var $oldValue$$ = $JSCompiler_StaticMethods_flip_$self$$.$_matrix$.$getValueAt$($i$$128$$, $j$$31$$);
  $oldValue$$ || ($oldValue$$ = 0);
  $JSCompiler_StaticMethods_setValueAt$$($JSCompiler_StaticMethods_flip_$self$$.$_matrix$, $i$$128$$, $j$$31$$, -1 * $oldValue$$);
  $JSCompiler_StaticMethods_flip_$self$$.$_glMatrix$ = new Float32Array($JSCompiler_StaticMethods_flip_$self$$.$_matrix$.$flatten$());
  $JSCompiler_StaticMethods_flip_$self$$.$_dirty$ = $JSCompiler_alias_TRUE$$
}
$JSCompiler_prototypeAlias$$.$flipX$ = function $$JSCompiler_prototypeAlias$$$$flipX$$() {
  $JSCompiler_StaticMethods_flip_$$(this, 0, 0)
};
$JSCompiler_prototypeAlias$$.$flipY$ = function $$JSCompiler_prototypeAlias$$$$flipY$$() {
  $JSCompiler_StaticMethods_flip_$$(this, 1, 1)
};
$JSCompiler_prototypeAlias$$.$flipZ$ = function $$JSCompiler_prototypeAlias$$$$flipZ$$() {
  $JSCompiler_StaticMethods_flip_$$(this, 2, 2)
};
$goog$exportSymbol$$("X.transform", $X$transform$$);
$goog$exportSymbol$$("X.transform.prototype.rotateX", $X$transform$$.prototype.$rotateX$);
$goog$exportSymbol$$("X.transform.prototype.rotateY", $X$transform$$.prototype.$rotateY$);
$goog$exportSymbol$$("X.transform.prototype.rotateZ", $X$transform$$.prototype.$rotateZ$);
$goog$exportSymbol$$("X.transform.prototype.translateX", $X$transform$$.prototype.$translateX$);
$goog$exportSymbol$$("X.transform.prototype.translateY", $X$transform$$.prototype.$translateY$);
$goog$exportSymbol$$("X.transform.prototype.translateZ", $X$transform$$.prototype.$translateZ$);
$goog$exportSymbol$$("X.transform.prototype.matrix", $X$transform$$.prototype.$matrix$);
$goog$exportSymbol$$("X.transform.prototype.glMatrix", $X$transform$$.prototype.$glMatrix$);
$goog$exportSymbol$$("X.transform.prototype.setMatrix", $X$transform$$.prototype.$setMatrix$);
$goog$exportSymbol$$("X.transform.prototype.flipX", $X$transform$$.prototype.$flipX$);
$goog$exportSymbol$$("X.transform.prototype.flipY", $X$transform$$.prototype.$flipY$);
$goog$exportSymbol$$("X.transform.prototype.flipZ", $X$transform$$.prototype.$flipZ$);
function $X$scalars$$() {
  $X$base$$.call(this);
  this._className = "scalars";
  var $counter$$1$$ = window["X.Counter"];
  $counter$$1$$.$increment$();
  this._id = $counter$$1$$.value();
  this.$_glArray$ = this.$_array$ = this.$_file$ = $JSCompiler_alias_NULL$$;
  this.$_min$ = Infinity;
  this.$_max$ = -Infinity;
  this._minColor = [0, 1, 0];
  this._maxColor = [1, 0, 0];
  this._minThreshold = -Infinity;
  this._maxThreshold = Infinity;
  this.$_replaceMode$ = $JSCompiler_alias_TRUE$$
}
$goog$inherits$$($X$scalars$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$scalars$$.prototype;
$JSCompiler_prototypeAlias$$.id = $JSCompiler_get$$("_id");
$JSCompiler_prototypeAlias$$.file = $JSCompiler_get$$("$_file$");
$JSCompiler_prototypeAlias$$.$setFile$ = function $$JSCompiler_prototypeAlias$$$$setFile$$($file$$1$$) {
  $goog$isDefAndNotNull$$($file$$1$$) ? ($goog$isString$$($file$$1$$) && ($file$$1$$ = new $X$file$$($file$$1$$)), this.$_file$ = $file$$1$$) : this.$_file$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$setArray$ = function $$JSCompiler_prototypeAlias$$$$setArray$$($array$$17$$) {
  this.$_glArray$ = this.$_array$ = $array$$17$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.min = $JSCompiler_get$$("$_min$");
$JSCompiler_prototypeAlias$$.max = $JSCompiler_get$$("$_max$");
$JSCompiler_prototypeAlias$$.$setColorRange$ = function $$JSCompiler_prototypeAlias$$$$setColorRange$$($minColor$$, $maxColor$$) {
  (!$goog$isDefAndNotNull$$($minColor$$) || !($minColor$$ instanceof Array) || 3 != $minColor$$.length) && $JSCompiler_alias_THROW$$(Error("Invalid min. color."));
  (!$goog$isDefAndNotNull$$($maxColor$$) || !($maxColor$$ instanceof Array) || 3 != $maxColor$$.length) && $JSCompiler_alias_THROW$$(Error("Invalid max. color."));
  this._minColor = $minColor$$;
  this._maxColor = $maxColor$$
};
$JSCompiler_prototypeAlias$$.$colorRange$ = function $$JSCompiler_prototypeAlias$$$$colorRange$$() {
  return[this._minColor, this._maxColor]
};
$goog$exportSymbol$$("X.scalars", $X$scalars$$);
$goog$exportSymbol$$("X.scalars.prototype.min", $X$scalars$$.prototype.min);
$goog$exportSymbol$$("X.scalars.prototype.max", $X$scalars$$.prototype.max);
$goog$exportSymbol$$("X.scalars.prototype.colorRange", $X$scalars$$.prototype.$colorRange$);
$goog$exportSymbol$$("X.scalars.prototype.setColorRange", $X$scalars$$.prototype.$setColorRange$);
$goog$exportSymbol$$("X.scalars.prototype.setArray", $X$scalars$$.prototype.$setArray$);
function $X$texture$$() {
  $X$base$$.call(this);
  this._className = "texture";
  var $counter$$2$$ = window["X.Counter"];
  $counter$$2$$.$increment$();
  this._id = $counter$$2$$.value();
  this.$_rawData$ = this.$_image$ = this.$_file$ = $JSCompiler_alias_NULL$$;
  this.$_rawDataHeight$ = this.$_rawDataWidth$ = 0;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
}
$goog$inherits$$($X$texture$$, $X$base$$);
$X$texture$$.prototype.id = $JSCompiler_get$$("_id");
$X$texture$$.prototype.file = $JSCompiler_get$$("$_file$");
$X$texture$$.prototype.$setFile$ = function $$X$texture$$$$$setFile$$($file$$2$$) {
  $goog$isDefAndNotNull$$($file$$2$$) ? ($goog$isString$$($file$$2$$) && ($file$$2$$ = new $X$file$$($file$$2$$)), this.$_file$ = $file$$2$$) : this.$_file$ = $JSCompiler_alias_NULL$$
};
$X$texture$$.prototype.$image$ = $JSCompiler_get$$("$_image$");
function $X$object$$($object$$10$$) {
  $X$base$$.call(this);
  this._className = "object";
  var $counter$$3$$ = window["X.Counter"];
  $counter$$3$$.$increment$();
  this._id = $counter$$3$$.value();
  this._type = $X$object$types$TRIANGLES$$;
  this.$_transform$ = new $X$transform$$;
  this._color = [1, 1, 1];
  this.$_points$ = new $X$triplets$$;
  this.$_normals$ = new $X$triplets$$;
  this.$_colors$ = new $X$triplets$$;
  this.$_file$ = this.$_textureCoordinateMap$ = this.$_texture$ = $JSCompiler_alias_NULL$$;
  this._opacity = 1;
  this.$_children$ = $JSCompiler_alias_NULL$$;
  this.$_hideChildren$ = $JSCompiler_alias_FALSE$$;
  this._visible = $JSCompiler_alias_TRUE$$;
  this._lineWidth = this._pointSize = 1;
  this._caption = $JSCompiler_alias_NULL$$;
  this._magicMode = $JSCompiler_alias_FALSE$$;
  $goog$isDefAndNotNull$$($object$$10$$) && this.$copy_$($object$$10$$);
  this.$_scalars$ = this.$_colorTable$ = $JSCompiler_alias_NULL$$;
  this.$_pointIndices$ = [];
  this.$_distance$ = 0;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
}
$goog$inherits$$($X$object$$, $X$base$$);
var $X$object$types$TRIANGLES$$ = "TRIANGLES";
$JSCompiler_prototypeAlias$$ = $X$object$$.prototype;
$JSCompiler_prototypeAlias$$.$copy_$ = function $$JSCompiler_prototypeAlias$$$$copy_$$($object$$11$$) {
  this._type = $object$$11$$._type;
  this.$_transform$.$setMatrix$(new $X$matrix$$($object$$11$$.$_transform$.$_matrix$.$array_$));
  this._color = $object$$11$$._color.slice();
  this.$_points$ = new $X$triplets$$($object$$11$$.$_points$);
  this.$_normals$ = new $X$triplets$$($object$$11$$.$_normals$);
  this.$_colors$ = new $X$triplets$$($object$$11$$.$_colors$);
  this.$_texture$ = $object$$11$$.$_texture$;
  this.$_textureCoordinateMap$ = $object$$11$$.$_textureCoordinateMap$;
  $object$$11$$.$_file$ && (this.$_file$ = new $X$file$$((new String($object$$11$$.$_file$.$_path$)).toString()));
  this._opacity = $object$$11$$._opacity;
  this.children().length = 0;
  var $_oldChildren$$ = $object$$11$$.$_children$;
  if($_oldChildren$$) {
    for(var $_oldChildrenLength$$ = $_oldChildren$$.length, $i$$129$$ = 0, $i$$129$$ = 0;$i$$129$$ < $_oldChildrenLength$$;$i$$129$$++) {
      this._newChild = this._child = $_oldChildren$$[$i$$129$$], eval("this['_newChild'] = new X." + this._child._className + "(this['_child']);"), this.children().push(this._newChild)
    }
  }
  this._visible = $object$$11$$._visible;
  this._pointSize = $object$$11$$._pointSize;
  this._lineWidth = $object$$11$$._lineWidth;
  $object$$11$$._caption && (this._caption = (new String($object$$11$$._caption)).toString());
  this._magicMode = $object$$11$$._magicMode;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.id = $JSCompiler_get$$("_id");
function $JSCompiler_StaticMethods_toCSG$$($JSCompiler_StaticMethods_toCSG$self$$) {
  for(var $numberOfPoints$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_points$.count(), $polygons$$6$$ = [], $p$$3$$ = 0, $p$$3$$ = 0;$p$$3$$ < $numberOfPoints$$;$p$$3$$ += 3) {
    var $point1$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_points$.get($p$$3$$), $point2$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_points$.get($p$$3$$ + 1), $point3$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_points$.get($p$$3$$ + 2), $normal1$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_normals$.get($p$$3$$), $normal2$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_normals$.get($p$$3$$ + 1), $normal3$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_normals$.get($p$$3$$ + 2), $color$$2$$ = $JSCompiler_StaticMethods_toCSG$self$$._color;
    0 < $JSCompiler_StaticMethods_toCSG$self$$.$_colors$.length() && ($color$$2$$ = $JSCompiler_StaticMethods_toCSG$self$$.$_colors$.get($p$$3$$));
    var $vertices$$2$$ = [];
    $vertices$$2$$.push(new $csgVertex$$($point1$$, $normal1$$));
    $vertices$$2$$.push(new $csgVertex$$($point2$$, $normal2$$));
    $vertices$$2$$.push(new $csgVertex$$($point3$$, $normal3$$));
    $polygons$$6$$.push(new $csgPolygon$$($vertices$$2$$, $color$$2$$))
  }
  return $CSG$fromPolygons$$($polygons$$6$$)
}
function $JSCompiler_StaticMethods_fromCSG$$($JSCompiler_StaticMethods_fromCSG$self$$, $csg$$6$$) {
  (!$goog$isDefAndNotNull$$($csg$$6$$) || !($csg$$6$$ instanceof $CSG$$)) && $JSCompiler_alias_THROW$$(Error("Invalid CSG object."));
  $JSCompiler_StaticMethods_fromCSG$self$$.$_points$.clear();
  $JSCompiler_StaticMethods_fromCSG$self$$.$_normals$.clear();
  $JSCompiler_StaticMethods_fromCSG$self$$.$_colors$.clear();
  var $indexer$$ = new $X$indexer$$, $triangles$$ = [];
  $goog$array$map$$($csg$$6$$.$polygons_$, function($i$$130_p$$4$$) {
    for(var $indices$$ = [], $shared$$1$$ = $i$$130_p$$4$$.$shared_$, $indices$$ = $goog$array$map$$($i$$130_p$$4$$.$vertices_$, function($vertex$$) {
      $vertex$$.color = $shared$$1$$;
      return $indexer$$.add($vertex$$)
    }), $i$$130_p$$4$$ = $i$$130_p$$4$$ = 2;$i$$130_p$$4$$ < $indices$$.length;$i$$130_p$$4$$++) {
      $triangles$$.push([$indices$$[0], $indices$$[$i$$130_p$$4$$ - 1], $indices$$[$i$$130_p$$4$$]])
    }
  }.bind($JSCompiler_StaticMethods_fromCSG$self$$));
  $JSCompiler_StaticMethods_fromCSG$self$$.$__vertices$ = $goog$array$map$$($indexer$$.unique(), function($v$$6$$) {
    return[$v$$6$$.$pos_$.x(), $v$$6$$.$pos_$.y(), $v$$6$$.$pos_$.$z$()]
  });
  $JSCompiler_StaticMethods_fromCSG$self$$.$__normals$ = $goog$array$map$$($indexer$$.unique(), function($v$$7$$) {
    return[$v$$7$$.$normal_$.x(), $v$$7$$.$normal_$.y(), $v$$7$$.$normal_$.$z$()]
  });
  $JSCompiler_StaticMethods_fromCSG$self$$.$__colors$ = $goog$array$map$$($indexer$$.unique(), function($v$$8$$) {
    return!$v$$8$$.color ? $JSCompiler_alias_NULL$$ : [$v$$8$$.color[0], $v$$8$$.color[1], $v$$8$$.color[2]]
  });
  $goog$array$map$$($triangles$$, function($i$$131_i2$$3$$) {
    var $i0$$ = $i$$131_i2$$3$$[0], $i1$$3$$ = $i$$131_i2$$3$$[1], $i$$131_i2$$3$$ = $i$$131_i2$$3$$[2], $vertices$$3$$ = this.$__vertices$, $normals$$ = this.$__normals$, $colors$$ = this.$__colors$;
    this.$_points$.add($vertices$$3$$[$i0$$][0], $vertices$$3$$[$i0$$][1], $vertices$$3$$[$i0$$][2]);
    this.$_points$.add($vertices$$3$$[$i1$$3$$][0], $vertices$$3$$[$i1$$3$$][1], $vertices$$3$$[$i1$$3$$][2]);
    this.$_points$.add($vertices$$3$$[$i$$131_i2$$3$$][0], $vertices$$3$$[$i$$131_i2$$3$$][1], $vertices$$3$$[$i$$131_i2$$3$$][2]);
    this.$_normals$.add($normals$$[$i0$$][0], $normals$$[$i0$$][1], $normals$$[$i0$$][2]);
    this.$_normals$.add($normals$$[$i1$$3$$][0], $normals$$[$i1$$3$$][1], $normals$$[$i1$$3$$][2]);
    this.$_normals$.add($normals$$[$i$$131_i2$$3$$][0], $normals$$[$i$$131_i2$$3$$][1], $normals$$[$i$$131_i2$$3$$][2]);
    $colors$$[$i0$$] && this.$_colors$.add($colors$$[$i0$$][0], $colors$$[$i0$$][1], $colors$$[$i0$$][2]);
    $colors$$[$i1$$3$$] && this.$_colors$.add($colors$$[$i1$$3$$][0], $colors$$[$i1$$3$$][1], $colors$$[$i1$$3$$][2]);
    $colors$$[$i$$131_i2$$3$$] && this.$_colors$.add($colors$$[$i$$131_i2$$3$$][0], $colors$$[$i$$131_i2$$3$$][1], $colors$$[$i$$131_i2$$3$$][2])
  }.bind($JSCompiler_StaticMethods_fromCSG$self$$));
  $JSCompiler_StaticMethods_fromCSG$self$$.$setType$($X$object$types$TRIANGLES$$)
}
$JSCompiler_prototypeAlias$$.type = $JSCompiler_get$$("_type");
$JSCompiler_prototypeAlias$$.$setType$ = $JSCompiler_set$$("_type");
$JSCompiler_prototypeAlias$$.transform = $JSCompiler_get$$("$_transform$");
$JSCompiler_prototypeAlias$$.$points$ = $JSCompiler_get$$("$_points$");
$JSCompiler_prototypeAlias$$.$normals$ = $JSCompiler_get$$("$_normals$");
$JSCompiler_prototypeAlias$$.$colors$ = $JSCompiler_get$$("$_colors$");
$JSCompiler_prototypeAlias$$.color = $JSCompiler_get$$("_color");
$JSCompiler_prototypeAlias$$.$texture$ = $JSCompiler_get$$("$_texture$");
$JSCompiler_prototypeAlias$$.$setTexture$ = function $$JSCompiler_prototypeAlias$$$$setTexture$$($texture$$5$$) {
  if($goog$isDefAndNotNull$$($texture$$5$$)) {
    if($goog$isString$$($texture$$5$$)) {
      var $textureFile$$ = $texture$$5$$, $texture$$5$$ = new $X$texture$$;
      $texture$$5$$.$setFile$($textureFile$$)
    }
    $texture$$5$$ instanceof $X$texture$$ || $JSCompiler_alias_THROW$$(Error("Invalid texture."));
    this.$_texture$ = $texture$$5$$
  }else {
    this.$_texture$ = $JSCompiler_alias_NULL$$
  }
};
$JSCompiler_prototypeAlias$$.$colorTable$ = $JSCompiler_get$$("$_colorTable$");
$JSCompiler_prototypeAlias$$.$setColorTable$ = function $$JSCompiler_prototypeAlias$$$$setColorTable$$($colorTable$$) {
  if($goog$isDefAndNotNull$$($colorTable$$)) {
    if($goog$isString$$($colorTable$$)) {
      var $colorTableFile$$ = $colorTable$$, $colorTable$$ = new $X$colorTable$$;
      $colorTable$$.$setFile$($colorTableFile$$)
    }
    $colorTable$$ instanceof $X$colorTable$$ || $JSCompiler_alias_THROW$$(Error("Invalid colorTable."));
    this.$_colorTable$ = $colorTable$$
  }else {
    this.$_colorTable$ = $JSCompiler_alias_NULL$$
  }
};
$JSCompiler_prototypeAlias$$.$setColor$ = function $$JSCompiler_prototypeAlias$$$$setColor$$($r$$2$$, $g$$1$$, $b$$43$$) {
  (!$goog$isNumber$$($r$$2$$) && 0 > $r$$2$$ && 1 < $r$$2$$ || !$goog$isNumber$$($g$$1$$) && 0 > $g$$1$$ && 1 < $g$$1$$ || !$goog$isNumber$$($b$$43$$) && 0 > $b$$43$$ && 1 < $b$$43$$) && $JSCompiler_alias_THROW$$(Error("Invalid color."));
  if(this.$hasChildren$()) {
    for(var $children$$ = this.children(), $numberOfChildren$$ = $children$$.length, $c$$5$$ = 0, $c$$5$$ = 0;$c$$5$$ < $numberOfChildren$$;$c$$5$$++) {
      $children$$[$c$$5$$].$setColor$($r$$2$$, $g$$1$$, $b$$43$$)
    }
  }
  this._color[0] = $r$$2$$;
  this._color[1] = $g$$1$$;
  this._color[2] = $b$$43$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$union$ = function $$JSCompiler_prototypeAlias$$$$union$$($object$$12_result$$14$$) {
  (!$goog$isDefAndNotNull$$($object$$12_result$$14$$) || !($object$$12_result$$14$$ instanceof $CSG$$) && !($object$$12_result$$14$$ instanceof $X$object$$)) && $JSCompiler_alias_THROW$$(Error("Invalid object."));
  var $csg$$7$$ = $object$$12_result$$14$$;
  $object$$12_result$$14$$ instanceof $X$object$$ && ($csg$$7$$ = $JSCompiler_StaticMethods_toCSG$$($csg$$7$$));
  $object$$12_result$$14$$ = new $X$object$$;
  $JSCompiler_StaticMethods_fromCSG$$($object$$12_result$$14$$, $JSCompiler_StaticMethods_toCSG$$(this).$union$($csg$$7$$));
  return $object$$12_result$$14$$
};
$JSCompiler_prototypeAlias$$.$subtract$ = function $$JSCompiler_prototypeAlias$$$$subtract$$($object$$13_result$$15$$) {
  (!$goog$isDefAndNotNull$$($object$$13_result$$15$$) || !($object$$13_result$$15$$ instanceof $CSG$$) && !($object$$13_result$$15$$ instanceof $X$object$$)) && $JSCompiler_alias_THROW$$(Error("Invalid object."));
  var $csg$$8$$ = $object$$13_result$$15$$;
  $object$$13_result$$15$$ instanceof $X$object$$ && ($csg$$8$$ = $JSCompiler_StaticMethods_toCSG$$($csg$$8$$));
  $object$$13_result$$15$$ = new $X$object$$;
  $JSCompiler_StaticMethods_fromCSG$$($object$$13_result$$15$$, $JSCompiler_StaticMethods_toCSG$$(this).$subtract$($csg$$8$$));
  return $object$$13_result$$15$$
};
$JSCompiler_prototypeAlias$$.$intersect$ = function $$JSCompiler_prototypeAlias$$$$intersect$$($object$$14_result$$16$$) {
  (!$goog$isDefAndNotNull$$($object$$14_result$$16$$) || !($object$$14_result$$16$$ instanceof $CSG$$) && !($object$$14_result$$16$$ instanceof $X$object$$)) && $JSCompiler_alias_THROW$$(Error("Invalid object."));
  var $csg$$9$$ = $object$$14_result$$16$$;
  $object$$14_result$$16$$ instanceof $X$object$$ && ($csg$$9$$ = $JSCompiler_StaticMethods_toCSG$$($csg$$9$$));
  $object$$14_result$$16$$ = new $X$object$$;
  $JSCompiler_StaticMethods_fromCSG$$($object$$14_result$$16$$, $JSCompiler_StaticMethods_toCSG$$(this).$intersect$($csg$$9$$));
  return $object$$14_result$$16$$
};
$JSCompiler_prototypeAlias$$.inverse = function $$JSCompiler_prototypeAlias$$$inverse$($object$$15_result$$17$$) {
  (!$goog$isDefAndNotNull$$($object$$15_result$$17$$) || !($object$$15_result$$17$$ instanceof $CSG$$) && !($object$$15_result$$17$$ instanceof $X$object$$)) && $JSCompiler_alias_THROW$$(Error("Invalid object."));
  var $csg$$10$$ = $object$$15_result$$17$$;
  $object$$15_result$$17$$ instanceof $X$object$$ && ($csg$$10$$ = $JSCompiler_StaticMethods_toCSG$$($csg$$10$$));
  $object$$15_result$$17$$ = new $X$object$$;
  $JSCompiler_StaticMethods_fromCSG$$($object$$15_result$$17$$, $JSCompiler_StaticMethods_toCSG$$(this).inverse($csg$$10$$));
  return $object$$15_result$$17$$
};
$JSCompiler_prototypeAlias$$.opacity = $JSCompiler_get$$("_opacity");
$JSCompiler_prototypeAlias$$.caption = $JSCompiler_get$$("_caption");
$JSCompiler_prototypeAlias$$.$setCaption$ = function $$JSCompiler_prototypeAlias$$$$setCaption$$($caption$$) {
  this._caption = $caption$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($visible$$) {
  if(this.$hasChildren$()) {
    for(var $children$$1$$ = this.children(), $numberOfChildren$$1$$ = $children$$1$$.length, $c$$6$$ = 0, $c$$6$$ = 0;$c$$6$$ < $numberOfChildren$$1$$;$c$$6$$++) {
      $children$$1$$[$c$$6$$].$setVisible$($visible$$)
    }
  }
  this._visible = $visible$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$visible$ = $JSCompiler_get$$("_visible");
$JSCompiler_prototypeAlias$$.$setOpacity$ = function $$JSCompiler_prototypeAlias$$$$setOpacity$$($opacity$$) {
  (!$goog$isNumber$$($opacity$$) || 1 < $opacity$$ || 0 > $opacity$$) && $JSCompiler_alias_THROW$$(Error("Invalid opacity."));
  if(this.$hasChildren$()) {
    for(var $children$$2$$ = this.children(), $numberOfChildren$$2$$ = $children$$2$$.length, $c$$7$$ = 0, $c$$7$$ = 0;$c$$7$$ < $numberOfChildren$$2$$;$c$$7$$++) {
      $children$$2$$[$c$$7$$].$setOpacity$($opacity$$)
    }
  }
  this._opacity = $opacity$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.load = function $$JSCompiler_prototypeAlias$$$load$($filepath$$) {
  this.$_file$ = $goog$isDefAndNotNull$$($filepath$$) ? new $X$file$$($filepath$$) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.file = $JSCompiler_get$$("$_file$");
$JSCompiler_prototypeAlias$$.$modified$ = function $$JSCompiler_prototypeAlias$$$$modified$$() {
  var $modifiedEvent$$ = new $X$event$ModifiedEvent$$;
  $modifiedEvent$$.$_object$ = this;
  this.dispatchEvent($modifiedEvent$$)
};
$JSCompiler_prototypeAlias$$.children = function $$JSCompiler_prototypeAlias$$$children$() {
  this.$_children$ || (this.$_children$ = []);
  return this.$_children$
};
$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return!this.$_children$ || this.$_hideChildren$ ? $JSCompiler_alias_FALSE$$ : 0 < this.$_children$.length
};
$JSCompiler_prototypeAlias$$.$setLineWidth$ = function $$JSCompiler_prototypeAlias$$$$setLineWidth$$($width$$11$$) {
  $goog$isNumber$$($width$$11$$) || $JSCompiler_alias_THROW$$(Error("Invalid line width."));
  this._lineWidth = $width$$11$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.lineWidth = $JSCompiler_get$$("_lineWidth");
$JSCompiler_prototypeAlias$$.$setPointSize$ = function $$JSCompiler_prototypeAlias$$$$setPointSize$$($size$$9$$) {
  $goog$isNumber$$($size$$9$$) || $JSCompiler_alias_THROW$$(Error("Invalid point size."));
  this._pointSize = $size$$9$$;
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$pointSize$ = $JSCompiler_get$$("_pointSize");
$JSCompiler_prototypeAlias$$.$magicMode$ = $JSCompiler_get$$("_magicMode");
$JSCompiler_prototypeAlias$$.$setMagicMode$ = function $$JSCompiler_prototypeAlias$$$$setMagicMode$$($magicMode$$) {
  "boolean" != typeof $magicMode$$ && $JSCompiler_alias_THROW$$(Error("Invalid magicMode setting."));
  this._magicMode = $magicMode$$
};
$JSCompiler_prototypeAlias$$.$scalars$ = $JSCompiler_get$$("$_scalars$");
$JSCompiler_prototypeAlias$$.$setScalars$ = function $$JSCompiler_prototypeAlias$$$$setScalars$$($scalars$$) {
  if($goog$isDefAndNotNull$$($scalars$$)) {
    if($goog$isString$$($scalars$$)) {
      var $scalarsFile$$ = $scalars$$, $scalars$$ = new $X$scalars$$;
      $scalars$$.$setFile$($scalarsFile$$)
    }
    $scalars$$ instanceof $X$scalars$$ || $JSCompiler_alias_THROW$$(Error("Invalid scalars."));
    this.$_scalars$ = $scalars$$
  }else {
    this.$_scalars$ = $JSCompiler_alias_NULL$$
  }
};
function $X$object$OPACITY_COMPARATOR$$($object1$$, $object2$$) {
  (!$goog$isDefAndNotNull$$($object1$$) || !$goog$isDefAndNotNull$$($object2$$) || !($object1$$ instanceof $X$object$$) || !($object2$$ instanceof $X$object$$)) && $JSCompiler_alias_THROW$$(Error("Fatal: Two valid X.objects are required for comparison."));
  return 1 == $object1$$._opacity ? -1 : 1 == $object2$$._opacity ? 1 : $goog$isDefAndNotNull$$($object1$$.$_distance$) && $goog$isDefAndNotNull$$($object2$$.$_distance$) && $object1$$.$_distance$ > $object2$$.$_distance$ ? -1 : 1
}
$goog$exportSymbol$$("X.object", $X$object$$);
$goog$exportSymbol$$("X.object.prototype.id", $X$object$$.prototype.id);
$goog$exportSymbol$$("X.object.prototype.type", $X$object$$.prototype.type);
$goog$exportSymbol$$("X.object.prototype.setType", $X$object$$.prototype.$setType$);
$goog$exportSymbol$$("X.object.prototype.transform", $X$object$$.prototype.transform);
$goog$exportSymbol$$("X.object.prototype.points", $X$object$$.prototype.$points$);
$goog$exportSymbol$$("X.object.prototype.normals", $X$object$$.prototype.$normals$);
$goog$exportSymbol$$("X.object.prototype.texture", $X$object$$.prototype.$texture$);
$goog$exportSymbol$$("X.object.prototype.setTexture", $X$object$$.prototype.$setTexture$);
$goog$exportSymbol$$("X.object.prototype.colorTable", $X$object$$.prototype.$colorTable$);
$goog$exportSymbol$$("X.object.prototype.setColorTable", $X$object$$.prototype.$setColorTable$);
$goog$exportSymbol$$("X.object.prototype.scalars", $X$object$$.prototype.$scalars$);
$goog$exportSymbol$$("X.object.prototype.setScalars", $X$object$$.prototype.$setScalars$);
$goog$exportSymbol$$("X.object.prototype.colors", $X$object$$.prototype.$colors$);
$goog$exportSymbol$$("X.object.prototype.color", $X$object$$.prototype.color);
$goog$exportSymbol$$("X.object.prototype.setColor", $X$object$$.prototype.$setColor$);
$goog$exportSymbol$$("X.object.prototype.opacity", $X$object$$.prototype.opacity);
$goog$exportSymbol$$("X.object.prototype.setOpacity", $X$object$$.prototype.$setOpacity$);
$goog$exportSymbol$$("X.object.prototype.lineWidth", $X$object$$.prototype.lineWidth);
$goog$exportSymbol$$("X.object.prototype.setLineWidth", $X$object$$.prototype.$setLineWidth$);
$goog$exportSymbol$$("X.object.prototype.pointSize", $X$object$$.prototype.$pointSize$);
$goog$exportSymbol$$("X.object.prototype.setPointSize", $X$object$$.prototype.$setPointSize$);
$goog$exportSymbol$$("X.object.prototype.load", $X$object$$.prototype.load);
$goog$exportSymbol$$("X.object.prototype.file", $X$object$$.prototype.file);
$goog$exportSymbol$$("X.object.prototype.caption", $X$object$$.prototype.caption);
$goog$exportSymbol$$("X.object.prototype.visible", $X$object$$.prototype.$visible$);
$goog$exportSymbol$$("X.object.prototype.setCaption", $X$object$$.prototype.$setCaption$);
$goog$exportSymbol$$("X.object.prototype.setVisible", $X$object$$.prototype.$setVisible$);
$goog$exportSymbol$$("X.object.prototype.magicMode", $X$object$$.prototype.$magicMode$);
$goog$exportSymbol$$("X.object.prototype.setMagicMode", $X$object$$.prototype.$setMagicMode$);
$goog$exportSymbol$$("X.object.prototype.intersect", $X$object$$.prototype.$intersect$);
$goog$exportSymbol$$("X.object.prototype.inverse", $X$object$$.prototype.inverse);
$goog$exportSymbol$$("X.object.prototype.subtract", $X$object$$.prototype.$subtract$);
$goog$exportSymbol$$("X.object.prototype.union", $X$object$$.prototype.$union$);
$goog$exportSymbol$$("X.object.prototype.children", $X$object$$.prototype.children);
$goog$exportSymbol$$("X.object.prototype.modified", $X$object$$.prototype.$modified$);
function $X$event$$($type$$77$$) {
  $goog$events$Event$$.call(this, $type$$77$$);
  this._className = "event"
}
$goog$inherits$$($X$event$$, $goog$events$Event$$);
var $X$event$events$PAN$$ = $goog$events$getUniqueId$$("pan"), $X$event$events$ROTATE$$ = $goog$events$getUniqueId$$("rotate"), $X$event$events$ZOOM$$ = $goog$events$getUniqueId$$("zoom"), $X$event$events$RENDER$$ = $goog$events$getUniqueId$$("render"), $X$event$events$RESETVIEW$$ = $goog$events$getUniqueId$$("resetview"), $X$event$events$MODIFIED$$ = $goog$events$getUniqueId$$("modified"), $X$event$events$PROGRESS$$ = $goog$events$getUniqueId$$("progress"), $X$event$events$HOVER$$ = $goog$events$getUniqueId$$("hover"), 
$X$event$events$HOVER_END$$ = $goog$events$getUniqueId$$("hover_end");
function $X$event$PanEvent$$() {
  $X$event$$.call(this, $X$event$events$PAN$$);
  this.$_distance$ = new $goog$math$Vec2$$(0, 0)
}
$goog$inherits$$($X$event$PanEvent$$, $X$event$$);
function $X$event$RotateEvent$$() {
  $X$event$$.call(this, $X$event$events$ROTATE$$);
  this.$_distance$ = new $goog$math$Vec2$$(0, 0)
}
$goog$inherits$$($X$event$RotateEvent$$, $X$event$$);
function $X$event$ZoomEvent$$() {
  $X$event$$.call(this, $X$event$events$ZOOM$$);
  this.$_fast$ = this.$_in$ = $JSCompiler_alias_FALSE$$
}
$goog$inherits$$($X$event$ZoomEvent$$, $X$event$$);
function $X$event$RenderEvent$$() {
  $X$event$$.call(this, $X$event$events$RENDER$$)
}
$goog$inherits$$($X$event$RenderEvent$$, $X$event$$);
function $X$event$HoverEvent$$() {
  $X$event$$.call(this, $X$event$events$HOVER$$);
  this.$_y$ = this.$_x$ = 0
}
$goog$inherits$$($X$event$HoverEvent$$, $X$event$$);
function $X$event$HoverEndEvent$$() {
  $X$event$$.call(this, $X$event$events$HOVER_END$$)
}
$goog$inherits$$($X$event$HoverEndEvent$$, $X$event$$);
function $X$event$ResetViewEvent$$() {
  $X$event$$.call(this, $X$event$events$RESETVIEW$$)
}
$goog$inherits$$($X$event$ResetViewEvent$$, $X$event$$);
function $X$event$ModifiedEvent$$() {
  $X$event$$.call(this, $X$event$events$MODIFIED$$);
  this.$_object$ = new $X$object$$
}
$goog$inherits$$($X$event$ModifiedEvent$$, $X$event$$);
function $X$event$ProgressEvent$$() {
  $X$event$$.call(this, $X$event$events$PROGRESS$$);
  this.$_value$ = 0
}
$goog$inherits$$($X$event$ProgressEvent$$, $X$event$$);
function $goog$math$Box$$($top$$2$$, $right$$5$$, $bottom$$1$$, $left$$5$$) {
  this.top = $top$$2$$;
  this.right = $right$$5$$;
  this.bottom = $bottom$$1$$;
  this.left = $left$$5$$
}
$goog$math$Box$$.prototype.$clone$ = function $$goog$math$Box$$$$$clone$$() {
  return new $goog$math$Box$$(this.top, this.right, this.bottom, this.left)
};
$goog$math$Box$$.prototype.toString = function $$goog$math$Box$$$$toString$() {
  return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
$goog$math$Box$$.prototype.contains = function $$goog$math$Box$$$$contains$($other$$5$$) {
  return!this || !$other$$5$$ ? $JSCompiler_alias_FALSE$$ : $other$$5$$ instanceof $goog$math$Box$$ ? $other$$5$$.left >= this.left && $other$$5$$.right <= this.right && $other$$5$$.top >= this.top && $other$$5$$.bottom <= this.bottom : $other$$5$$.x >= this.left && $other$$5$$.x <= this.right && $other$$5$$.y >= this.top && $other$$5$$.y <= this.bottom
};
function $goog$math$Rect$$($x$$66$$, $y$$39$$, $w$$5$$, $h$$5$$) {
  this.left = $x$$66$$;
  this.top = $y$$39$$;
  this.width = $w$$5$$;
  this.height = $h$$5$$
}
$JSCompiler_prototypeAlias$$ = $goog$math$Rect$$.prototype;
$JSCompiler_prototypeAlias$$.$clone$ = function $$JSCompiler_prototypeAlias$$$$clone$$() {
  return new $goog$math$Rect$$(this.left, this.top, this.width, this.height)
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
$JSCompiler_prototypeAlias$$.$intersection$ = function $$JSCompiler_prototypeAlias$$$$intersection$$($rect_y1$$4$$) {
  var $x0$$2$$ = Math.max(this.left, $rect_y1$$4$$.left), $x1$$4$$ = Math.min(this.left + this.width, $rect_y1$$4$$.left + $rect_y1$$4$$.width);
  if($x0$$2$$ <= $x1$$4$$) {
    var $y0$$2$$ = Math.max(this.top, $rect_y1$$4$$.top), $rect_y1$$4$$ = Math.min(this.top + this.height, $rect_y1$$4$$.top + $rect_y1$$4$$.height);
    if($y0$$2$$ <= $rect_y1$$4$$) {
      return this.left = $x0$$2$$, this.top = $y0$$2$$, this.width = $x1$$4$$ - $x0$$2$$, this.height = $rect_y1$$4$$ - $y0$$2$$, $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($another$$) {
  return $another$$ instanceof $goog$math$Rect$$ ? this.left <= $another$$.left && this.left + this.width >= $another$$.left + $another$$.width && this.top <= $another$$.top && this.top + this.height >= $another$$.top + $another$$.height : $another$$.x >= this.left && $another$$.x <= this.left + this.width && $another$$.y >= this.top && $another$$.y <= this.top + this.height
};
$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return new $goog$math$Size$$(this.width, this.height)
};
var $goog$dom$defaultDomHelper_$$;
function $goog$dom$classes$add$$($element$$13$$, $var_args$$57$$) {
  var $className$$inline_184_classes$$;
  $className$$inline_184_classes$$ = ($className$$inline_184_classes$$ = $element$$13$$.className) && "function" == typeof $className$$inline_184_classes$$.split ? $className$$inline_184_classes$$.split(/\s+/) : [];
  var $args$$5_args$$inline_187$$ = $goog$array$slice$$(arguments, 1), $b$$52_classes$$inline_186$$;
  $b$$52_classes$$inline_186$$ = $className$$inline_184_classes$$;
  for(var $rv$$inline_188$$ = 0, $i$$inline_189$$ = 0;$i$$inline_189$$ < $args$$5_args$$inline_187$$.length;$i$$inline_189$$++) {
    0 <= $goog$array$indexOf$$($b$$52_classes$$inline_186$$, $args$$5_args$$inline_187$$[$i$$inline_189$$]) || ($b$$52_classes$$inline_186$$.push($args$$5_args$$inline_187$$[$i$$inline_189$$]), $rv$$inline_188$$++)
  }
  $b$$52_classes$$inline_186$$ = $rv$$inline_188$$ == $args$$5_args$$inline_187$$.length;
  $element$$13$$.className = $className$$inline_184_classes$$.join(" ");
  return $b$$52_classes$$inline_186$$
}
;var $goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ = !$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$(9);
!$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$isDocumentMode$$(9) || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.1");
$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("9");
function $goog$dom$getDomHelper$$($opt_element$$) {
  return $opt_element$$ ? new $goog$dom$DomHelper$$($goog$dom$getOwnerDocument$$($opt_element$$)) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$)
}
function $goog$dom$getElement$$($element$$20$$) {
  return $goog$isString$$($element$$20$$) ? document.getElementById($element$$20$$) : $element$$20$$
}
function $goog$dom$setProperties$$($element$$21$$, $properties$$) {
  $goog$object$forEach$$($properties$$, function($val$$37$$, $key$$63$$) {
    "style" == $key$$63$$ ? $element$$21$$.style.cssText = $val$$37$$ : "class" == $key$$63$$ ? $element$$21$$.className = $val$$37$$ : "for" == $key$$63$$ ? $element$$21$$.htmlFor = $val$$37$$ : $key$$63$$ in $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ ? $element$$21$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$$63$$], $val$$37$$) : 0 == $key$$63$$.lastIndexOf("aria-", 0) ? $element$$21$$.setAttribute($key$$63$$, $val$$37$$) : $element$$21$$[$key$$63$$] = $val$$37$$
  })
}
var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function $goog$dom$createDom$$($tagName$$2$$, $opt_attributes$$, $var_args$$59$$) {
  return $goog$dom$createDom_$$(document, arguments)
}
function $goog$dom$createDom_$$($doc$$11$$, $args$$9$$) {
  var $element$$22_tagName$$3_tagNameArr$$ = $args$$9$$[0], $attributes$$1$$ = $args$$9$$[1];
  if(!$goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ && $attributes$$1$$ && ($attributes$$1$$.name || $attributes$$1$$.type)) {
    $element$$22_tagName$$3_tagNameArr$$ = ["<", $element$$22_tagName$$3_tagNameArr$$];
    $attributes$$1$$.name && $element$$22_tagName$$3_tagNameArr$$.push(' name="', $goog$string$htmlEscape$$($attributes$$1$$.name), '"');
    if($attributes$$1$$.type) {
      $element$$22_tagName$$3_tagNameArr$$.push(' type="', $goog$string$htmlEscape$$($attributes$$1$$.type), '"');
      var $clone$$3$$ = {};
      $goog$object$extend$$($clone$$3$$, $attributes$$1$$);
      $attributes$$1$$ = $clone$$3$$;
      delete $attributes$$1$$.type
    }
    $element$$22_tagName$$3_tagNameArr$$.push(">");
    $element$$22_tagName$$3_tagNameArr$$ = $element$$22_tagName$$3_tagNameArr$$.join("")
  }
  $element$$22_tagName$$3_tagNameArr$$ = $doc$$11$$.createElement($element$$22_tagName$$3_tagNameArr$$);
  $attributes$$1$$ && ($goog$isString$$($attributes$$1$$) ? $element$$22_tagName$$3_tagNameArr$$.className = $attributes$$1$$ : $goog$isArray$$($attributes$$1$$) ? $goog$dom$classes$add$$.apply($JSCompiler_alias_NULL$$, [$element$$22_tagName$$3_tagNameArr$$].concat($attributes$$1$$)) : $goog$dom$setProperties$$($element$$22_tagName$$3_tagNameArr$$, $attributes$$1$$));
  2 < $args$$9$$.length && $goog$dom$append_$$($doc$$11$$, $element$$22_tagName$$3_tagNameArr$$, $args$$9$$);
  return $element$$22_tagName$$3_tagNameArr$$
}
function $goog$dom$append_$$($doc$$12$$, $parent$$10$$, $args$$10$$) {
  function $childHandler$$($child$$1$$) {
    $child$$1$$ && $parent$$10$$.appendChild($goog$isString$$($child$$1$$) ? $doc$$12$$.createTextNode($child$$1$$) : $child$$1$$)
  }
  for(var $i$$137$$ = 2;$i$$137$$ < $args$$10$$.length;$i$$137$$++) {
    var $arg$$6$$ = $args$$10$$[$i$$137$$];
    $goog$isArrayLike$$($arg$$6$$) && !($goog$isObject$$($arg$$6$$) && 0 < $arg$$6$$.nodeType) ? $goog$array$forEach$$($goog$dom$isNodeList$$($arg$$6$$) ? $goog$array$clone$$($arg$$6$$) : $arg$$6$$, $childHandler$$) : $childHandler$$($arg$$6$$)
  }
}
function $goog$dom$removeNode$$($node$$5$$) {
  $node$$5$$ && $node$$5$$.parentNode && $node$$5$$.parentNode.removeChild($node$$5$$)
}
function $goog$dom$getNextElementNode_$$($node$$11$$) {
  for(;$node$$11$$ && 1 != $node$$11$$.nodeType;) {
    $node$$11$$ = $node$$11$$.nextSibling
  }
  return $node$$11$$
}
function $goog$dom$contains$$($parent$$17$$, $descendant$$) {
  if($parent$$17$$.contains && 1 == $descendant$$.nodeType) {
    return $parent$$17$$ == $descendant$$ || $parent$$17$$.contains($descendant$$)
  }
  if("undefined" != typeof $parent$$17$$.compareDocumentPosition) {
    return $parent$$17$$ == $descendant$$ || Boolean($parent$$17$$.compareDocumentPosition($descendant$$) & 16)
  }
  for(;$descendant$$ && $parent$$17$$ != $descendant$$;) {
    $descendant$$ = $descendant$$.parentNode
  }
  return $descendant$$ == $parent$$17$$
}
function $goog$dom$getOwnerDocument$$($node$$16$$) {
  return 9 == $node$$16$$.nodeType ? $node$$16$$ : $node$$16$$.ownerDocument || $node$$16$$.document
}
function $goog$dom$isNodeList$$($val$$38$$) {
  if($val$$38$$ && "number" == typeof $val$$38$$.length) {
    if($goog$isObject$$($val$$38$$)) {
      return"function" == typeof $val$$38$$.item || "string" == typeof $val$$38$$.item
    }
    if($goog$isFunction$$($val$$38$$)) {
      return"function" == typeof $val$$38$$.item
    }
  }
  return $JSCompiler_alias_FALSE$$
}
function $goog$dom$DomHelper$$($opt_document$$) {
  this.$document_$ = $opt_document$$ || $goog$global$$.document || document
}
$JSCompiler_prototypeAlias$$ = $goog$dom$DomHelper$$.prototype;
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $goog$dom$getDomHelper$$;
$JSCompiler_prototypeAlias$$.$getElement$ = function $$JSCompiler_prototypeAlias$$$$getElement$$($element$$33$$) {
  return $goog$isString$$($element$$33$$) ? this.$document_$.getElementById($element$$33$$) : $element$$33$$
};
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($tagName$$5$$, $opt_attributes$$1$$, $var_args$$62$$) {
  return $goog$dom$createDom_$$(this.$document_$, arguments)
};
$JSCompiler_prototypeAlias$$.createElement = function $$JSCompiler_prototypeAlias$$$createElement$($name$$67$$) {
  return this.$document_$.createElement($name$$67$$)
};
$JSCompiler_prototypeAlias$$.createTextNode = function $$JSCompiler_prototypeAlias$$$createTextNode$($content$$1$$) {
  return this.$document_$.createTextNode($content$$1$$)
};
function $JSCompiler_StaticMethods_isCss1CompatMode$$($JSCompiler_StaticMethods_isCss1CompatMode$self$$) {
  return"CSS1Compat" == $JSCompiler_StaticMethods_isCss1CompatMode$self$$.$document_$.compatMode
}
function $JSCompiler_StaticMethods_getDocumentScroll$$($JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_193$$) {
  var $doc$$inline_192_win$$inline_194$$ = $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_193$$.$document_$, $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_193$$ = !$goog$userAgent$WEBKIT$$ && "CSS1Compat" == $doc$$inline_192_win$$inline_194$$.compatMode ? $doc$$inline_192_win$$inline_194$$.documentElement : $doc$$inline_192_win$$inline_194$$.body, $doc$$inline_192_win$$inline_194$$ = $doc$$inline_192_win$$inline_194$$.parentWindow || $doc$$inline_192_win$$inline_194$$.defaultView;
  return new $goog$math$Coordinate$$($doc$$inline_192_win$$inline_194$$.pageXOffset || $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_193$$.scrollLeft, $doc$$inline_192_win$$inline_194$$.pageYOffset || $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_193$$.scrollTop)
}
$JSCompiler_prototypeAlias$$.appendChild = function $$JSCompiler_prototypeAlias$$$appendChild$($parent$$11$$, $child$$2$$) {
  $parent$$11$$.appendChild($child$$2$$)
};
$JSCompiler_prototypeAlias$$.contains = $goog$dom$contains$$;
function $goog$style$getComputedStyle$$($element$$37$$, $property$$4$$) {
  var $doc$$23_styles$$ = $goog$dom$getOwnerDocument$$($element$$37$$);
  return $doc$$23_styles$$.defaultView && $doc$$23_styles$$.defaultView.getComputedStyle && ($doc$$23_styles$$ = $doc$$23_styles$$.defaultView.getComputedStyle($element$$37$$, $JSCompiler_alias_NULL$$)) ? $doc$$23_styles$$[$property$$4$$] || $doc$$23_styles$$.getPropertyValue($property$$4$$) : ""
}
function $goog$style$getCascadedStyle$$($element$$38$$, $style$$2$$) {
  return $element$$38$$.currentStyle ? $element$$38$$.currentStyle[$style$$2$$] : $JSCompiler_alias_NULL$$
}
function $goog$style$getStyle_$$($element$$39$$, $style$$3$$) {
  return $goog$style$getComputedStyle$$($element$$39$$, $style$$3$$) || $goog$style$getCascadedStyle$$($element$$39$$, $style$$3$$) || $element$$39$$.style && $element$$39$$.style[$style$$3$$]
}
function $goog$style$getClientViewportElement$$($doc$$24_opt_node$$) {
  $doc$$24_opt_node$$ = $doc$$24_opt_node$$ ? 9 == $doc$$24_opt_node$$.nodeType ? $doc$$24_opt_node$$ : $goog$dom$getOwnerDocument$$($doc$$24_opt_node$$) : document;
  return $goog$userAgent$IE$$ && !$goog$userAgent$isDocumentMode$$(9) && !$JSCompiler_StaticMethods_isCss1CompatMode$$($goog$dom$getDomHelper$$($doc$$24_opt_node$$)) ? $doc$$24_opt_node$$.body : $doc$$24_opt_node$$.documentElement
}
function $goog$style$getBoundingClientRect_$$($doc$$25_el$$5$$) {
  var $rect$$4$$ = $doc$$25_el$$5$$.getBoundingClientRect();
  $goog$userAgent$IE$$ && ($doc$$25_el$$5$$ = $doc$$25_el$$5$$.ownerDocument, $rect$$4$$.left -= $doc$$25_el$$5$$.documentElement.clientLeft + $doc$$25_el$$5$$.body.clientLeft, $rect$$4$$.top -= $doc$$25_el$$5$$.documentElement.clientTop + $doc$$25_el$$5$$.body.clientTop);
  return $rect$$4$$
}
function $goog$style$getOffsetParent$$($element$$48_parent$$20$$) {
  if($goog$userAgent$IE$$ && !$goog$userAgent$isDocumentMode$$(8)) {
    return $element$$48_parent$$20$$.offsetParent
  }
  for(var $doc$$26$$ = $goog$dom$getOwnerDocument$$($element$$48_parent$$20$$), $positionStyle$$ = $goog$style$getStyle_$$($element$$48_parent$$20$$, "position"), $skipStatic$$ = "fixed" == $positionStyle$$ || "absolute" == $positionStyle$$, $element$$48_parent$$20$$ = $element$$48_parent$$20$$.parentNode;$element$$48_parent$$20$$ && $element$$48_parent$$20$$ != $doc$$26$$;$element$$48_parent$$20$$ = $element$$48_parent$$20$$.parentNode) {
    if($positionStyle$$ = $goog$style$getStyle_$$($element$$48_parent$$20$$, "position"), $skipStatic$$ = $skipStatic$$ && "static" == $positionStyle$$ && $element$$48_parent$$20$$ != $doc$$26$$.documentElement && $element$$48_parent$$20$$ != $doc$$26$$.body, !$skipStatic$$ && ($element$$48_parent$$20$$.scrollWidth > $element$$48_parent$$20$$.clientWidth || $element$$48_parent$$20$$.scrollHeight > $element$$48_parent$$20$$.clientHeight || "fixed" == $positionStyle$$ || "absolute" == $positionStyle$$ || 
    "relative" == $positionStyle$$)) {
      return $element$$48_parent$$20$$
    }
  }
  return $JSCompiler_alias_NULL$$
}
function $goog$style$getVisibleRectForElement$$($el$$6_element$$49_scrollHeight$$inline_670$$) {
  for(var $visibleRect$$ = new $goog$math$Box$$(0, Infinity, Infinity, 0), $dom_el$$inline_671_win$$inline_667_winSize$$ = $goog$dom$getDomHelper$$($el$$6_element$$49_scrollHeight$$inline_670$$), $body$$2_scrollX$$ = $dom_el$$inline_671_win$$inline_667_winSize$$.$document_$.body, $doc$$inline_668_documentElement_innerHeight$$inline_669$$ = $dom_el$$inline_671_win$$inline_667_winSize$$.$document_$.documentElement, $scrollEl_scrollY$$ = !$goog$userAgent$WEBKIT$$ && "CSS1Compat" == $dom_el$$inline_671_win$$inline_667_winSize$$.$document_$.compatMode ? 
  $dom_el$$inline_671_win$$inline_667_winSize$$.$document_$.documentElement : $dom_el$$inline_671_win$$inline_667_winSize$$.$document_$.body;$el$$6_element$$49_scrollHeight$$inline_670$$ = $goog$style$getOffsetParent$$($el$$6_element$$49_scrollHeight$$inline_670$$);) {
    if((!$goog$userAgent$IE$$ || 0 != $el$$6_element$$49_scrollHeight$$inline_670$$.clientWidth) && (!$goog$userAgent$WEBKIT$$ || 0 != $el$$6_element$$49_scrollHeight$$inline_670$$.clientHeight || $el$$6_element$$49_scrollHeight$$inline_670$$ != $body$$2_scrollX$$) && $el$$6_element$$49_scrollHeight$$inline_670$$ != $body$$2_scrollX$$ && $el$$6_element$$49_scrollHeight$$inline_670$$ != $doc$$inline_668_documentElement_innerHeight$$inline_669$$ && "visible" != $goog$style$getStyle_$$($el$$6_element$$49_scrollHeight$$inline_670$$, 
    "overflow")) {
      var $pos$$2$$ = $goog$style$getPageOffset$$($el$$6_element$$49_scrollHeight$$inline_670$$), $client_el$$inline_196$$;
      $client_el$$inline_196$$ = $el$$6_element$$49_scrollHeight$$inline_670$$;
      if($goog$userAgent$GECKO$$ && !$goog$userAgent$isVersion$$("1.9")) {
        var $left$$inline_197$$ = parseFloat($goog$style$getComputedStyle$$($client_el$$inline_196$$, "borderLeftWidth"));
        if($goog$style$isRightToLeft$$($client_el$$inline_196$$)) {
          var $scrollbarWidth$$inline_198$$ = $client_el$$inline_196$$.offsetWidth - $client_el$$inline_196$$.clientWidth - $left$$inline_197$$ - parseFloat($goog$style$getComputedStyle$$($client_el$$inline_196$$, "borderRightWidth")), $left$$inline_197$$ = $left$$inline_197$$ + $scrollbarWidth$$inline_198$$
        }
        $client_el$$inline_196$$ = new $goog$math$Coordinate$$($left$$inline_197$$, parseFloat($goog$style$getComputedStyle$$($client_el$$inline_196$$, "borderTopWidth")))
      }else {
        $client_el$$inline_196$$ = new $goog$math$Coordinate$$($client_el$$inline_196$$.clientLeft, $client_el$$inline_196$$.clientTop)
      }
      $pos$$2$$.x += $client_el$$inline_196$$.x;
      $pos$$2$$.y += $client_el$$inline_196$$.y;
      $visibleRect$$.top = Math.max($visibleRect$$.top, $pos$$2$$.y);
      $visibleRect$$.right = Math.min($visibleRect$$.right, $pos$$2$$.x + $el$$6_element$$49_scrollHeight$$inline_670$$.clientWidth);
      $visibleRect$$.bottom = Math.min($visibleRect$$.bottom, $pos$$2$$.y + $el$$6_element$$49_scrollHeight$$inline_670$$.clientHeight);
      $visibleRect$$.left = Math.max($visibleRect$$.left, $pos$$2$$.x)
    }
  }
  $body$$2_scrollX$$ = $scrollEl_scrollY$$.scrollLeft;
  $scrollEl_scrollY$$ = $scrollEl_scrollY$$.scrollTop;
  $visibleRect$$.left = Math.max($visibleRect$$.left, $body$$2_scrollX$$);
  $visibleRect$$.top = Math.max($visibleRect$$.top, $scrollEl_scrollY$$);
  $dom_el$$inline_671_win$$inline_667_winSize$$ = $dom_el$$inline_671_win$$inline_667_winSize$$.$document_$.parentWindow || $dom_el$$inline_671_win$$inline_667_winSize$$.$document_$.defaultView || window;
  $doc$$inline_668_documentElement_innerHeight$$inline_669$$ = $dom_el$$inline_671_win$$inline_667_winSize$$.document;
  $goog$userAgent$WEBKIT$$ && !$goog$userAgent$isVersion$$("500") && !$goog$userAgent$MOBILE$$ ? ("undefined" == typeof $dom_el$$inline_671_win$$inline_667_winSize$$.innerHeight && ($dom_el$$inline_671_win$$inline_667_winSize$$ = window), $doc$$inline_668_documentElement_innerHeight$$inline_669$$ = $dom_el$$inline_671_win$$inline_667_winSize$$.innerHeight, $el$$6_element$$49_scrollHeight$$inline_670$$ = $dom_el$$inline_671_win$$inline_667_winSize$$.document.documentElement.scrollHeight, $dom_el$$inline_671_win$$inline_667_winSize$$ == 
  $dom_el$$inline_671_win$$inline_667_winSize$$.top && $el$$6_element$$49_scrollHeight$$inline_670$$ < $doc$$inline_668_documentElement_innerHeight$$inline_669$$ && ($doc$$inline_668_documentElement_innerHeight$$inline_669$$ -= 15), $dom_el$$inline_671_win$$inline_667_winSize$$ = new $goog$math$Size$$($dom_el$$inline_671_win$$inline_667_winSize$$.innerWidth, $doc$$inline_668_documentElement_innerHeight$$inline_669$$)) : ($dom_el$$inline_671_win$$inline_667_winSize$$ = "CSS1Compat" == $doc$$inline_668_documentElement_innerHeight$$inline_669$$.compatMode ? 
  $doc$$inline_668_documentElement_innerHeight$$inline_669$$.documentElement : $doc$$inline_668_documentElement_innerHeight$$inline_669$$.body, $dom_el$$inline_671_win$$inline_667_winSize$$ = new $goog$math$Size$$($dom_el$$inline_671_win$$inline_667_winSize$$.clientWidth, $dom_el$$inline_671_win$$inline_667_winSize$$.clientHeight));
  $visibleRect$$.right = Math.min($visibleRect$$.right, $body$$2_scrollX$$ + $dom_el$$inline_671_win$$inline_667_winSize$$.width);
  $visibleRect$$.bottom = Math.min($visibleRect$$.bottom, $scrollEl_scrollY$$ + $dom_el$$inline_671_win$$inline_667_winSize$$.height);
  return 0 <= $visibleRect$$.top && 0 <= $visibleRect$$.left && $visibleRect$$.bottom > $visibleRect$$.top && $visibleRect$$.right > $visibleRect$$.left ? $visibleRect$$ : $JSCompiler_alias_NULL$$
}
function $goog$style$getPageOffset$$($el$$8_scrollCoord_vpBox$$) {
  var $box$$5_parent$$21$$, $doc$$27$$ = $goog$dom$getOwnerDocument$$($el$$8_scrollCoord_vpBox$$), $positionStyle$$1$$ = $goog$style$getStyle_$$($el$$8_scrollCoord_vpBox$$, "position"), $BUGGY_GECKO_BOX_OBJECT$$ = $goog$userAgent$GECKO$$ && $doc$$27$$.getBoxObjectFor && !$el$$8_scrollCoord_vpBox$$.getBoundingClientRect && "absolute" == $positionStyle$$1$$ && ($box$$5_parent$$21$$ = $doc$$27$$.getBoxObjectFor($el$$8_scrollCoord_vpBox$$)) && (0 > $box$$5_parent$$21$$.screenX || 0 > $box$$5_parent$$21$$.screenY), 
  $pos$$3$$ = new $goog$math$Coordinate$$(0, 0), $viewportElement$$ = $goog$style$getClientViewportElement$$($doc$$27$$);
  if($el$$8_scrollCoord_vpBox$$ == $viewportElement$$) {
    return $pos$$3$$
  }
  if($el$$8_scrollCoord_vpBox$$.getBoundingClientRect) {
    $box$$5_parent$$21$$ = $goog$style$getBoundingClientRect_$$($el$$8_scrollCoord_vpBox$$), $el$$8_scrollCoord_vpBox$$ = $JSCompiler_StaticMethods_getDocumentScroll$$($goog$dom$getDomHelper$$($doc$$27$$)), $pos$$3$$.x = $box$$5_parent$$21$$.left + $el$$8_scrollCoord_vpBox$$.x, $pos$$3$$.y = $box$$5_parent$$21$$.top + $el$$8_scrollCoord_vpBox$$.y
  }else {
    if($doc$$27$$.getBoxObjectFor && !$BUGGY_GECKO_BOX_OBJECT$$) {
      $box$$5_parent$$21$$ = $doc$$27$$.getBoxObjectFor($el$$8_scrollCoord_vpBox$$), $el$$8_scrollCoord_vpBox$$ = $doc$$27$$.getBoxObjectFor($viewportElement$$), $pos$$3$$.x = $box$$5_parent$$21$$.screenX - $el$$8_scrollCoord_vpBox$$.screenX, $pos$$3$$.y = $box$$5_parent$$21$$.screenY - $el$$8_scrollCoord_vpBox$$.screenY
    }else {
      $box$$5_parent$$21$$ = $el$$8_scrollCoord_vpBox$$;
      do {
        $pos$$3$$.x += $box$$5_parent$$21$$.offsetLeft;
        $pos$$3$$.y += $box$$5_parent$$21$$.offsetTop;
        $box$$5_parent$$21$$ != $el$$8_scrollCoord_vpBox$$ && ($pos$$3$$.x += $box$$5_parent$$21$$.clientLeft || 0, $pos$$3$$.y += $box$$5_parent$$21$$.clientTop || 0);
        if($goog$userAgent$WEBKIT$$ && "fixed" == $goog$style$getStyle_$$($box$$5_parent$$21$$, "position")) {
          $pos$$3$$.x += $doc$$27$$.body.scrollLeft;
          $pos$$3$$.y += $doc$$27$$.body.scrollTop;
          break
        }
        $box$$5_parent$$21$$ = $box$$5_parent$$21$$.offsetParent
      }while($box$$5_parent$$21$$ && $box$$5_parent$$21$$ != $el$$8_scrollCoord_vpBox$$);
      if($goog$userAgent$OPERA$$ || $goog$userAgent$WEBKIT$$ && "absolute" == $positionStyle$$1$$) {
        $pos$$3$$.y -= $doc$$27$$.body.offsetTop
      }
      for($box$$5_parent$$21$$ = $el$$8_scrollCoord_vpBox$$;($box$$5_parent$$21$$ = $goog$style$getOffsetParent$$($box$$5_parent$$21$$)) && $box$$5_parent$$21$$ != $doc$$27$$.body && $box$$5_parent$$21$$ != $viewportElement$$;) {
        if($pos$$3$$.x -= $box$$5_parent$$21$$.scrollLeft, !$goog$userAgent$OPERA$$ || "TR" != $box$$5_parent$$21$$.tagName) {
          $pos$$3$$.y -= $box$$5_parent$$21$$.scrollTop
        }
      }
    }
  }
  return $pos$$3$$
}
function $goog$style$getPixelStyleValue_$$($value$$79$$, $round$$) {
  "number" == typeof $value$$79$$ && ($value$$79$$ = ($round$$ ? Math.round($value$$79$$) : $value$$79$$) + "px");
  return $value$$79$$
}
function $goog$style$getSize$$($element$$54_size$$10$$) {
  if("none" != $goog$style$getStyle_$$($element$$54_size$$10$$, "display")) {
    return $goog$style$getSizeWithDisplay_$$($element$$54_size$$10$$)
  }
  var $style$$4$$ = $element$$54_size$$10$$.style, $originalDisplay$$ = $style$$4$$.display, $originalVisibility$$ = $style$$4$$.visibility, $originalPosition$$ = $style$$4$$.position;
  $style$$4$$.visibility = "hidden";
  $style$$4$$.position = "absolute";
  $style$$4$$.display = "inline";
  $element$$54_size$$10$$ = $goog$style$getSizeWithDisplay_$$($element$$54_size$$10$$);
  $style$$4$$.display = $originalDisplay$$;
  $style$$4$$.position = $originalPosition$$;
  $style$$4$$.visibility = $originalVisibility$$;
  return $element$$54_size$$10$$
}
function $goog$style$getSizeWithDisplay_$$($clientRect_element$$55$$) {
  var $offsetWidth$$ = $clientRect_element$$55$$.offsetWidth, $offsetHeight$$ = $clientRect_element$$55$$.offsetHeight, $webkitOffsetsZero$$ = $goog$userAgent$WEBKIT$$ && !$offsetWidth$$ && !$offsetHeight$$;
  return(!$goog$isDef$$($offsetWidth$$) || $webkitOffsetsZero$$) && $clientRect_element$$55$$.getBoundingClientRect ? ($clientRect_element$$55$$ = $goog$style$getBoundingClientRect_$$($clientRect_element$$55$$), new $goog$math$Size$$($clientRect_element$$55$$.right - $clientRect_element$$55$$.left, $clientRect_element$$55$$.bottom - $clientRect_element$$55$$.top)) : new $goog$math$Size$$($offsetWidth$$, $offsetHeight$$)
}
function $goog$style$showElement$$($el$$18$$, $display$$) {
  $el$$18$$.style.display = $display$$ ? "" : "none"
}
function $goog$style$isRightToLeft$$($el$$22$$) {
  return"rtl" == $goog$style$getStyle_$$($el$$22$$, "direction")
}
function $goog$style$getIePixelValue_$$($element$$63$$, $value$$81$$) {
  if(/^\d+px?$/.test($value$$81$$)) {
    return parseInt($value$$81$$, 10)
  }
  var $oldStyleValue$$ = $element$$63$$.style.left, $oldRuntimeValue$$ = $element$$63$$.runtimeStyle.left;
  $element$$63$$.runtimeStyle.left = $element$$63$$.currentStyle.left;
  $element$$63$$.style.left = $value$$81$$;
  var $pixelValue$$ = $element$$63$$.style.pixelLeft;
  $element$$63$$.style.left = $oldStyleValue$$;
  $element$$63$$.runtimeStyle.left = $oldRuntimeValue$$;
  return $pixelValue$$
}
var $goog$style$ieBorderWidthKeywords_$$ = {thin:2, medium:4, thick:6};
function $goog$style$getIePixelBorder_$$($element$$68$$, $prop$$5$$) {
  if("none" == $goog$style$getCascadedStyle$$($element$$68$$, $prop$$5$$ + "Style")) {
    return 0
  }
  var $width$$14$$ = $goog$style$getCascadedStyle$$($element$$68$$, $prop$$5$$ + "Width");
  return $width$$14$$ in $goog$style$ieBorderWidthKeywords_$$ ? $goog$style$ieBorderWidthKeywords_$$[$width$$14$$] : $goog$style$getIePixelValue_$$($element$$68$$, $width$$14$$)
}
;function $goog$positioning$positionAtAnchor$$($anchorElement_corner$$, $absolutePos_anchorElementCorner$$, $movableElement$$, $movableElementCorner$$, $opt_offset$$9$$, $opt_margin$$, $opt_overflow$$, $opt_preferredSize$$) {
  var $moveableParentTopLeft$$, $o$$inline_581_parent$$22_rect$$inline_201$$ = $movableElement$$.offsetParent;
  if($o$$inline_581_parent$$22_rect$$inline_201$$) {
    var $isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$ = "HTML" == $o$$inline_581_parent$$22_rect$$inline_201$$.tagName || "BODY" == $o$$inline_581_parent$$22_rect$$inline_201$$.tagName;
    if(!$isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$ || "static" != $goog$style$getStyle_$$($o$$inline_581_parent$$22_rect$$inline_201$$, "position")) {
      $moveableParentTopLeft$$ = $goog$style$getPageOffset$$($o$$inline_581_parent$$22_rect$$inline_201$$), $isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$ || ($moveableParentTopLeft$$ = $goog$math$Coordinate$difference$$($moveableParentTopLeft$$, new $goog$math$Coordinate$$($o$$inline_581_parent$$22_rect$$inline_201$$.scrollLeft, $o$$inline_581_parent$$22_rect$$inline_201$$.scrollTop)))
    }
  }
  $o$$inline_581_parent$$22_rect$$inline_201$$ = $goog$style$getPageOffset$$($anchorElement_corner$$);
  $isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$ = $goog$style$getSize$$($anchorElement_corner$$);
  $o$$inline_581_parent$$22_rect$$inline_201$$ = new $goog$math$Rect$$($o$$inline_581_parent$$22_rect$$inline_201$$.x, $o$$inline_581_parent$$22_rect$$inline_201$$.y, $isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$.width, $isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$.height);
  ($isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$ = $goog$style$getVisibleRectForElement$$($anchorElement_corner$$)) && $o$$inline_581_parent$$22_rect$$inline_201$$.$intersection$(new $goog$math$Rect$$($isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$.left, $isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$.top, $isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$.right - $isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$.left, 
  $isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$.bottom - $isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$.top));
  var $isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$ = $goog$dom$getDomHelper$$($anchorElement_corner$$), $newBase$$inline_206_relativeWin$$inline_585$$ = $goog$dom$getDomHelper$$($movableElement$$);
  if($isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$.$document_$ != $newBase$$inline_206_relativeWin$$inline_585$$.$document_$) {
    var $body$$inline_207_pos$$inline_208$$ = $isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$.$document_$.body, $newBase$$inline_206_relativeWin$$inline_585$$ = $newBase$$inline_206_relativeWin$$inline_585$$.$document_$.parentWindow || $newBase$$inline_206_relativeWin$$inline_585$$.$document_$.defaultView, $position$$inline_586$$ = new $goog$math$Coordinate$$(0, 0), $currentWin$$inline_587$$ = $goog$dom$getOwnerDocument$$($body$$inline_207_pos$$inline_208$$) ? $goog$dom$getOwnerDocument$$($body$$inline_207_pos$$inline_208$$).parentWindow || 
    $goog$dom$getOwnerDocument$$($body$$inline_207_pos$$inline_208$$).defaultView : window, $currentEl$$inline_588$$ = $body$$inline_207_pos$$inline_208$$;
    do {
      var $JSCompiler_temp$$666_offset$$inline_589_pos$$inline_674$$;
      if($currentWin$$inline_587$$ == $newBase$$inline_206_relativeWin$$inline_585$$) {
        $JSCompiler_temp$$666_offset$$inline_589_pos$$inline_674$$ = $goog$style$getPageOffset$$($currentEl$$inline_588$$)
      }else {
        var $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$ = $currentEl$$inline_588$$;
        $JSCompiler_temp$$666_offset$$inline_589_pos$$inline_674$$ = new $goog$math$Coordinate$$;
        if(1 == $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$.nodeType) {
          if($box$$inline_675_el$$inline_673_pageCoord$$inline_677$$.getBoundingClientRect) {
            $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$ = $goog$style$getBoundingClientRect_$$($box$$inline_675_el$$inline_673_pageCoord$$inline_677$$), $JSCompiler_temp$$666_offset$$inline_589_pos$$inline_674$$.x = $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$.left, $JSCompiler_temp$$666_offset$$inline_589_pos$$inline_674$$.y = $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$.top
          }else {
            var $isAbstractedEvent$$inline_678_scrollCoord$$inline_676$$ = $JSCompiler_StaticMethods_getDocumentScroll$$($goog$dom$getDomHelper$$($box$$inline_675_el$$inline_673_pageCoord$$inline_677$$)), $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$ = $goog$style$getPageOffset$$($box$$inline_675_el$$inline_673_pageCoord$$inline_677$$);
            $JSCompiler_temp$$666_offset$$inline_589_pos$$inline_674$$.x = $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$.x - $isAbstractedEvent$$inline_678_scrollCoord$$inline_676$$.x;
            $JSCompiler_temp$$666_offset$$inline_589_pos$$inline_674$$.y = $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$.y - $isAbstractedEvent$$inline_678_scrollCoord$$inline_676$$.y
          }
        }else {
          var $isAbstractedEvent$$inline_678_scrollCoord$$inline_676$$ = $goog$isFunction$$($box$$inline_675_el$$inline_673_pageCoord$$inline_677$$.$getBrowserEvent$), $targetEvent$$inline_679$$ = $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$;
          $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$.targetTouches ? $targetEvent$$inline_679$$ = $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$.targetTouches[0] : $isAbstractedEvent$$inline_678_scrollCoord$$inline_676$$ && $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$.$event_$.targetTouches && ($targetEvent$$inline_679$$ = $box$$inline_675_el$$inline_673_pageCoord$$inline_677$$.$event_$.targetTouches[0]);
          $JSCompiler_temp$$666_offset$$inline_589_pos$$inline_674$$.x = $targetEvent$$inline_679$$.clientX;
          $JSCompiler_temp$$666_offset$$inline_589_pos$$inline_674$$.y = $targetEvent$$inline_679$$.clientY
        }
      }
      $position$$inline_586$$.x += $JSCompiler_temp$$666_offset$$inline_589_pos$$inline_674$$.x;
      $position$$inline_586$$.y += $JSCompiler_temp$$666_offset$$inline_589_pos$$inline_674$$.y
    }while($currentWin$$inline_587$$ && $currentWin$$inline_587$$ != $newBase$$inline_206_relativeWin$$inline_585$$ && ($currentEl$$inline_588$$ = $currentWin$$inline_587$$.frameElement) && ($currentWin$$inline_587$$ = $currentWin$$inline_587$$.parent));
    $body$$inline_207_pos$$inline_208$$ = $goog$math$Coordinate$difference$$($position$$inline_586$$, $goog$style$getPageOffset$$($body$$inline_207_pos$$inline_208$$));
    $goog$userAgent$IE$$ && !$JSCompiler_StaticMethods_isCss1CompatMode$$($isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$) && ($body$$inline_207_pos$$inline_208$$ = $goog$math$Coordinate$difference$$($body$$inline_207_pos$$inline_208$$, $JSCompiler_StaticMethods_getDocumentScroll$$($isBody_origBase$$inline_205_s$$inline_582_visibleBox$$inline_202$$)));
    $o$$inline_581_parent$$22_rect$$inline_201$$.left += $body$$inline_207_pos$$inline_208$$.x;
    $o$$inline_581_parent$$22_rect$$inline_201$$.top += $body$$inline_207_pos$$inline_208$$.y
  }
  $anchorElement_corner$$ = ($absolutePos_anchorElementCorner$$ & 4 && $goog$style$isRightToLeft$$($anchorElement_corner$$) ? $absolutePos_anchorElementCorner$$ ^ 2 : $absolutePos_anchorElementCorner$$) & -5;
  $absolutePos_anchorElementCorner$$ = new $goog$math$Coordinate$$($anchorElement_corner$$ & 2 ? $o$$inline_581_parent$$22_rect$$inline_201$$.left + $o$$inline_581_parent$$22_rect$$inline_201$$.width : $o$$inline_581_parent$$22_rect$$inline_201$$.left, $anchorElement_corner$$ & 1 ? $o$$inline_581_parent$$22_rect$$inline_201$$.top + $o$$inline_581_parent$$22_rect$$inline_201$$.height : $o$$inline_581_parent$$22_rect$$inline_201$$.top);
  $moveableParentTopLeft$$ && ($absolutePos_anchorElementCorner$$ = $goog$math$Coordinate$difference$$($absolutePos_anchorElementCorner$$, $moveableParentTopLeft$$));
  $opt_offset$$9$$ && ($absolutePos_anchorElementCorner$$.x += ($anchorElement_corner$$ & 2 ? -1 : 1) * $opt_offset$$9$$.x, $absolutePos_anchorElementCorner$$.y += ($anchorElement_corner$$ & 1 ? -1 : 1) * $opt_offset$$9$$.y);
  var $viewport$$;
  if($opt_overflow$$ && ($viewport$$ = $goog$style$getVisibleRectForElement$$($movableElement$$)) && $moveableParentTopLeft$$) {
    $viewport$$.top -= $moveableParentTopLeft$$.y, $viewport$$.right -= $moveableParentTopLeft$$.x, $viewport$$.bottom -= $moveableParentTopLeft$$.y, $viewport$$.left -= $moveableParentTopLeft$$.x
  }
  return $goog$positioning$positionAtCoordinate$$($absolutePos_anchorElementCorner$$, $movableElement$$, $movableElementCorner$$, $opt_margin$$, $viewport$$, $opt_overflow$$, $opt_preferredSize$$)
}
function $goog$positioning$positionAtCoordinate$$($absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$, $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, $elementSize_movableElementCorner$$1_style$$inline_225$$, $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$, $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$, $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$, 
$opt_preferredSize$$1_size$$14$$) {
  var $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$ = $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$.$clone$(), $JSCompiler_temp$$28_pos$$inline_210_status$$ = 0, $corner$$1$$ = ($elementSize_movableElementCorner$$1_style$$inline_225$$ & 4 && $goog$style$isRightToLeft$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$) ? $elementSize_movableElementCorner$$1_style$$inline_225$$ ^ 
  2 : $elementSize_movableElementCorner$$1_style$$inline_225$$) & -5, $elementSize_movableElementCorner$$1_style$$inline_225$$ = $goog$style$getSize$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$), $opt_preferredSize$$1_size$$14$$ = $opt_preferredSize$$1_size$$14$$ ? $opt_preferredSize$$1_size$$14$$.$clone$() : $elementSize_movableElementCorner$$1_style$$inline_225$$.$clone$();
  if($bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ || 0 != $corner$$1$$) {
    $corner$$1$$ & 2 ? $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$.x -= $opt_preferredSize$$1_size$$14$$.width + ($bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ ? $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$.right : 0) : $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ && ($absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$.x += 
    $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$.left), $corner$$1$$ & 1 ? $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$.y -= $opt_preferredSize$$1_size$$14$$.height + ($bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ ? $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$.bottom : 0) : $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ && ($absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$.y += 
    $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$.top)
  }
  if($arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$) {
    if($buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$) {
      $JSCompiler_temp$$28_pos$$inline_210_status$$ = $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$;
      $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ = 0;
      if(65 == ($arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ & 65) && ($JSCompiler_temp$$28_pos$$inline_210_status$$.x < $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.left || $JSCompiler_temp$$28_pos$$inline_210_status$$.x >= $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.right)) {
        $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ &= -2
      }
      if(132 == ($arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ & 132) && ($JSCompiler_temp$$28_pos$$inline_210_status$$.y < $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.top || $JSCompiler_temp$$28_pos$$inline_210_status$$.y >= $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.bottom)) {
        $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ &= -5
      }
      $JSCompiler_temp$$28_pos$$inline_210_status$$.x < $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.left && $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ & 1 && ($JSCompiler_temp$$28_pos$$inline_210_status$$.x = $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.left, $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ |= 1);
      $JSCompiler_temp$$28_pos$$inline_210_status$$.x < $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.left && $JSCompiler_temp$$28_pos$$inline_210_status$$.x + $opt_preferredSize$$1_size$$14$$.width > $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.right && $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ & 16 && ($opt_preferredSize$$1_size$$14$$.width = Math.max($opt_preferredSize$$1_size$$14$$.width - 
      ($JSCompiler_temp$$28_pos$$inline_210_status$$.x + $opt_preferredSize$$1_size$$14$$.width - $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.right), 0), $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ |= 4);
      $JSCompiler_temp$$28_pos$$inline_210_status$$.x + $opt_preferredSize$$1_size$$14$$.width > $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.right && $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ & 1 && ($JSCompiler_temp$$28_pos$$inline_210_status$$.x = Math.max($buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.right - $opt_preferredSize$$1_size$$14$$.width, $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.left), 
      $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ |= 1);
      $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ & 2 && ($bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ |= ($JSCompiler_temp$$28_pos$$inline_210_status$$.x < $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.left ? 16 : 0) | ($JSCompiler_temp$$28_pos$$inline_210_status$$.x + $opt_preferredSize$$1_size$$14$$.width > $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.right ? 
      32 : 0));
      $JSCompiler_temp$$28_pos$$inline_210_status$$.y < $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.top && $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ & 4 && ($JSCompiler_temp$$28_pos$$inline_210_status$$.y = $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.top, $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ |= 2);
      $JSCompiler_temp$$28_pos$$inline_210_status$$.y >= $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.top && $JSCompiler_temp$$28_pos$$inline_210_status$$.y + $opt_preferredSize$$1_size$$14$$.height > $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.bottom && $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ & 32 && ($opt_preferredSize$$1_size$$14$$.height = Math.max($opt_preferredSize$$1_size$$14$$.height - 
      ($JSCompiler_temp$$28_pos$$inline_210_status$$.y + $opt_preferredSize$$1_size$$14$$.height - $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.bottom), 0), $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ |= 8);
      $JSCompiler_temp$$28_pos$$inline_210_status$$.y + $opt_preferredSize$$1_size$$14$$.height > $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.bottom && $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ & 4 && ($JSCompiler_temp$$28_pos$$inline_210_status$$.y = Math.max($buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.bottom - $opt_preferredSize$$1_size$$14$$.height, $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.top), 
      $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ |= 2);
      $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ & 8 && ($bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ |= ($JSCompiler_temp$$28_pos$$inline_210_status$$.y < $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.top ? 64 : 0) | ($JSCompiler_temp$$28_pos$$inline_210_status$$.y + $opt_preferredSize$$1_size$$14$$.height > $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$.bottom ? 
      128 : 0));
      $JSCompiler_temp$$28_pos$$inline_210_status$$ = $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$
    }else {
      $JSCompiler_temp$$28_pos$$inline_210_status$$ = 256
    }
    if($JSCompiler_temp$$28_pos$$inline_210_status$$ & 496) {
      return $JSCompiler_temp$$28_pos$$inline_210_status$$
    }
  }
  $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ = $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$;
  $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$ = $goog$userAgent$GECKO$$ && ($goog$userAgent$detectedMac_$$ || $goog$userAgent$X11$$) && $goog$userAgent$isVersion$$("1.9");
  $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ instanceof $goog$math$Coordinate$$ ? ($absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$ = $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$.x, $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ = $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$.y) : 
  ($absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$ = $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$, $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ = $JSCompiler_alias_VOID$$);
  $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.style.left = $goog$style$getPixelStyleValue_$$($absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$, $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$);
  $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.style.top = $goog$style$getPixelStyleValue_$$($arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$, $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$);
  $goog$math$Size$equals$$($elementSize_movableElementCorner$$1_style$$inline_225$$, $opt_preferredSize$$1_size$$14$$) || ($absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$ = $JSCompiler_StaticMethods_isCss1CompatMode$$($goog$dom$getDomHelper$$($goog$dom$getOwnerDocument$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$))), $goog$userAgent$IE$$ && (!$absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$ || 
  !$goog$userAgent$isVersion$$("8")) ? ($elementSize_movableElementCorner$$1_style$$inline_225$$ = $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.style, $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$ ? ($goog$userAgent$IE$$ ? ($absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$ = $goog$style$getIePixelValue_$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, 
  $goog$style$getCascadedStyle$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "paddingLeft")), $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$ = $goog$style$getIePixelValue_$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, $goog$style$getCascadedStyle$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "paddingRight")), $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ = 
  $goog$style$getIePixelValue_$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, $goog$style$getCascadedStyle$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "paddingTop")), $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ = $goog$style$getIePixelValue_$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, $goog$style$getCascadedStyle$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, 
  "paddingBottom")), $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$ = new $goog$math$Box$$($arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$, $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$, $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$, $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$)) : 
  ($absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$ = $goog$style$getComputedStyle$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "paddingLeft"), $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$ = $goog$style$getComputedStyle$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "paddingRight"), $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ = 
  $goog$style$getComputedStyle$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "paddingTop"), $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ = $goog$style$getComputedStyle$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "paddingBottom"), $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$ = new $goog$math$Box$$(parseFloat($arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$), 
  parseFloat($buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$), parseFloat($bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$), parseFloat($absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$))), $goog$userAgent$IE$$ ? ($buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$ = $goog$style$getIePixelBorder_$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, 
  "borderLeft"), $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ = $goog$style$getIePixelBorder_$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "borderRight"), $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ = $goog$style$getIePixelBorder_$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "borderTop"), $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$ = 
  $goog$style$getIePixelBorder_$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "borderBottom"), $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$ = new $goog$math$Box$$($bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$, $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$, $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, $buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$)) : 
  ($buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$ = $goog$style$getComputedStyle$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "borderLeftWidth"), $arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$ = $goog$style$getComputedStyle$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "borderRightWidth"), $bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$ = 
  $goog$style$getComputedStyle$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "borderTopWidth"), $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$ = $goog$style$getComputedStyle$$($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$, "borderBottomWidth"), $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$ = new $goog$math$Box$$(parseFloat($bottom$$inline_685_opt_margin$$1_status$$inline_214_top$$inline_594$$), 
  parseFloat($arg1$$inline_217_opt_overflow$$1_overflow$$inline_213_right$$inline_593_top$$inline_684_y$$inline_219$$), parseFloat($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$), parseFloat($buggyGeckoSubPixelPos$$inline_220_left$$inline_592_opt_viewport_right$$inline_683$$))), $elementSize_movableElementCorner$$1_style$$inline_225$$.pixelWidth = $opt_preferredSize$$1_size$$14$$.width - $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.left - 
  $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$.left - $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$.right - $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.right, $elementSize_movableElementCorner$$1_style$$inline_225$$.pixelHeight = $opt_preferredSize$$1_size$$14$$.height - $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.top - 
  $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$.top - $absolutePos$$1_isCss1CompatMode$$inline_224_left$$inline_682_paddingBox$$inline_226_x$$inline_218$$.bottom - $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.bottom) : ($elementSize_movableElementCorner$$1_style$$inline_225$$.pixelWidth = $opt_preferredSize$$1_size$$14$$.width, $elementSize_movableElementCorner$$1_style$$inline_225$$.pixelHeight = $opt_preferredSize$$1_size$$14$$.height)) : 
  ($borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$ = $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.style, $goog$userAgent$GECKO$$ ? $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.MozBoxSizing = "border-box" : $goog$userAgent$WEBKIT$$ ? $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.WebkitBoxSizing = "border-box" : $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.boxSizing = 
  "border-box", $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.width = Math.max($opt_preferredSize$$1_size$$14$$.width, 0) + "px", $borderBox$$inline_227_bottom$$inline_595_movableElement$$1_style$$inline_599$$.height = Math.max($opt_preferredSize$$1_size$$14$$.height, 0) + "px"));
  return $JSCompiler_temp$$28_pos$$inline_210_status$$
}
;var $goog$Timer$defaultTimerObject$$ = $goog$global$$.window;
function $goog$Timer$callOnce$$($listener$$42$$, $opt_delay$$, $opt_handler$$7$$) {
  $goog$isFunction$$($listener$$42$$) ? $opt_handler$$7$$ && ($listener$$42$$ = $goog$bind$$($listener$$42$$, $opt_handler$$7$$)) : $listener$$42$$ && "function" == typeof $listener$$42$$.handleEvent ? $listener$$42$$ = $goog$bind$$($listener$$42$$.handleEvent, $listener$$42$$) : $JSCompiler_alias_THROW$$(Error("Invalid listener argument"));
  return 2147483647 < $opt_delay$$ ? -1 : $goog$Timer$defaultTimerObject$$.setTimeout($listener$$42$$, $opt_delay$$ || 0)
}
;function $goog$positioning$AbstractPosition$$() {
}
$goog$positioning$AbstractPosition$$.prototype.$reposition$ = $JSCompiler_emptyFn$$();
function $goog$positioning$AnchoredPosition$$($anchorElement$$1$$, $corner$$7$$) {
  this.element = $anchorElement$$1$$;
  this.$corner$ = $corner$$7$$
}
$goog$inherits$$($goog$positioning$AnchoredPosition$$, $goog$positioning$AbstractPosition$$);
$goog$positioning$AnchoredPosition$$.prototype.$reposition$ = function $$goog$positioning$AnchoredPosition$$$$$reposition$$($movableElement$$3$$, $movableCorner$$, $opt_margin$$3$$) {
  $goog$positioning$positionAtAnchor$$(this.element, this.$corner$, $movableElement$$3$$, $movableCorner$$, $JSCompiler_alias_VOID$$, $opt_margin$$3$$)
};
function $goog$events$EventHandler$$($opt_handler$$8$$) {
  this.$handler_$ = $opt_handler$$8$$;
  this.$keys_$ = []
}
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$typeArray_$$ = [];
function $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$self$$, $src$$16$$, $type$$78$$, $opt_fn$$2$$, $opt_capture$$3$$) {
  $goog$isArray$$($type$$78$$) || ($goog$events$EventHandler$typeArray_$$[0] = $type$$78$$, $type$$78$$ = $goog$events$EventHandler$typeArray_$$);
  for(var $i$$142$$ = 0;$i$$142$$ < $type$$78$$.length;$i$$142$$++) {
    $JSCompiler_StaticMethods_listen$self$$.$keys_$.push($goog$events$listen$$($src$$16$$, $type$$78$$[$i$$142$$], $opt_fn$$2$$ || $JSCompiler_StaticMethods_listen$self$$, $opt_capture$$3$$ || $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_listen$self$$.$handler_$ || $JSCompiler_StaticMethods_listen$self$$))
  }
}
$goog$events$EventHandler$$.prototype.$removeAll$ = function $$goog$events$EventHandler$$$$$removeAll$$() {
  $goog$array$forEach$$(this.$keys_$, $goog$events$unlistenByKey$$);
  this.$keys_$.length = 0
};
$goog$events$EventHandler$$.prototype.$disposeInternal$ = function $$goog$events$EventHandler$$$$$disposeInternal$$() {
  $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.$removeAll$()
};
$goog$events$EventHandler$$.prototype.handleEvent = function $$goog$events$EventHandler$$$$handleEvent$() {
  $JSCompiler_alias_THROW$$(Error("EventHandler.handleEvent not implemented"))
};
function $goog$ui$PopupBase$$($opt_element$$1$$, $opt_type$$9$$) {
  this.$handler_$ = new $goog$events$EventHandler$$(this);
  this.$setElement$($opt_element$$1$$ || $JSCompiler_alias_NULL$$);
  $opt_type$$9$$ && this.$setType$($opt_type$$9$$)
}
$goog$inherits$$($goog$ui$PopupBase$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$PopupBase$$.prototype;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$autoHide_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$autoHideRegion_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$isVisible_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$shouldHideAsync_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$lastShowTime_$ = -1;
$JSCompiler_prototypeAlias$$.$hideOnEscape_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$enableCrossIframeDismissal_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$type_$ = "toggle_display";
$JSCompiler_prototypeAlias$$.$setType$ = $JSCompiler_set$$("$type_$");
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$setElement$ = function $$JSCompiler_prototypeAlias$$$$setElement$$($elt$$2$$) {
  this.$isVisible_$ && $JSCompiler_alias_THROW$$(Error("Can not change this state of the popup while showing."));
  this.$element_$ = $elt$$2$$
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($doc$$inline_233_visible$$1$$) {
  this.$showTransition_$ && this.$showTransition_$.stop();
  this.$hideTransition_$ && this.$hideTransition_$.stop();
  if($doc$$inline_233_visible$$1$$) {
    if(!this.$isVisible_$ && this.$onBeforeShow$()) {
      this.$element_$ || $JSCompiler_alias_THROW$$(Error("Caller must call setElement before trying to show the popup"));
      this.$reposition$();
      $doc$$inline_233_visible$$1$$ = $goog$dom$getOwnerDocument$$(this.$element_$);
      this.$hideOnEscape_$ && $JSCompiler_StaticMethods_listen$$(this.$handler_$, $doc$$inline_233_visible$$1$$, "keydown", this.$onDocumentKeyDown_$, $JSCompiler_alias_TRUE$$);
      if(this.$autoHide_$) {
        if($JSCompiler_StaticMethods_listen$$(this.$handler_$, $doc$$inline_233_visible$$1$$, "mousedown", this.$onDocumentMouseDown_$, $JSCompiler_alias_TRUE$$), $goog$userAgent$IE$$) {
          var $activeElement$$inline_234$$;
          try {
            $activeElement$$inline_234$$ = $doc$$inline_233_visible$$1$$.activeElement
          }catch($e$$inline_236$$) {
          }
          for(;$activeElement$$inline_234$$ && "IFRAME" == $activeElement$$inline_234$$.nodeName;) {
            try {
              var $tempDoc$$inline_235$$ = $activeElement$$inline_234$$.contentDocument || $activeElement$$inline_234$$.contentWindow.document
            }catch($e$$inline_237$$) {
              break
            }
            $doc$$inline_233_visible$$1$$ = $tempDoc$$inline_235$$;
            $activeElement$$inline_234$$ = $doc$$inline_233_visible$$1$$.activeElement
          }
          $JSCompiler_StaticMethods_listen$$(this.$handler_$, $doc$$inline_233_visible$$1$$, "mousedown", this.$onDocumentMouseDown_$, $JSCompiler_alias_TRUE$$);
          $JSCompiler_StaticMethods_listen$$(this.$handler_$, $doc$$inline_233_visible$$1$$, "deactivate", this.$onDocumentBlur_$)
        }else {
          $JSCompiler_StaticMethods_listen$$(this.$handler_$, $doc$$inline_233_visible$$1$$, "blur", this.$onDocumentBlur_$)
        }
      }
      "toggle_display" == this.$type_$ ? (this.$element_$.style.visibility = "visible", $goog$style$showElement$$(this.$element_$, $JSCompiler_alias_TRUE$$)) : "move_offscreen" == this.$type_$ && this.$reposition$();
      this.$isVisible_$ = $JSCompiler_alias_TRUE$$;
      this.$showTransition_$ ? ($goog$events$listenOnce$$(this.$showTransition_$, "end", this.$onShow_$, $JSCompiler_alias_FALSE$$, this), this.$showTransition_$.play()) : this.$onShow_$()
    }
  }else {
    $JSCompiler_StaticMethods_hide_$$(this)
  }
};
$JSCompiler_prototypeAlias$$.$reposition$ = $goog$nullFunction$$;
function $JSCompiler_StaticMethods_hide_$$($JSCompiler_StaticMethods_hide_$self$$, $opt_target$$3$$) {
  if(!$JSCompiler_StaticMethods_hide_$self$$.$isVisible_$ || !$JSCompiler_StaticMethods_hide_$self$$.dispatchEvent({type:"beforehide", target:$opt_target$$3$$})) {
    return $JSCompiler_alias_FALSE$$
  }
  $JSCompiler_StaticMethods_hide_$self$$.$handler_$ && $JSCompiler_StaticMethods_hide_$self$$.$handler_$.$removeAll$();
  $JSCompiler_StaticMethods_hide_$self$$.$hideTransition_$ ? ($goog$events$listenOnce$$($JSCompiler_StaticMethods_hide_$self$$.$hideTransition_$, "end", $goog$partial$$($JSCompiler_StaticMethods_hide_$self$$.$continueHidingPopup_$, $opt_target$$3$$), $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_hide_$self$$), $JSCompiler_StaticMethods_hide_$self$$.$hideTransition_$.play()) : $JSCompiler_StaticMethods_hide_$self$$.$continueHidingPopup_$($opt_target$$3$$);
  return $JSCompiler_alias_TRUE$$
}
$JSCompiler_prototypeAlias$$.$continueHidingPopup_$ = function $$JSCompiler_prototypeAlias$$$$continueHidingPopup_$$($opt_target$$4$$) {
  "toggle_display" == this.$type_$ ? this.$shouldHideAsync_$ ? $goog$Timer$callOnce$$(this.$hidePopupElement_$, 0, this) : this.$hidePopupElement_$() : "move_offscreen" == this.$type_$ && (this.$element_$.style.left = "-200px", this.$element_$.style.top = "-200px");
  this.$isVisible_$ = $JSCompiler_alias_FALSE$$;
  this.$onHide_$($opt_target$$4$$)
};
$JSCompiler_prototypeAlias$$.$hidePopupElement_$ = function $$JSCompiler_prototypeAlias$$$$hidePopupElement_$$() {
  this.$element_$.style.visibility = "hidden";
  $goog$style$showElement$$(this.$element_$, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$onBeforeShow$ = function $$JSCompiler_prototypeAlias$$$$onBeforeShow$$() {
  return this.dispatchEvent("beforeshow")
};
$JSCompiler_prototypeAlias$$.$onShow_$ = function $$JSCompiler_prototypeAlias$$$$onShow_$$() {
  this.$lastShowTime_$ = $goog$now$$();
  this.dispatchEvent("show")
};
$JSCompiler_prototypeAlias$$.$onHide_$ = function $$JSCompiler_prototypeAlias$$$$onHide_$$($opt_target$$6$$) {
  $goog$now$$();
  this.dispatchEvent({type:"hide", target:$opt_target$$6$$})
};
$JSCompiler_prototypeAlias$$.$onDocumentMouseDown_$ = function $$JSCompiler_prototypeAlias$$$$onDocumentMouseDown_$$($e$$34_target$$43$$) {
  $e$$34_target$$43$$ = $e$$34_target$$43$$.target;
  !$goog$dom$contains$$(this.$element_$, $e$$34_target$$43$$) && (!this.$autoHideRegion_$ || $goog$dom$contains$$(this.$autoHideRegion_$, $e$$34_target$$43$$)) && !(150 > $goog$now$$() - this.$lastShowTime_$) && $JSCompiler_StaticMethods_hide_$$(this, $e$$34_target$$43$$)
};
$JSCompiler_prototypeAlias$$.$onDocumentKeyDown_$ = function $$JSCompiler_prototypeAlias$$$$onDocumentKeyDown_$$($e$$35$$) {
  27 == $e$$35$$.keyCode && $JSCompiler_StaticMethods_hide_$$(this, $e$$35$$.target) && ($e$$35$$.preventDefault(), $e$$35$$.stopPropagation())
};
$JSCompiler_prototypeAlias$$.$onDocumentBlur_$ = function $$JSCompiler_prototypeAlias$$$$onDocumentBlur_$$($activeElement$$1_e$$36$$) {
  if(this.$enableCrossIframeDismissal_$) {
    var $doc$$33$$ = $goog$dom$getOwnerDocument$$(this.$element_$);
    if($goog$userAgent$IE$$ || $goog$userAgent$OPERA$$) {
      if($activeElement$$1_e$$36$$ = $doc$$33$$.activeElement, !$activeElement$$1_e$$36$$ || $goog$dom$contains$$(this.$element_$, $activeElement$$1_e$$36$$) || "BODY" == $activeElement$$1_e$$36$$.tagName) {
        return
      }
    }else {
      if($activeElement$$1_e$$36$$.target != $doc$$33$$) {
        return
      }
    }
    150 > $goog$now$$() - this.$lastShowTime_$ || $JSCompiler_StaticMethods_hide_$$(this)
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$PopupBase$$.$superClass_$.$disposeInternal$.call(this);
  this.$handler_$.$dispose$();
  $goog$dispose$$(this.$showTransition_$);
  $goog$dispose$$(this.$hideTransition_$);
  delete this.$element_$;
  delete this.$handler_$
};
function $goog$positioning$ViewportPosition$$($arg1$$1$$, $opt_arg2$$1$$) {
  this.$coordinate$ = $arg1$$1$$ instanceof $goog$math$Coordinate$$ ? $arg1$$1$$ : new $goog$math$Coordinate$$($arg1$$1$$, $opt_arg2$$1$$)
}
$goog$inherits$$($goog$positioning$ViewportPosition$$, $goog$positioning$AbstractPosition$$);
$goog$positioning$ViewportPosition$$.prototype.$reposition$ = function $$goog$positioning$ViewportPosition$$$$$reposition$$($element$$72$$, $popupCorner$$, $opt_margin$$4$$, $opt_preferredSize$$4$$) {
  $goog$positioning$positionAtAnchor$$($goog$style$getClientViewportElement$$($element$$72$$), 0, $element$$72$$, $popupCorner$$, this.$coordinate$, $opt_margin$$4$$, $JSCompiler_alias_NULL$$, $opt_preferredSize$$4$$)
};
function $goog$ui$Popup$$($opt_element$$2$$, $opt_position$$) {
  this.$popupCorner_$ = 4;
  this.$position_$ = $opt_position$$ || $JSCompiler_alias_VOID$$;
  $goog$ui$PopupBase$$.call(this, $opt_element$$2$$)
}
$goog$inherits$$($goog$ui$Popup$$, $goog$ui$PopupBase$$);
$goog$ui$Popup$$.prototype.$setPosition$ = function $$goog$ui$Popup$$$$$setPosition$$($position$$1$$) {
  this.$position_$ = $position$$1$$ || $JSCompiler_alias_VOID$$;
  this.$isVisible_$ && this.$reposition$()
};
$goog$ui$Popup$$.prototype.$reposition$ = function $$goog$ui$Popup$$$$$reposition$$() {
  if(this.$position_$) {
    var $hideForPositioning$$ = !this.$isVisible_$ && "move_offscreen" != this.$type_$, $el$$30$$ = this.$getElement$();
    $hideForPositioning$$ && ($el$$30$$.style.visibility = "hidden", $goog$style$showElement$$($el$$30$$, $JSCompiler_alias_TRUE$$));
    this.$position_$.$reposition$($el$$30$$, this.$popupCorner_$, this.$margin_$);
    $hideForPositioning$$ && $goog$style$showElement$$($el$$30$$, $JSCompiler_alias_FALSE$$)
  }
};
function $goog$ui$Tooltip$$($element$$inline_603_opt_el$$7$$, $opt_str$$2$$, $child$$inline_688_opt_domHelper$$) {
  this.$dom_$ = $child$$inline_688_opt_domHelper$$ || ($element$$inline_603_opt_el$$7$$ ? $goog$dom$getDomHelper$$($goog$dom$getElement$$($element$$inline_603_opt_el$$7$$)) : $goog$dom$getDomHelper$$());
  $goog$ui$Popup$$.call(this, this.$dom_$.$createDom$("div", {style:"position:absolute;display:none;"}));
  this.$cursorPosition$ = new $goog$math$Coordinate$$(1, 1);
  this.$elements_$ = new $goog$structs$Set$$;
  $element$$inline_603_opt_el$$7$$ && $JSCompiler_StaticMethods_attach$$(this, $element$$inline_603_opt_el$$7$$);
  if($opt_str$$2$$ != $JSCompiler_alias_NULL$$) {
    if($element$$inline_603_opt_el$$7$$ = this.$getElement$(), "textContent" in $element$$inline_603_opt_el$$7$$) {
      $element$$inline_603_opt_el$$7$$.textContent = $opt_str$$2$$
    }else {
      if($element$$inline_603_opt_el$$7$$.firstChild && 3 == $element$$inline_603_opt_el$$7$$.firstChild.nodeType) {
        for(;$element$$inline_603_opt_el$$7$$.lastChild != $element$$inline_603_opt_el$$7$$.firstChild;) {
          $element$$inline_603_opt_el$$7$$.removeChild($element$$inline_603_opt_el$$7$$.lastChild)
        }
        $element$$inline_603_opt_el$$7$$.firstChild.data = $opt_str$$2$$
      }else {
        for(;$child$$inline_688_opt_domHelper$$ = $element$$inline_603_opt_el$$7$$.firstChild;) {
          $element$$inline_603_opt_el$$7$$.removeChild($child$$inline_688_opt_domHelper$$)
        }
        $element$$inline_603_opt_el$$7$$.appendChild($goog$dom$getOwnerDocument$$($element$$inline_603_opt_el$$7$$).createTextNode($opt_str$$2$$))
      }
    }
  }
}
$goog$inherits$$($goog$ui$Tooltip$$, $goog$ui$Popup$$);
var $goog$ui$Tooltip$activeInstances_$$ = [];
$JSCompiler_prototypeAlias$$ = $goog$ui$Tooltip$$.prototype;
$JSCompiler_prototypeAlias$$.$activeEl_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.className = "goog-tooltip";
$JSCompiler_prototypeAlias$$.$showDelayMs_$ = 500;
$JSCompiler_prototypeAlias$$.$hideDelayMs_$ = 0;
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$");
function $JSCompiler_StaticMethods_attach$$($JSCompiler_StaticMethods_attach$self$$, $el$$31$$) {
  $el$$31$$ = $goog$dom$getElement$$($el$$31$$);
  $JSCompiler_StaticMethods_attach$self$$.$elements_$.add($el$$31$$);
  $goog$events$listen$$($el$$31$$, "mouseover", $JSCompiler_StaticMethods_attach$self$$.$handleMouseOver$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_attach$self$$);
  $goog$events$listen$$($el$$31$$, "mouseout", $JSCompiler_StaticMethods_attach$self$$.$handleMouseOutAndBlur$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_attach$self$$);
  $goog$events$listen$$($el$$31$$, "mousemove", $JSCompiler_StaticMethods_attach$self$$.$handleMouseMove$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_attach$self$$);
  $goog$events$listen$$($el$$31$$, "focus", $JSCompiler_StaticMethods_attach$self$$.$handleFocus$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_attach$self$$);
  $goog$events$listen$$($el$$31$$, "blur", $JSCompiler_StaticMethods_attach$self$$.$handleMouseOutAndBlur$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_attach$self$$)
}
$JSCompiler_prototypeAlias$$.detach = function $$JSCompiler_prototypeAlias$$$detach$($el$$32_opt_el$$8$$) {
  if($el$$32_opt_el$$8$$) {
    $el$$32_opt_el$$8$$ = $goog$dom$getElement$$($el$$32_opt_el$$8$$), $JSCompiler_StaticMethods_detachElement_$$(this, $el$$32_opt_el$$8$$), this.$elements_$.remove($el$$32_opt_el$$8$$)
  }else {
    for(var $a$$58$$ = this.$elements_$.$getValues$(), $i$$149$$ = 0;$el$$32_opt_el$$8$$ = $a$$58$$[$i$$149$$];$i$$149$$++) {
      $JSCompiler_StaticMethods_detachElement_$$(this, $el$$32_opt_el$$8$$)
    }
    this.$elements_$.clear()
  }
};
function $JSCompiler_StaticMethods_detachElement_$$($JSCompiler_StaticMethods_detachElement_$self$$, $el$$33$$) {
  $goog$events$unlisten$$($el$$33$$, "mouseover", $JSCompiler_StaticMethods_detachElement_$self$$.$handleMouseOver$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_detachElement_$self$$);
  $goog$events$unlisten$$($el$$33$$, "mouseout", $JSCompiler_StaticMethods_detachElement_$self$$.$handleMouseOutAndBlur$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_detachElement_$self$$);
  $goog$events$unlisten$$($el$$33$$, "mousemove", $JSCompiler_StaticMethods_detachElement_$self$$.$handleMouseMove$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_detachElement_$self$$);
  $goog$events$unlisten$$($el$$33$$, "focus", $JSCompiler_StaticMethods_detachElement_$self$$.$handleFocus$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_detachElement_$self$$);
  $goog$events$unlisten$$($el$$33$$, "blur", $JSCompiler_StaticMethods_detachElement_$self$$.$handleMouseOutAndBlur$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_detachElement_$self$$)
}
$JSCompiler_prototypeAlias$$.$setElement$ = function $$JSCompiler_prototypeAlias$$$$setElement$$($el$$34$$) {
  var $body$$5_oldElement$$ = this.$getElement$();
  $body$$5_oldElement$$ && $goog$dom$removeNode$$($body$$5_oldElement$$);
  $goog$ui$Tooltip$$.$superClass_$.$setElement$.call(this, $el$$34$$);
  $el$$34$$ && ($body$$5_oldElement$$ = this.$dom_$.$document_$.body, $body$$5_oldElement$$.insertBefore($el$$34$$, $body$$5_oldElement$$.lastChild))
};
$JSCompiler_prototypeAlias$$.$onBeforeShow$ = function $$JSCompiler_prototypeAlias$$$$onBeforeShow$$() {
  if(!$goog$ui$PopupBase$$.prototype.$onBeforeShow$.call(this)) {
    return $JSCompiler_alias_FALSE$$
  }
  if(this.anchor) {
    for(var $element$$75_tt$$, $i$$150$$ = 0;$element$$75_tt$$ = $goog$ui$Tooltip$activeInstances_$$[$i$$150$$];$i$$150$$++) {
      $goog$dom$contains$$($element$$75_tt$$.$getElement$(), this.anchor) || $element$$75_tt$$.$setVisible$($JSCompiler_alias_FALSE$$)
    }
  }
  0 <= $goog$array$indexOf$$($goog$ui$Tooltip$activeInstances_$$, this) || $goog$ui$Tooltip$activeInstances_$$.push(this);
  $element$$75_tt$$ = this.$getElement$();
  $element$$75_tt$$.className = this.className;
  $JSCompiler_StaticMethods_clearHideTimer$$(this);
  $goog$events$listen$$($element$$75_tt$$, "mouseover", this.$handleTooltipMouseOver$, $JSCompiler_alias_FALSE$$, this);
  $goog$events$listen$$($element$$75_tt$$, "mouseout", this.$handleTooltipMouseOut$, $JSCompiler_alias_FALSE$$, this);
  $JSCompiler_StaticMethods_clearShowTimer$$(this);
  return $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$onHide_$ = function $$JSCompiler_prototypeAlias$$$$onHide_$$() {
  $goog$array$remove$$($goog$ui$Tooltip$activeInstances_$$, this);
  for(var $element$$76$$ = this.$getElement$(), $tt$$1$$, $i$$151$$ = 0;$tt$$1$$ = $goog$ui$Tooltip$activeInstances_$$[$i$$151$$];$i$$151$$++) {
    $tt$$1$$.anchor && $goog$dom$contains$$($element$$76$$, $tt$$1$$.anchor) && $tt$$1$$.$setVisible$($JSCompiler_alias_FALSE$$)
  }
  this.$parentTooltip_$ && $JSCompiler_StaticMethods_startHideTimer$$(this.$parentTooltip_$);
  $goog$events$unlisten$$($element$$76$$, "mouseover", this.$handleTooltipMouseOver$, $JSCompiler_alias_FALSE$$, this);
  $goog$events$unlisten$$($element$$76$$, "mouseout", this.$handleTooltipMouseOut$, $JSCompiler_alias_FALSE$$, this);
  this.anchor = $JSCompiler_alias_VOID$$;
  if(0 == (this.$showTimer$ ? this.$isVisible_$ ? 4 : 1 : this.$hideTimer$ ? 3 : this.$isVisible_$ ? 2 : 0)) {
    this.$seenInteraction_$ = $JSCompiler_alias_FALSE$$
  }
  $goog$ui$PopupBase$$.prototype.$onHide_$.call(this)
};
$JSCompiler_prototypeAlias$$.$maybeShow$ = function $$JSCompiler_prototypeAlias$$$$maybeShow$$($el$$35$$, $opt_pos$$) {
  this.anchor == $el$$35$$ && this.$elements_$.contains(this.anchor) && (this.$seenInteraction_$ || !this.$requireInteraction_$ ? (this.$setVisible$($JSCompiler_alias_FALSE$$), this.$isVisible_$ || (this.anchor = $el$$35$$, this.$setPosition$($opt_pos$$ || $JSCompiler_StaticMethods_getPositioningStrategy$$(this, 0)), this.$setVisible$($JSCompiler_alias_TRUE$$))) : this.anchor = $JSCompiler_alias_VOID$$);
  this.$showTimer$ = $JSCompiler_alias_VOID$$
};
$JSCompiler_prototypeAlias$$.$maybeHide$ = function $$JSCompiler_prototypeAlias$$$$maybeHide$$($el$$38$$) {
  this.$hideTimer$ = $JSCompiler_alias_VOID$$;
  $el$$38$$ == this.anchor && (this.$activeEl_$ == $JSCompiler_alias_NULL$$ || this.$activeEl_$ != this.$getElement$() && !this.$elements_$.contains(this.$activeEl_$)) && (!this.$childTooltip_$ || !this.$childTooltip_$.$activeEl_$) && this.$setVisible$($JSCompiler_alias_FALSE$$)
};
function $JSCompiler_StaticMethods_saveCursorPosition_$$($JSCompiler_StaticMethods_saveCursorPosition_$self$$, $event$$5$$) {
  var $scroll$$ = $JSCompiler_StaticMethods_getDocumentScroll$$($JSCompiler_StaticMethods_saveCursorPosition_$self$$.$dom_$);
  $JSCompiler_StaticMethods_saveCursorPosition_$self$$.$cursorPosition$.x = $event$$5$$.clientX + $scroll$$.x;
  $JSCompiler_StaticMethods_saveCursorPosition_$self$$.$cursorPosition$.y = $event$$5$$.clientY + $scroll$$.y
}
$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$($event$$6$$) {
  var $el$$39$$ = $JSCompiler_StaticMethods_getAnchorFromElement$$(this, $event$$6$$.target);
  this.$activeEl_$ = $el$$39$$;
  $JSCompiler_StaticMethods_clearHideTimer$$(this);
  $el$$39$$ != this.anchor && (this.anchor = $el$$39$$, this.$showTimer$ || (this.$showTimer$ = $goog$Timer$callOnce$$($goog$bind$$(this.$maybeShow$, this, $el$$39$$, $JSCompiler_alias_VOID$$), this.$showDelayMs_$)), $JSCompiler_StaticMethods_checkForParentTooltip_$$(this), $JSCompiler_StaticMethods_saveCursorPosition_$$(this, $event$$6$$))
};
function $JSCompiler_StaticMethods_getAnchorFromElement$$($JSCompiler_StaticMethods_getAnchorFromElement$self$$, $el$$40$$) {
  try {
    for(;$el$$40$$ && !$JSCompiler_StaticMethods_getAnchorFromElement$self$$.$elements_$.contains($el$$40$$);) {
      $el$$40$$ = $el$$40$$.parentNode
    }
    return $el$$40$$
  }catch($e$$37$$) {
    return $JSCompiler_alias_NULL$$
  }
}
$JSCompiler_prototypeAlias$$.$handleMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleMouseMove$$($event$$7$$) {
  $JSCompiler_StaticMethods_saveCursorPosition_$$(this, $event$$7$$);
  this.$seenInteraction_$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$handleFocus$ = function $$JSCompiler_prototypeAlias$$$$handleFocus$$($el$$41_event$$8$$) {
  this.$activeEl_$ = $el$$41_event$$8$$ = $JSCompiler_StaticMethods_getAnchorFromElement$$(this, $el$$41_event$$8$$.target);
  this.$seenInteraction_$ = $JSCompiler_alias_TRUE$$;
  if(this.anchor != $el$$41_event$$8$$) {
    this.anchor = $el$$41_event$$8$$;
    var $pos$$7$$ = $JSCompiler_StaticMethods_getPositioningStrategy$$(this, 1);
    $JSCompiler_StaticMethods_clearHideTimer$$(this);
    this.$showTimer$ || (this.$showTimer$ = $goog$Timer$callOnce$$($goog$bind$$(this.$maybeShow$, this, $el$$41_event$$8$$, $pos$$7$$), this.$showDelayMs_$));
    $JSCompiler_StaticMethods_checkForParentTooltip_$$(this)
  }
};
function $JSCompiler_StaticMethods_getPositioningStrategy$$($JSCompiler_StaticMethods_getPositioningStrategy$self$$, $activationType$$) {
  if(0 == $activationType$$) {
    var $coord$$3$$ = $JSCompiler_StaticMethods_getPositioningStrategy$self$$.$cursorPosition$.$clone$();
    return new $goog$ui$Tooltip$CursorTooltipPosition$$($coord$$3$$)
  }
  return new $goog$ui$Tooltip$ElementTooltipPosition$$($JSCompiler_StaticMethods_getPositioningStrategy$self$$.$activeEl_$)
}
function $JSCompiler_StaticMethods_checkForParentTooltip_$$($JSCompiler_StaticMethods_checkForParentTooltip_$self$$) {
  if($JSCompiler_StaticMethods_checkForParentTooltip_$self$$.anchor) {
    for(var $tt$$2$$, $i$$152$$ = 0;$tt$$2$$ = $goog$ui$Tooltip$activeInstances_$$[$i$$152$$];$i$$152$$++) {
      $goog$dom$contains$$($tt$$2$$.$getElement$(), $JSCompiler_StaticMethods_checkForParentTooltip_$self$$.anchor) && ($tt$$2$$.$childTooltip_$ = $JSCompiler_StaticMethods_checkForParentTooltip_$self$$, $JSCompiler_StaticMethods_checkForParentTooltip_$self$$.$parentTooltip_$ = $tt$$2$$)
    }
  }
}
$JSCompiler_prototypeAlias$$.$handleMouseOutAndBlur$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOutAndBlur$$($event$$9$$) {
  var $el$$42$$ = $JSCompiler_StaticMethods_getAnchorFromElement$$(this, $event$$9$$.target), $elTo$$ = $JSCompiler_StaticMethods_getAnchorFromElement$$(this, $event$$9$$.relatedTarget);
  $el$$42$$ != $elTo$$ && ($el$$42$$ == this.$activeEl_$ && (this.$activeEl_$ = $JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_clearShowTimer$$(this), this.$seenInteraction_$ = $JSCompiler_alias_FALSE$$, this.$isVisible_$ && (!$event$$9$$.relatedTarget || !$goog$dom$contains$$(this.$getElement$(), $event$$9$$.relatedTarget)) ? $JSCompiler_StaticMethods_startHideTimer$$(this) : this.anchor = $JSCompiler_alias_VOID$$)
};
$JSCompiler_prototypeAlias$$.$handleTooltipMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleTooltipMouseOver$$() {
  var $element$$77$$ = this.$getElement$();
  this.$activeEl_$ != $element$$77$$ && ($JSCompiler_StaticMethods_clearHideTimer$$(this), this.$activeEl_$ = $element$$77$$)
};
$JSCompiler_prototypeAlias$$.$handleTooltipMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleTooltipMouseOut$$($event$$11$$) {
  var $element$$78$$ = this.$getElement$();
  if(this.$activeEl_$ == $element$$78$$ && (!$event$$11$$.relatedTarget || !$goog$dom$contains$$($element$$78$$, $event$$11$$.relatedTarget))) {
    this.$activeEl_$ = $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_startHideTimer$$(this)
  }
};
function $JSCompiler_StaticMethods_clearShowTimer$$($JSCompiler_StaticMethods_clearShowTimer$self$$) {
  $JSCompiler_StaticMethods_clearShowTimer$self$$.$showTimer$ && ($goog$Timer$defaultTimerObject$$.clearTimeout($JSCompiler_StaticMethods_clearShowTimer$self$$.$showTimer$), $JSCompiler_StaticMethods_clearShowTimer$self$$.$showTimer$ = $JSCompiler_alias_VOID$$)
}
function $JSCompiler_StaticMethods_startHideTimer$$($JSCompiler_StaticMethods_startHideTimer$self$$) {
  if(2 == ($JSCompiler_StaticMethods_startHideTimer$self$$.$showTimer$ ? $JSCompiler_StaticMethods_startHideTimer$self$$.$isVisible_$ ? 4 : 1 : $JSCompiler_StaticMethods_startHideTimer$self$$.$hideTimer$ ? 3 : $JSCompiler_StaticMethods_startHideTimer$self$$.$isVisible_$ ? 2 : 0)) {
    $JSCompiler_StaticMethods_startHideTimer$self$$.$hideTimer$ = $goog$Timer$callOnce$$($goog$bind$$($JSCompiler_StaticMethods_startHideTimer$self$$.$maybeHide$, $JSCompiler_StaticMethods_startHideTimer$self$$, $JSCompiler_StaticMethods_startHideTimer$self$$.anchor), $JSCompiler_StaticMethods_startHideTimer$self$$.$hideDelayMs_$)
  }
}
function $JSCompiler_StaticMethods_clearHideTimer$$($JSCompiler_StaticMethods_clearHideTimer$self$$) {
  $JSCompiler_StaticMethods_clearHideTimer$self$$.$hideTimer$ && ($goog$Timer$defaultTimerObject$$.clearTimeout($JSCompiler_StaticMethods_clearHideTimer$self$$.$hideTimer$), $JSCompiler_StaticMethods_clearHideTimer$self$$.$hideTimer$ = $JSCompiler_alias_VOID$$)
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  this.$setVisible$($JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_clearShowTimer$$(this);
  this.detach();
  this.$getElement$() && $goog$dom$removeNode$$(this.$getElement$());
  this.$activeEl_$ = $JSCompiler_alias_NULL$$;
  delete this.$dom_$;
  $goog$ui$Tooltip$$.$superClass_$.$disposeInternal$.call(this)
};
function $goog$ui$Tooltip$CursorTooltipPosition$$($arg1$$6$$, $opt_arg2$$6$$) {
  $goog$positioning$ViewportPosition$$.call(this, $arg1$$6$$, $opt_arg2$$6$$)
}
$goog$inherits$$($goog$ui$Tooltip$CursorTooltipPosition$$, $goog$positioning$ViewportPosition$$);
$goog$ui$Tooltip$CursorTooltipPosition$$.prototype.$reposition$ = function $$goog$ui$Tooltip$CursorTooltipPosition$$$$$reposition$$($element$$79$$, $popupCorner$$3_viewport$$3_viewportElt$$2$$, $margin_opt_margin$$11$$) {
  $popupCorner$$3_viewport$$3_viewportElt$$2$$ = $goog$style$getClientViewportElement$$($element$$79$$);
  $popupCorner$$3_viewport$$3_viewportElt$$2$$ = $goog$style$getVisibleRectForElement$$($popupCorner$$3_viewport$$3_viewportElt$$2$$);
  $margin_opt_margin$$11$$ = $margin_opt_margin$$11$$ ? new $goog$math$Box$$($margin_opt_margin$$11$$.top + 10, $margin_opt_margin$$11$$.right, $margin_opt_margin$$11$$.bottom, $margin_opt_margin$$11$$.left + 10) : new $goog$math$Box$$(10, 0, 0, 10);
  $goog$positioning$positionAtCoordinate$$(this.$coordinate$, $element$$79$$, 4, $margin_opt_margin$$11$$, $popupCorner$$3_viewport$$3_viewportElt$$2$$, 9) & 496 && $goog$positioning$positionAtCoordinate$$(this.$coordinate$, $element$$79$$, 4, $margin_opt_margin$$11$$, $popupCorner$$3_viewport$$3_viewportElt$$2$$, 5)
};
function $goog$ui$Tooltip$ElementTooltipPosition$$($element$$80$$) {
  $goog$positioning$AnchoredPosition$$.call(this, $element$$80$$, 3)
}
$goog$inherits$$($goog$ui$Tooltip$ElementTooltipPosition$$, $goog$positioning$AnchoredPosition$$);
$goog$ui$Tooltip$ElementTooltipPosition$$.prototype.$reposition$ = function $$goog$ui$Tooltip$ElementTooltipPosition$$$$$reposition$$($element$$81$$, $popupCorner$$4$$, $opt_margin$$12$$) {
  var $offset$$17$$ = new $goog$math$Coordinate$$(10, 0);
  $goog$positioning$positionAtAnchor$$(this.element, this.$corner$, $element$$81$$, $popupCorner$$4$$, $offset$$17$$, $opt_margin$$12$$, 9) & 496 && $goog$positioning$positionAtAnchor$$(this.element, 2, $element$$81$$, 1, $offset$$17$$, $opt_margin$$12$$, 5)
};
function $goog$events$MouseWheelHandler$$($element$$82$$) {
  this.$element_$ = $element$$82$$;
  this.$listenKey_$ = $goog$events$listen$$(this.$element_$, $goog$userAgent$GECKO$$ ? "DOMMouseScroll" : "mousewheel", this)
}
$goog$inherits$$($goog$events$MouseWheelHandler$$, $goog$events$EventTarget$$);
$goog$events$MouseWheelHandler$$.prototype.handleEvent = function $$goog$events$MouseWheelHandler$$$$handleEvent$($be$$2_e$$38$$) {
  var $deltaX_newEvent$$ = 0, $deltaY_wheelDeltaScaleFactor$$ = 0, $detail$$3$$ = 0, $be$$2_e$$38$$ = $be$$2_e$$38$$.$event_$;
  if("mousewheel" == $be$$2_e$$38$$.type) {
    $deltaY_wheelDeltaScaleFactor$$ = 1;
    if($goog$userAgent$IE$$ || $goog$userAgent$WEBKIT$$ && ($goog$userAgent$detectedWindows_$$ || $goog$userAgent$isVersion$$("532.0"))) {
      $deltaY_wheelDeltaScaleFactor$$ = 40
    }
    $detail$$3$$ = $goog$userAgent$WEBKIT$$ && $goog$userAgent$detectedMac_$$ && 0 != -$be$$2_e$$38$$.wheelDelta % $deltaY_wheelDeltaScaleFactor$$ ? -$be$$2_e$$38$$.wheelDelta : -$be$$2_e$$38$$.wheelDelta / $deltaY_wheelDeltaScaleFactor$$;
    $goog$isDef$$($be$$2_e$$38$$.wheelDeltaX) ? ($deltaX_newEvent$$ = $goog$userAgent$WEBKIT$$ && $goog$userAgent$detectedMac_$$ && 0 != -$be$$2_e$$38$$.wheelDeltaX % $deltaY_wheelDeltaScaleFactor$$ ? -$be$$2_e$$38$$.wheelDeltaX : -$be$$2_e$$38$$.wheelDeltaX / $deltaY_wheelDeltaScaleFactor$$, $deltaY_wheelDeltaScaleFactor$$ = $goog$userAgent$WEBKIT$$ && $goog$userAgent$detectedMac_$$ && 0 != -$be$$2_e$$38$$.wheelDeltaY % $deltaY_wheelDeltaScaleFactor$$ ? -$be$$2_e$$38$$.wheelDeltaY : -$be$$2_e$$38$$.wheelDeltaY / 
    $deltaY_wheelDeltaScaleFactor$$) : $deltaY_wheelDeltaScaleFactor$$ = $detail$$3$$
  }else {
    $detail$$3$$ = $be$$2_e$$38$$.detail, 100 < $detail$$3$$ ? $detail$$3$$ = 3 : -100 > $detail$$3$$ && ($detail$$3$$ = -3), $goog$isDef$$($be$$2_e$$38$$.axis) && $be$$2_e$$38$$.axis === $be$$2_e$$38$$.HORIZONTAL_AXIS ? $deltaX_newEvent$$ = $detail$$3$$ : $deltaY_wheelDeltaScaleFactor$$ = $detail$$3$$
  }
  $goog$isNumber$$(this.$maxDeltaX_$) && Math.min(Math.max($deltaX_newEvent$$, -this.$maxDeltaX_$), this.$maxDeltaX_$);
  $goog$isNumber$$(this.$maxDeltaY_$) && ($deltaY_wheelDeltaScaleFactor$$ = Math.min(Math.max($deltaY_wheelDeltaScaleFactor$$, -this.$maxDeltaY_$), this.$maxDeltaY_$));
  $deltaX_newEvent$$ = new $goog$events$MouseWheelEvent$$($detail$$3$$, $be$$2_e$$38$$, 0, $deltaY_wheelDeltaScaleFactor$$);
  try {
    this.dispatchEvent($deltaX_newEvent$$)
  }finally {
    $deltaX_newEvent$$.$dispose$()
  }
};
$goog$events$MouseWheelHandler$$.prototype.$disposeInternal$ = function $$goog$events$MouseWheelHandler$$$$$disposeInternal$$() {
  $goog$events$MouseWheelHandler$$.$superClass_$.$disposeInternal$.call(this);
  $goog$events$unlistenByKey$$(this.$listenKey_$);
  delete this.$listenKey_$
};
function $goog$events$MouseWheelEvent$$($detail$$4$$, $browserEvent$$, $deltaX$$1$$, $deltaY$$1$$) {
  $browserEvent$$ && this.$init$($browserEvent$$, $JSCompiler_alias_VOID$$);
  this.type = "mousewheel";
  this.detail = $detail$$4$$;
  this.$deltaY$ = $deltaY$$1$$
}
$goog$inherits$$($goog$events$MouseWheelEvent$$, $goog$events$BrowserEvent$$);
$goog$userAgent$IE$$ || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("525");
function $X$interactor$$($element$$84$$) {
  (!$goog$isDefAndNotNull$$($element$$84$$) || !($element$$84$$ instanceof Element)) && $JSCompiler_alias_THROW$$(Error("Could not add interactor to the given element."));
  $X$base$$.call(this);
  this._className = "interactor";
  this.$_element$ = $element$$84$$;
  this.$_mouseWheelHandler$ = this.$_mouseOutListener$ = this.$_mouseMoveListener$ = this.$_mouseUpListener$ = this.$_mouseDownListener$ = this.$_mouseWheelListener$ = $JSCompiler_alias_NULL$$;
  this.$_mouseInside$ = $JSCompiler_alias_TRUE$$;
  this.rightButtonDown = this.middleButtonDown = this.leftButtonDown = $JSCompiler_alias_FALSE$$;
  this.$_lastMousePosition$ = new $goog$math$Vec2$$(0, 0);
  this.config = {MOUSEWHEEL_ENABLED:$JSCompiler_alias_TRUE$$, MOUSECLICKS_ENABLED:$JSCompiler_alias_TRUE$$, KEYBOARD_ENABLED:$JSCompiler_alias_TRUE$$, HOVERING_ENABLED:$JSCompiler_alias_TRUE$$, CONTEXTMENU_ENABLED:$JSCompiler_alias_FALSE$$}
}
$goog$inherits$$($X$interactor$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$interactor$$.prototype;
$JSCompiler_prototypeAlias$$.$init$ = function $$JSCompiler_prototypeAlias$$$$init$$() {
  this.config.MOUSEWHEEL_ENABLED ? (this.$_mouseWheelHandler$ = new $goog$events$MouseWheelHandler$$(this.$_element$), this.$_mouseWheelListener$ = $goog$events$listen$$(this.$_mouseWheelHandler$, "mousewheel", this.$onMouseWheel_$.bind(this))) : ($goog$events$unlistenByKey$$(this.$_mouseWheelListener$), this.$_mouseWheelHandler$ = $JSCompiler_alias_NULL$$);
  this.config.MOUSECLICKS_ENABLED ? (this.$_mouseDownListener$ = $goog$events$listen$$(this.$_element$, "mousedown", this.$onMouseDown_$.bind(this)), this.$_mouseUpListener$ = $goog$events$listen$$(this.$_element$, "mouseup", this.$onMouseUp_$.bind(this))) : ($goog$events$unlistenByKey$$(this.$_mouseDownListener$), $goog$events$unlistenByKey$$(this.$_mouseUpListener$));
  this.$_element$.oncontextmenu = this.config.CONTEXTMENU_ENABLED ? $JSCompiler_alias_NULL$$ : function() {
    return $JSCompiler_alias_FALSE$$
  };
  window.onkeydown = this.config.KEYBOARD_ENABLED ? this.$onKey_$.bind(this) : $JSCompiler_alias_NULL$$;
  $goog$events$unlistenByKey$$(this.$_mouseMoveListener$);
  $goog$events$unlistenByKey$$(this.$_mouseOutListener$);
  this.$_mouseMoveListener$ = $goog$events$listen$$(this.$_element$, "mousemove", this.$onMouseMovementInside_$.bind(this));
  this.$_mouseOutListener$ = $goog$events$listen$$(this.$_element$, "mouseout", this.$onMouseMovementOutside_$.bind(this))
};
$JSCompiler_prototypeAlias$$.$onMouseDown_$ = function $$JSCompiler_prototypeAlias$$$$onMouseDown_$$($event$$13$$) {
  0 == $event$$13$$.button ? this.leftButtonDown = $JSCompiler_alias_TRUE$$ : 1 == $event$$13$$.button ? this.middleButtonDown = $JSCompiler_alias_TRUE$$ : 2 == $event$$13$$.button && (this.rightButtonDown = $JSCompiler_alias_TRUE$$);
  eval("this.onMouseDown(this['leftButtonDown'],this['middleButtonDown'],this['rightButtonDown'])");
  $JSCompiler_StaticMethods_hoverEnd_$$(this);
  $event$$13$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$onMouseDown$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$onMouseUp_$ = function $$JSCompiler_prototypeAlias$$$$onMouseUp_$$($event$$14$$) {
  0 == $event$$14$$.button ? this.leftButtonDown = $JSCompiler_alias_FALSE$$ : 1 == $event$$14$$.button ? this.middleButtonDown = $JSCompiler_alias_FALSE$$ : 2 == $event$$14$$.button && (this.rightButtonDown = $JSCompiler_alias_FALSE$$);
  eval("this.onMouseUp(this['leftButtonDown'],this['middleButtonDown'],this['rightButtonDown'])");
  $JSCompiler_StaticMethods_hoverEnd_$$(this);
  $event$$14$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$onMouseUp$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$onMouseMovementOutside_$ = function $$JSCompiler_prototypeAlias$$$$onMouseMovementOutside_$$($event$$15$$) {
  this.$_mouseInside$ = $JSCompiler_alias_FALSE$$;
  this.config.KEYBOARD_ENABLED && (window.onkeydown = $JSCompiler_alias_NULL$$);
  this.rightButtonDown = this.middleButtonDown = this.leftButtonDown = $JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_hoverEnd_$$(this);
  this.$_lastMousePosition$ = new $goog$math$Vec2$$(0, 0);
  $event$$15$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$onMouseMove$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$onMouseMovementInside_$ = function $$JSCompiler_prototypeAlias$$$$onMouseMovementInside_$$($distance$$3_event$$17$$) {
  this.mousemoveEvent = $distance$$3_event$$17$$;
  eval("this.onMouseMove(this['mousemoveEvent'])");
  this.$_mouseInside$ = $JSCompiler_alias_TRUE$$;
  this.config.KEYBOARD_ENABLED && window.onkeydown == $JSCompiler_alias_NULL$$ && (window.onkeydown = this.$onKey_$.bind(this));
  $distance$$3_event$$17$$.preventDefault();
  var $e$$42_shiftDown$$ = $distance$$3_event$$17$$.shiftKey, $currentMousePosition$$ = new $goog$math$Vec2$$($distance$$3_event$$17$$.offsetX, $distance$$3_event$$17$$.offsetY), $distance$$3_event$$17$$ = this.$_lastMousePosition$.$subtract$($currentMousePosition$$);
  this.$_lastMousePosition$ = $currentMousePosition$$.$clone$();
  this.config.HOVERING_ENABLED && ((0 < Math.abs($distance$$3_event$$17$$.x) || 0 < Math.abs($distance$$3_event$$17$$.y) || this.middleButtonDown || this.leftButtonDown || this.rightButtonDown) && $JSCompiler_StaticMethods_hoverEnd_$$(this), this.$_hoverTrigger$ = setTimeout(function() {
    $JSCompiler_StaticMethods_hoverEnd_$$(this);
    var $e$$43$$ = new $X$event$HoverEvent$$;
    $e$$43$$.$_x$ = $currentMousePosition$$.x;
    $e$$43$$.$_y$ = $currentMousePosition$$.y;
    this.dispatchEvent($e$$43$$);
    this.$_hoverTrigger$ = $JSCompiler_alias_NULL$$
  }.bind(this), 300));
  2 > Math.abs($distance$$3_event$$17$$.x) && ($distance$$3_event$$17$$.x = 0);
  2 > Math.abs($distance$$3_event$$17$$.y) && ($distance$$3_event$$17$$.y = 0);
  0 != $distance$$3_event$$17$$.$magnitude$() && (this.leftButtonDown && !$e$$42_shiftDown$$ ? ($e$$42_shiftDown$$ = new $X$event$RotateEvent$$, $e$$42_shiftDown$$.$_distance$ = $distance$$3_event$$17$$, $e$$42_shiftDown$$.$_angle$ = 0, this.dispatchEvent($e$$42_shiftDown$$)) : this.middleButtonDown || this.leftButtonDown && $e$$42_shiftDown$$ ? ($e$$42_shiftDown$$ = new $X$event$PanEvent$$, 5 < $distance$$3_event$$17$$.x ? $distance$$3_event$$17$$.x = 5 : -5 > $distance$$3_event$$17$$.x && ($distance$$3_event$$17$$.x = 
  -5), 5 < $distance$$3_event$$17$$.y ? $distance$$3_event$$17$$.y = 5 : -5 > $distance$$3_event$$17$$.y && ($distance$$3_event$$17$$.y = -5), $e$$42_shiftDown$$.$_distance$ = $distance$$3_event$$17$$, this.dispatchEvent($e$$42_shiftDown$$)) : this.rightButtonDown && ($e$$42_shiftDown$$ = new $X$event$ZoomEvent$$, $e$$42_shiftDown$$.$_in$ = 0 < $distance$$3_event$$17$$.y, $e$$42_shiftDown$$.$_fast$ = $JSCompiler_alias_FALSE$$, this.dispatchEvent($e$$42_shiftDown$$)))
};
function $JSCompiler_StaticMethods_hoverEnd_$$($JSCompiler_StaticMethods_hoverEnd_$self$$) {
  $JSCompiler_StaticMethods_hoverEnd_$self$$.$_hoverTrigger$ && clearTimeout($JSCompiler_StaticMethods_hoverEnd_$self$$.$_hoverTrigger$);
  $JSCompiler_StaticMethods_hoverEnd_$self$$.dispatchEvent(new $X$event$HoverEndEvent$$)
}
$JSCompiler_prototypeAlias$$.$onMouseWheel$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$onMouseWheel_$ = function $$JSCompiler_prototypeAlias$$$$onMouseWheel_$$($event$$19$$) {
  this.mouseWheelEvent = $event$$19$$;
  eval("this.onMouseWheel(this['mouseWheelEvent'])");
  $JSCompiler_StaticMethods_hoverEnd_$$(this);
  $event$$19$$.preventDefault();
  var $e$$45$$ = new $X$event$ZoomEvent$$;
  $goog$isDefAndNotNull$$($event$$19$$.$deltaY$) || ($event$$19$$.$deltaY$ = 0);
  $e$$45$$.$_in$ = 0 > $event$$19$$.$deltaY$;
  $e$$45$$.$_fast$ = $JSCompiler_alias_TRUE$$;
  this.dispatchEvent($e$$45$$)
};
$JSCompiler_prototypeAlias$$.$onKey$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$onKey_$ = function $$JSCompiler_prototypeAlias$$$$onKey_$$($e$$46_event$$21$$) {
  if(this.$_mouseInside$) {
    this.keyEvent = $e$$46_event$$21$$;
    eval("this.onKey(this['keyEvent'])");
    $JSCompiler_StaticMethods_hoverEnd_$$(this);
    var $alt$$ = $e$$46_event$$21$$.altKey, $ctrl_distance$$4$$ = $e$$46_event$$21$$.ctrlKey, $meta$$ = $e$$46_event$$21$$.metaKey, $shift$$ = $e$$46_event$$21$$.shiftKey, $keyCode$$4$$ = $e$$46_event$$21$$.keyCode;
    if(82 == $keyCode$$4$$ && !$alt$$ && !$ctrl_distance$$4$$ && !$meta$$ && !$shift$$) {
      $e$$46_event$$21$$.preventDefault(), $e$$46_event$$21$$ = new $X$event$ResetViewEvent$$, this.dispatchEvent($e$$46_event$$21$$)
    }else {
      if(37 <= $keyCode$$4$$ && 40 >= $keyCode$$4$$ && ($e$$46_event$$21$$.preventDefault(), $e$$46_event$$21$$ = $shift$$ ? new $X$event$PanEvent$$ : $alt$$ ? new $X$event$ZoomEvent$$ : new $X$event$RotateEvent$$)) {
        $ctrl_distance$$4$$ = new $goog$math$Vec2$$(0, 0), 37 == $keyCode$$4$$ ? ($ctrl_distance$$4$$.x = 5, $alt$$ && ($e$$46_event$$21$$.$_in$ = $JSCompiler_alias_TRUE$$, $e$$46_event$$21$$.$_fast$ = $JSCompiler_alias_FALSE$$)) : 39 == $keyCode$$4$$ ? ($ctrl_distance$$4$$.x = -5, $alt$$ && ($e$$46_event$$21$$.$_in$ = $JSCompiler_alias_FALSE$$, $e$$46_event$$21$$.$_fast$ = $JSCompiler_alias_FALSE$$)) : 38 == $keyCode$$4$$ ? ($ctrl_distance$$4$$.y = 5, $alt$$ && ($e$$46_event$$21$$.$_in$ = $JSCompiler_alias_TRUE$$, 
        $e$$46_event$$21$$.$_fast$ = $JSCompiler_alias_TRUE$$)) : 40 == $keyCode$$4$$ && ($ctrl_distance$$4$$.y = -5, $alt$$ && ($e$$46_event$$21$$.$_in$ = $JSCompiler_alias_FALSE$$, $e$$46_event$$21$$.$_fast$ = $JSCompiler_alias_TRUE$$)), $e$$46_event$$21$$.$_distance$ = $ctrl_distance$$4$$, this.dispatchEvent($e$$46_event$$21$$)
      }
    }
  }
};
$goog$exportSymbol$$("X.interactor", $X$interactor$$);
$goog$exportSymbol$$("X.interactor.prototype.init", $X$interactor$$.prototype.$init$);
$goog$exportSymbol$$("X.interactor.prototype.onMouseDown", $X$interactor$$.prototype.$onMouseDown$);
$goog$exportSymbol$$("X.interactor.prototype.onMouseUp", $X$interactor$$.prototype.$onMouseUp$);
$goog$exportSymbol$$("X.interactor.prototype.onMouseMove", $X$interactor$$.prototype.$onMouseMove$);
$goog$exportSymbol$$("X.interactor.prototype.onMouseWheel", $X$interactor$$.prototype.$onMouseWheel$);
$goog$exportSymbol$$("X.interactor.prototype.onKey", $X$interactor$$.prototype.$onKey$);
function $X$caption$$($parent$$23$$, $x$$69$$, $y$$41$$, $interactor$$) {
  $goog$isDefAndNotNull$$($parent$$23$$) || $JSCompiler_alias_THROW$$(Error("No valid parent element."));
  (!$goog$isNumber$$($x$$69$$) || !$goog$isNumber$$($y$$41$$)) && $JSCompiler_alias_THROW$$(Error("Invalid coordinates."));
  (!$goog$isDefAndNotNull$$($interactor$$) || !($interactor$$ instanceof $X$interactor$$)) && $JSCompiler_alias_THROW$$(Error("Invalid interactor."));
  $goog$ui$Tooltip$$.call(this);
  this._className = "caption";
  this.$_parent$ = $parent$$23$$;
  this.$_x$ = $x$$69$$;
  this.$_y$ = $y$$41$$;
  this.$_interactor$ = $interactor$$;
  this.$_style$ = $JSCompiler_alias_NULL$$;
  this.$_css$ = [];
  this.$_css$ = [".x-tooltip {\n  background: #C0C0FF;\n  color: #000000;\n  border: 1px solid infotext;\n  padding: 1px;\n  font-family: sans-serif;\n}"];
  $goog$events$listenOnce$$($interactor$$, $X$event$events$HOVER_END$$, this.$kill$.bind(this));
  this.$init_$()
}
$goog$inherits$$($X$caption$$, $goog$ui$Tooltip$$);
$X$caption$$.prototype.$init_$ = function $$X$caption$$$$$init_$$() {
  if("static" == this.$_parent$.style.position || "" == this.$_parent$.style.position) {
    this.$_parent$.style.position = "relative"
  }
  var $head$$1$$ = document.getElementsByTagName("head")[0], $style$$14$$ = $goog$dom$createDom$$("style");
  $style$$14$$.type = "text/css";
  $style$$14$$.media = "screen";
  var $css$$ = document.createTextNode(this.$_css$[0]);
  $head$$1$$.appendChild($style$$14$$);
  $style$$14$$.appendChild($css$$);
  this.$_style$ = $style$$14$$;
  this.$setPosition$(new $goog$positioning$ViewportPosition$$(this.$_x$, this.$_y$));
  this.$setVisible$($JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_attach$$(this, this.$_parent$);
  this.$getElement$().classList.add("x-tooltip")
};
$X$caption$$.prototype.$kill$ = function $$X$caption$$$$$kill$$() {
  this.$setVisible$($JSCompiler_alias_FALSE$$);
  this.$_style$ && $goog$dom$removeNode$$(this.$_style$);
  this.$getElement$() && $goog$dom$removeNode$$(this.$getElement$());
  this.$_style$ = $JSCompiler_alias_NULL$$
};
function $X$shaders$$() {
  $X$base$$.call(this);
  this._className = "shader";
  this.$_vertexshaderSource$ = "";
  this.$_vertexshaderSource$ = "precision mediump float;\n\nattribute vec3 vertexPosition;\nattribute vec3 vertexNormal;\nattribute vec3 vertexColor;\nattribute vec2 vertexTexturePos;\nattribute float vertexScalar;\n\nuniform mat4 view;\nuniform mat4 perspective;\nuniform vec3 center;\nuniform mat4 objectTransform;\nuniform bool useObjectColor;\nuniform bool useScalars;\nuniform bool scalarsReplaceMode;\nuniform float scalarsMin;\nuniform float scalarsMax;\nuniform vec3 scalarsMinColor;\nuniform vec3 scalarsMaxColor;\nuniform float scalarsMinThreshold;\nuniform float scalarsMaxThreshold;\nuniform vec3 volumeScalarMin;\nuniform vec3 volumeScalarMax;\nuniform vec3 objectColor;\nuniform float pointSize;\n\nvarying float fDiscardNow;\nvarying vec4 fVertexPosition;\nvarying vec3 fragmentColor;\nvarying vec2 fragmentTexturePos;\nvarying vec3 fVertexNormal;\nvarying vec3 fTransformedVertexNormal;\n\nvoid main(void) {\n  fTransformedVertexNormal = mat3(view[0].xyz,view[1].xyz,view[2].xyz) * mat3(objectTransform[0].xyz,objectTransform[1].xyz,objectTransform[2].xyz) * vertexNormal;\n  fVertexNormal = vertexNormal;\n  fDiscardNow = 0.0;\n  vec3 vertexPosition2 = vertexPosition - center;\n  fVertexPosition = view * objectTransform * vec4(vertexPosition2, 1.0);\n  fragmentTexturePos = vertexTexturePos;\n  if (useScalars) {\n    float scalarValue = vertexScalar;\n    if (scalarValue < scalarsMinThreshold || scalarValue > scalarsMaxThreshold) {\n      if (scalarsReplaceMode) {\n        fragmentColor = objectColor;\n      } else {\n        fDiscardNow = 1.0;\n      }\n    } else {\n      if (scalarsReplaceMode) {\n        fragmentColor = scalarValue * scalarsMaxColor + (1.0 - scalarValue) * scalarsMinColor;\n      } else {\n        fragmentColor = vertexColor;\n      }\n    }\n  } else if (useObjectColor) {\n    fragmentColor = objectColor;\n  } else {\n    fragmentColor = vertexColor;\n  }\n  gl_PointSize = pointSize;\n  gl_Position = perspective * fVertexPosition;\n}\n";
  this.$_fragmentshaderSource$ = "";
  this.$_fragmentshaderSource$ = "precision mediump float;\n\nuniform bool usePicking;\nuniform bool useTexture;\nuniform bool useTextureThreshold;\nuniform bool useLabelMapTexture;\nuniform sampler2D textureSampler;\nuniform sampler2D textureSampler2;\nuniform float objectOpacity;\nuniform float labelMapOpacity;\nuniform float volumeLowerThreshold;\nuniform float volumeUpperThreshold;\nuniform float volumeScalarMin;\nuniform float volumeScalarMax;\n\nvarying float fDiscardNow;\nvarying vec4 fVertexPosition;\nvarying vec3 fragmentColor;\nvarying vec2 fragmentTexturePos;\nvarying vec3 fVertexNormal;\nvarying vec3 fTransformedVertexNormal;\n\nvoid main(void) {\n if (fDiscardNow > 0.0) {\n   discard;\n }\n if (usePicking) {\n   gl_FragColor = vec4(fragmentColor, 1.0);\n } else if (useTexture) {\n   vec4 texture1 = texture2D(textureSampler,fragmentTexturePos);\n   vec4 textureSum = texture1;\n   if (useLabelMapTexture) {\n     vec4 texture2 = texture2D(textureSampler2,fragmentTexturePos);\n     if (texture2.a > 0.0) {\n       if (labelMapOpacity < 1.0) {\n         textureSum = mix(texture2, textureSum, 1.0 - labelMapOpacity);\n       } else {\n         textureSum = texture2;\n       }\n     }\n   }\n   if (useTextureThreshold) {\n     float _volumeLowerThreshold = (volumeLowerThreshold / volumeScalarMax);\n     float _volumeUpperThreshold = (volumeUpperThreshold / volumeScalarMax);\n     if (texture1.r < _volumeLowerThreshold ||\n         texture1.r > _volumeUpperThreshold) {\n       discard;\n     };\n   };\n   gl_FragColor = textureSum;\n   gl_FragColor.a = objectOpacity;\n } else {\n   vec3 nNormal = normalize(fTransformedVertexNormal);\n   if (fVertexNormal == vec3(0.0,0.0,0.0)) {\n     gl_FragColor = vec4(fragmentColor,1.0);\n     return;\n   }\n   vec3 light = vec3(0.0, 0.0, 1.0);\n   vec3 lightDirection = vec3(0,0,-10);\n   lightDirection = normalize(lightDirection);\n   vec3 eyeDirection = normalize(-fVertexPosition.xyz);\n   vec3 reflectionDirection = reflect(-lightDirection, nNormal);\n   float specular = pow(max(dot(reflectionDirection, eyeDirection), 0.0), 10.0);\n   float diffuse = 0.8 * max(dot(nNormal, light), 0.0);\n   float ambient = 0.3;\n   gl_FragColor = vec4(fragmentColor * ambient +\n                       fragmentColor * diffuse +\n                       vec3(0.2, 0.2, 0.2) * specular,\n                       objectOpacity);\n }\n}\n"
}
$goog$inherits$$($X$shaders$$, $X$base$$);
var $X$shaders$attributes$$ = {$VERTEXPOSITION$:"vertexPosition", $VERTEXNORMAL$:"vertexNormal", $VERTEXCOLOR$:"vertexColor", $VERTEXTEXTUREPOS$:"vertexTexturePos", $VERTEXSCALAR$:"vertexScalar"}, $X$shaders$uniforms$$ = {$VIEW$:"view", $PERSPECTIVE$:"perspective", $CENTER$:"center", $OBJECTTRANSFORM$:"objectTransform", $USEOBJECTCOLOR$:"useObjectColor", $OBJECTCOLOR$:"objectColor", $USESCALARS$:"useScalars", $SCALARSREPLACEMODE$:"scalarsReplaceMode", $SCALARSMIN$:"scalarsMin", $SCALARSMAX$:"scalarsMax", 
$SCALARSMINCOLOR$:"scalarsMinColor", $SCALARSMAXCOLOR$:"scalarsMaxColor", $SCALARSMINTHRESHOLD$:"scalarsMinThreshold", $SCALARSMAXTHRESHOLD$:"scalarsMaxThreshold", $POINTSIZE$:"pointSize", $OBJECTOPACITY$:"objectOpacity", $NORMAL$:"normal", $USEPICKING$:"usePicking", $USETEXTURE$:"useTexture", $USETEXTURETHRESHOLD$:"useTextureThreshold", $USELABELMAPTEXTURE$:"useLabelMapTexture", $LABELMAPOPACITY$:"labelMapOpacity", $TEXTURESAMPLER$:"textureSampler", $TEXTURESAMPLER2$:"textureSampler2", $VOLUMELOWERTHRESHOLD$:"volumeLowerThreshold", 
$VOLUMEUPPERTHRESHOLD$:"volumeUpperThreshold", $VOLUMESCALARMIN$:"volumeScalarMin", $VOLUMESCALARMAX$:"volumeScalarMax"};
function $JSCompiler_StaticMethods_validate$$($JSCompiler_StaticMethods_validate$self$$) {
  var $uniforms$$ = Object.keys($X$shaders$uniforms$$);
  Object.keys($X$shaders$attributes$$).every(function($a$$59$$) {
    $a$$59$$ = eval("X.shaders.attributes." + $a$$59$$);
    return-1 != this.$_vertexshaderSource$.search($a$$59$$) || -1 != this.$_fragmentshaderSource$.search($a$$59$$)
  }.bind($JSCompiler_StaticMethods_validate$self$$)) || $JSCompiler_alias_THROW$$(Error("Could not find all attributes in the shader sources."));
  $uniforms$$.every(function($u$$) {
    $u$$ = eval("X.shaders.uniforms." + $u$$);
    return-1 != this.$_vertexshaderSource$.search($u$$) || -1 != this.$_fragmentshaderSource$.search($u$$)
  }.bind($JSCompiler_StaticMethods_validate$self$$)) || $JSCompiler_alias_THROW$$(Error("Could not find all uniforms in the shader sources."))
}
$goog$exportSymbol$$("X.shaders.attributes", $X$shaders$attributes$$);
$goog$exportSymbol$$("X.shaders.uniforms", $X$shaders$uniforms$$);
function $X$buffer$$($glBuffer$$, $itemCount$$, $itemSize$$) {
  $goog$isDefAndNotNull$$($glBuffer$$) || $JSCompiler_alias_THROW$$(Error("Invalid GL Buffer."));
  $goog$isDefAndNotNull$$($itemCount$$) || $JSCompiler_alias_THROW$$(Error("Invalid number of items."));
  $goog$isDefAndNotNull$$($itemSize$$) || $JSCompiler_alias_THROW$$(Error("Invalid item size."));
  $X$base$$.call(this);
  this._className = "buffer";
  this.$_glBuffer$ = $glBuffer$$;
  this.$_itemCount$ = $itemCount$$;
  this.$_itemSize$ = $itemSize$$
}
$goog$inherits$$($X$buffer$$, $X$base$$);
function $X$array$$($comparator$$) {
  $X$base$$.call(this);
  this._className = "array";
  this.$_array$ = [];
  this.$_comparator$ = $comparator$$
}
$goog$inherits$$($X$array$$, $X$base$$);
$X$array$$.prototype.add = function $$X$array$$$$add$($object$$16$$) {
  this.$_array$.push($object$$16$$);
  return $JSCompiler_alias_TRUE$$
};
$X$array$$.prototype.clear = function $$X$array$$$$clear$() {
  this.$_array$.length = 0
};
function $JSCompiler_StaticMethods_msort_$$($JSCompiler_StaticMethods_msort_$self$$, $begin$$13_begin$$inline_274$$, $end$$4$$) {
  var $begin_right$$1_size$$17$$ = $end$$4$$ - $begin$$13_begin$$inline_274$$;
  if(!(2 > $begin_right$$1_size$$17$$)) {
    $begin_right$$1_size$$17$$ = $begin$$13_begin$$inline_274$$ + Math.floor($begin_right$$1_size$$17$$ / 2);
    $JSCompiler_StaticMethods_msort_$$($JSCompiler_StaticMethods_msort_$self$$, $begin$$13_begin$$inline_274$$, $begin_right$$1_size$$17$$);
    for($JSCompiler_StaticMethods_msort_$$($JSCompiler_StaticMethods_msort_$self$$, $begin_right$$1_size$$17$$, $end$$4$$);$begin$$13_begin$$inline_274$$ < $begin_right$$1_size$$17$$;++$begin$$13_begin$$inline_274$$) {
      if(0 < $JSCompiler_StaticMethods_msort_$self$$.$_comparator$($JSCompiler_StaticMethods_msort_$self$$.$_array$[$begin$$13_begin$$inline_274$$], $JSCompiler_StaticMethods_msort_$self$$.$_array$[$begin_right$$1_size$$17$$])) {
        var $v$$inline_277_v$$inline_609$$ = $JSCompiler_StaticMethods_msort_$self$$.$_array$[$begin$$13_begin$$inline_274$$];
        $JSCompiler_StaticMethods_msort_$self$$.$_array$[$begin$$13_begin$$inline_274$$] = $JSCompiler_StaticMethods_msort_$self$$.$_array$[$begin_right$$1_size$$17$$];
        for(var $JSCompiler_StaticMethods_insert_$self$$inline_606$$ = $JSCompiler_StaticMethods_msort_$self$$, $begin$$inline_607$$ = $begin_right$$1_size$$17$$, $end$$inline_608$$ = $end$$4$$;$begin$$inline_607$$ + 1 < $end$$inline_608$$ && 0 > $JSCompiler_StaticMethods_insert_$self$$inline_606$$.$_comparator$($JSCompiler_StaticMethods_insert_$self$$inline_606$$.$_array$[$begin$$inline_607$$ + 1], $v$$inline_277_v$$inline_609$$);) {
          var $JSCompiler_StaticMethods_swap_$self$$inline_690$$ = $JSCompiler_StaticMethods_insert_$self$$inline_606$$, $index2$$inline_692$$ = $begin$$inline_607$$ + 1, $tmp$$inline_693$$ = $JSCompiler_StaticMethods_swap_$self$$inline_690$$.$_array$[$begin$$inline_607$$];
          $JSCompiler_StaticMethods_swap_$self$$inline_690$$.$_array$[$begin$$inline_607$$] = $JSCompiler_StaticMethods_swap_$self$$inline_690$$.$_array$[$index2$$inline_692$$];
          $JSCompiler_StaticMethods_swap_$self$$inline_690$$.$_array$[$index2$$inline_692$$] = $tmp$$inline_693$$;
          ++$begin$$inline_607$$
        }
        $JSCompiler_StaticMethods_insert_$self$$inline_606$$.$_array$[$begin$$inline_607$$] = $v$$inline_277_v$$inline_609$$
      }
    }
  }
}
$X$array$$.prototype.sort = function $$X$array$$$$sort$() {
  $JSCompiler_StaticMethods_msort_$$(this, 0, this.$_array$.length)
};
function $X$parser$$() {
  $X$base$$.call(this);
  this._className = "parser"
}
$goog$inherits$$($X$parser$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$parser$$.prototype;
$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$() {
  $JSCompiler_alias_THROW$$(Error("The function parse() should be overloaded."))
};
$JSCompiler_prototypeAlias$$.$parseFloat32$ = function $$JSCompiler_prototypeAlias$$$$parseFloat32$$($data$$23$$, $offset$$19$$) {
  var $b1$$1_mantissa$$ = this.$parseUChar8$($data$$23$$, $offset$$19$$ + 2), $b0$$ = this.$parseUChar8$($data$$23$$, $offset$$19$$ + 3), $exponent$$ = ($b0$$ << 1 & 255 | $b1$$1_mantissa$$ >> 7) - 127, $b1$$1_mantissa$$ = ($b1$$1_mantissa$$ & 127) << 16 | this.$parseUChar8$($data$$23$$, $offset$$19$$ + 1) << 8 | this.$parseUChar8$($data$$23$$, $offset$$19$$);
  return 0 == $b1$$1_mantissa$$ && -127 == $exponent$$ ? 0 : (1 - 2 * ($b0$$ >> 7)) * (1 + $b1$$1_mantissa$$ * Math.pow(2, -23)) * Math.pow(2, $exponent$$)
};
function $JSCompiler_StaticMethods_parseFloat32EndianSwapped$$($JSCompiler_StaticMethods_parseFloat32EndianSwapped$self_mantissa$$1$$, $data$$24$$, $offset$$20$$) {
  var $b0$$1$$ = $JSCompiler_StaticMethods_parseFloat32EndianSwapped$self_mantissa$$1$$.$parseUChar8$($data$$24$$, $offset$$20$$), $b1$$2$$ = $JSCompiler_StaticMethods_parseFloat32EndianSwapped$self_mantissa$$1$$.$parseUChar8$($data$$24$$, $offset$$20$$ + 1), $exponent$$1$$ = ($b0$$1$$ << 1 & 255 | $b1$$2$$ >> 7) - 127, $JSCompiler_StaticMethods_parseFloat32EndianSwapped$self_mantissa$$1$$ = ($b1$$2$$ & 127) << 16 | $JSCompiler_StaticMethods_parseFloat32EndianSwapped$self_mantissa$$1$$.$parseUChar8$($data$$24$$, 
  $offset$$20$$ + 2) << 8 | $JSCompiler_StaticMethods_parseFloat32EndianSwapped$self_mantissa$$1$$.$parseUChar8$($data$$24$$, $offset$$20$$ + 3);
  return 0 == $JSCompiler_StaticMethods_parseFloat32EndianSwapped$self_mantissa$$1$$ && -127 == $exponent$$1$$ ? 0 : (1 - 2 * ($b0$$1$$ >> 7)) * (1 + $JSCompiler_StaticMethods_parseFloat32EndianSwapped$self_mantissa$$1$$ * Math.pow(2, -23)) * Math.pow(2, $exponent$$1$$)
}
function $JSCompiler_StaticMethods_parseFloat32Array$$($JSCompiler_StaticMethods_parseFloat32Array$self$$, $data$$25$$, $offset$$21$$, $elements$$) {
  var $arr$$60$$ = [], $max$$1$$ = 0, $min$$1$$ = Infinity, $i$$153$$;
  for($i$$153$$ = 0;$i$$153$$ < $elements$$;$i$$153$$++) {
    var $val$$39$$ = $JSCompiler_StaticMethods_parseFloat32Array$self$$.$parseFloat32$($data$$25$$, $offset$$21$$ + 4 * $i$$153$$);
    $arr$$60$$[$i$$153$$] = $val$$39$$;
    $max$$1$$ = Math.max($max$$1$$, $val$$39$$);
    $min$$1$$ = Math.min($min$$1$$, $val$$39$$)
  }
  return[$arr$$60$$, $max$$1$$, $min$$1$$]
}
$JSCompiler_prototypeAlias$$.$parseFloat32EndianSwappedArray$ = function $$JSCompiler_prototypeAlias$$$$parseFloat32EndianSwappedArray$$($data$$26$$, $offset$$22$$, $elements$$1$$) {
  var $arr$$61$$ = [], $max$$2$$ = 0, $min$$2$$ = Infinity, $i$$154$$;
  for($i$$154$$ = 0;$i$$154$$ < $elements$$1$$;$i$$154$$++) {
    var $val$$40$$ = $JSCompiler_StaticMethods_parseFloat32EndianSwapped$$(this, $data$$26$$, $offset$$22$$ + 4 * $i$$154$$);
    $arr$$61$$[$i$$154$$] = $val$$40$$;
    $max$$2$$ = Math.max($max$$2$$, $val$$40$$);
    $min$$2$$ = Math.min($min$$2$$, $val$$40$$)
  }
  return[$arr$$61$$, $max$$2$$, $min$$2$$]
};
function $JSCompiler_StaticMethods_parseUInt32$$($JSCompiler_StaticMethods_parseUInt32$self$$, $data$$27$$, $offset$$23$$) {
  return($JSCompiler_StaticMethods_parseUInt32$self$$.$parseUChar8$($data$$27$$, $offset$$23$$ + 3) << 24) + ($JSCompiler_StaticMethods_parseUInt32$self$$.$parseUChar8$($data$$27$$, $offset$$23$$ + 2) << 16) + ($JSCompiler_StaticMethods_parseUInt32$self$$.$parseUChar8$($data$$27$$, $offset$$23$$ + 1) << 8) + $JSCompiler_StaticMethods_parseUInt32$self$$.$parseUChar8$($data$$27$$, $offset$$23$$)
}
function $JSCompiler_StaticMethods_parseUInt32EndianSwapped$$($JSCompiler_StaticMethods_parseUInt32EndianSwapped$self$$, $data$$28$$, $offset$$24$$) {
  return($JSCompiler_StaticMethods_parseUInt32EndianSwapped$self$$.$parseUChar8$($data$$28$$, $offset$$24$$) << 24) + ($JSCompiler_StaticMethods_parseUInt32EndianSwapped$self$$.$parseUChar8$($data$$28$$, $offset$$24$$ + 1) << 16) + ($JSCompiler_StaticMethods_parseUInt32EndianSwapped$self$$.$parseUChar8$($data$$28$$, $offset$$24$$ + 2) << 8) + $JSCompiler_StaticMethods_parseUInt32EndianSwapped$self$$.$parseUChar8$($data$$28$$, $offset$$24$$ + 3)
}
$JSCompiler_prototypeAlias$$.$parseUInt32EndianSwappedArray$ = function $$JSCompiler_prototypeAlias$$$$parseUInt32EndianSwappedArray$$($data$$29$$, $offset$$25$$, $elements$$2$$) {
  var $arr$$62$$ = [], $max$$3$$ = 0, $min$$3$$ = Infinity, $i$$155$$;
  for($i$$155$$ = 0;$i$$155$$ < $elements$$2$$;$i$$155$$++) {
    var $val$$41$$ = $JSCompiler_StaticMethods_parseUInt32EndianSwapped$$(this, $data$$29$$, $offset$$25$$ + 4 * $i$$155$$);
    $arr$$62$$[$i$$155$$] = $val$$41$$;
    $max$$3$$ = Math.max($max$$3$$, $val$$41$$);
    $min$$3$$ = Math.min($min$$3$$, $val$$41$$)
  }
  return[$arr$$62$$, $max$$3$$, $min$$3$$]
};
$JSCompiler_prototypeAlias$$.$parseUInt16$ = function $$JSCompiler_prototypeAlias$$$$parseUInt16$$($data$$31$$, $offset$$27$$) {
  return(this.$parseUChar8$($data$$31$$, $offset$$27$$ + 1) << 8) + this.$parseUChar8$($data$$31$$, $offset$$27$$)
};
$JSCompiler_prototypeAlias$$.$parseUInt16EndianSwappedArray$ = function $$JSCompiler_prototypeAlias$$$$parseUInt16EndianSwappedArray$$($data$$34$$, $offset$$30$$, $elements$$4$$) {
  var $arr$$64$$ = [], $max$$5$$ = 0, $min$$5$$ = Infinity, $i$$157$$;
  for($i$$157$$ = 0;$i$$157$$ < $elements$$4$$;$i$$157$$++) {
    var $val$$43$$ = (this.$parseUChar8$($data$$34$$, $offset$$30$$ + 2 * $i$$157$$) << 8) + this.$parseUChar8$($data$$34$$, $offset$$30$$ + 2 * $i$$157$$ + 1);
    $arr$$64$$[$i$$157$$] = $val$$43$$;
    $max$$5$$ = Math.max($max$$5$$, $val$$43$$);
    $min$$5$$ = Math.min($min$$5$$, $val$$43$$)
  }
  return[$arr$$64$$, $max$$5$$, $min$$5$$]
};
$JSCompiler_prototypeAlias$$.$parseSChar8$ = function $$JSCompiler_prototypeAlias$$$$parseSChar8$$($data$$35$$, $offset$$31$$) {
  var $b$$56$$ = this.$parseUChar8$($data$$35$$, $offset$$31$$);
  return 127 < $b$$56$$ ? $b$$56$$ - 256 : $b$$56$$
};
$JSCompiler_prototypeAlias$$.$parseUChar8$ = function $$JSCompiler_prototypeAlias$$$$parseUChar8$$($data$$36$$, $offset$$32$$) {
  return $data$$36$$.charCodeAt($offset$$32$$) & 255
};
$JSCompiler_prototypeAlias$$.$parseUChar8Array$ = function $$JSCompiler_prototypeAlias$$$$parseUChar8Array$$($data$$37$$, $offset$$33$$, $elements$$5$$) {
  var $arr$$65$$ = [], $max$$6$$ = 0, $min$$6$$ = Infinity, $i$$158$$;
  for($i$$158$$ = 0;$i$$158$$ < $elements$$5$$;$i$$158$$++) {
    var $val$$44$$ = this.$parseUChar8$($data$$37$$, $offset$$33$$ + $i$$158$$);
    $arr$$65$$[$i$$158$$] = $val$$44$$;
    $max$$6$$ = Math.max($max$$6$$, $val$$44$$);
    $min$$6$$ = Math.min($min$$6$$, $val$$44$$)
  }
  return[$arr$$65$$, $max$$6$$, $min$$6$$]
};
function $JSCompiler_StaticMethods_reslice$$($object$$18$$, $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$, $colsCount_sizes$$, $max$$7$$) {
  for(var $slices$$ = $colsCount_sizes$$[2], $rowsCount$$ = $colsCount_sizes$$[1], $colsCount_sizes$$ = $colsCount_sizes$$[0], $hasLabelMap$$ = $object$$18$$.$_labelMap$ != $JSCompiler_alias_NULL$$, $numberPixelsPerSlice$$ = $rowsCount$$ * $colsCount_sizes$$, $image$$3$$ = Array($slices$$), $iS_z$$4$$ = 0;$iS_z$$4$$ < $slices$$;$iS_z$$4$$++) {
    $image$$3$$[$iS_z$$4$$] = Array($rowsCount$$);
    for(var $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$ = 0;$JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$ < $rowsCount$$;$JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$++) {
      $image$$3$$[$iS_z$$4$$][$JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$] = Array($colsCount_sizes$$)
    }
  }
  for(var $pixelTexture_pixelValue$$1$$ = 0, $iS_z$$4$$ = $iS_z$$4$$ = 0;$iS_z$$4$$ < $slices$$;$iS_z$$4$$++) {
    for(var $currentSlice$$ = $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.slice($iS_z$$4$$ * $numberPixelsPerSlice$$, ($iS_z$$4$$ + 1) * $numberPixelsPerSlice$$), $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$ = 
    new Uint8Array(4 * $numberPixelsPerSlice$$), $JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$ = 0, $col$$19$$ = 0, $p$$9$$ = 0, $JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$ = 0;$JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$ < $rowsCount$$;$JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$++) {
      for($col$$19$$ = 0;$col$$19$$ < $colsCount_sizes$$;$col$$19$$++) {
        var $pixelTexture_pixelValue$$1$$ = $currentSlice$$[$p$$9$$], $pixelValue_r$$ = 0, $pixelValue_g$$ = 0, $pixelValue_b$$ = 0, $lookupValue_pixelValue_a$$ = 0;
        $object$$18$$.$_colorTable$ ? (($lookupValue_pixelValue_a$$ = $object$$18$$.$_colorTable$.$_map$.get(Math.floor($pixelTexture_pixelValue$$1$$))) || ($lookupValue_pixelValue_a$$ = $object$$18$$.$_colorTable$.$_map$.get($object$$18$$.$_colorTable$.$_map$.$getCount$() - 1)), $pixelValue_r$$ = 255 * $lookupValue_pixelValue_a$$[1], $pixelValue_g$$ = 255 * $lookupValue_pixelValue_a$$[2], $pixelValue_b$$ = 255 * $lookupValue_pixelValue_a$$[3], $lookupValue_pixelValue_a$$ = 255 * $lookupValue_pixelValue_a$$[4]) : 
        ($pixelValue_r$$ = $pixelValue_g$$ = $pixelValue_b$$ = 255 * ($pixelTexture_pixelValue$$1$$ / $max$$7$$), $lookupValue_pixelValue_a$$ = 255);
        var $textureStartIndex$$ = 4 * $p$$9$$;
        $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$[$textureStartIndex$$] = $pixelValue_r$$;
        $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$[++$textureStartIndex$$] = $pixelValue_g$$;
        $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$[++$textureStartIndex$$] = $pixelValue_b$$;
        $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$[++$textureStartIndex$$] = $lookupValue_pixelValue_a$$;
        $image$$3$$[$iS_z$$4$$][$JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$][$col$$19$$] = $pixelTexture_pixelValue$$1$$;
        $p$$9$$++
      }
    }
    $JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$ = $pixelTexture_pixelValue$$1$$ = new $X$texture$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$.$_rawData$ = $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$.$_dirty$ = $JSCompiler_alias_TRUE$$;
    $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$ = $pixelTexture_pixelValue$$1$$;
    $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$.$_rawDataWidth$ = $colsCount_sizes$$;
    $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$.$_dirty$ = $JSCompiler_alias_TRUE$$;
    $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$ = $pixelTexture_pixelValue$$1$$;
    $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$.$_rawDataHeight$ = $rowsCount$$;
    $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$.$_dirty$ = $JSCompiler_alias_TRUE$$;
    $currentSlice$$ = $object$$18$$.$_slicesZ$.children()[$iS_z$$4$$];
    $currentSlice$$.$setTexture$($pixelTexture_pixelValue$$1$$);
    $hasLabelMap$$ && ($currentSlice$$.$_labelMap$ = $object$$18$$.$_labelMap$.$_slicesZ$.children()[$iS_z$$4$$].$_texture$)
  }
  for($JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$ = 0;$JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$ < $rowsCount$$;$JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$++) {
    $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$ = new Uint8Array(4 * $slices$$ * $colsCount_sizes$$);
    for($iS_z$$4$$ = $p$$9$$ = 0;$iS_z$$4$$ < $slices$$;$iS_z$$4$$++) {
      for($col$$19$$ = 0;$col$$19$$ < $colsCount_sizes$$;$col$$19$$++) {
        $pixelTexture_pixelValue$$1$$ = $image$$3$$[$iS_z$$4$$][$JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$][$col$$19$$], $object$$18$$.$_colorTable$ ? (($lookupValue_pixelValue_a$$ = $object$$18$$.$_colorTable$.$_map$.get(Math.floor($pixelTexture_pixelValue$$1$$))) || ($lookupValue_pixelValue_a$$ = $object$$18$$.$_colorTable$.$_map$.get($object$$18$$.$_colorTable$.$_map$.$getCount$() - 1)), $pixelValue_r$$ = 255 * $lookupValue_pixelValue_a$$[1], $pixelValue_g$$ = 255 * $lookupValue_pixelValue_a$$[2], 
        $pixelValue_b$$ = 255 * $lookupValue_pixelValue_a$$[3], $lookupValue_pixelValue_a$$ = 255 * $lookupValue_pixelValue_a$$[4]) : ($pixelValue_r$$ = $pixelValue_g$$ = $pixelValue_b$$ = 255 * ($pixelTexture_pixelValue$$1$$ / $max$$7$$), $lookupValue_pixelValue_a$$ = 255), $textureStartIndex$$ = 4 * $p$$9$$, $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$[$textureStartIndex$$] = $pixelValue_r$$, $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$[++$textureStartIndex$$] = 
        $pixelValue_g$$, $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$[++$textureStartIndex$$] = $pixelValue_b$$, $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$[++$textureStartIndex$$] = $lookupValue_pixelValue_a$$, $p$$9$$++
      }
    }
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$ = $pixelTexture_pixelValue$$1$$ = new $X$texture$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.$_rawData$ = $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.$_dirty$ = $JSCompiler_alias_TRUE$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$ = $pixelTexture_pixelValue$$1$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.$_rawDataWidth$ = $colsCount_sizes$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.$_dirty$ = $JSCompiler_alias_TRUE$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$ = $pixelTexture_pixelValue$$1$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.$_rawDataHeight$ = $slices$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.$_dirty$ = $JSCompiler_alias_TRUE$$;
    $currentSlice$$ = $object$$18$$.$_slicesY$.children()[$JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$];
    $currentSlice$$.$setTexture$($pixelTexture_pixelValue$$1$$);
    $hasLabelMap$$ && ($currentSlice$$.$_labelMap$ = $object$$18$$.$_labelMap$.$_slicesY$.children()[$JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$].$_texture$)
  }
  for($col$$19$$ = 0;$col$$19$$ < $colsCount_sizes$$;$col$$19$$++) {
    $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$ = new Uint8Array(4 * $slices$$ * $rowsCount$$);
    for($iS_z$$4$$ = $p$$9$$ = 0;$iS_z$$4$$ < $slices$$;$iS_z$$4$$++) {
      for($JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$ = 0;$JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$ < $rowsCount$$;$JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$++) {
        $pixelTexture_pixelValue$$1$$ = $image$$3$$[$iS_z$$4$$][$JSCompiler_StaticMethods_setRawData$self$$inline_279_row$$2$$][$col$$19$$], $object$$18$$.$_colorTable$ ? (($lookupValue_pixelValue_a$$ = $object$$18$$.$_colorTable$.$_map$.get(Math.floor($pixelTexture_pixelValue$$1$$))) || ($lookupValue_pixelValue_a$$ = $object$$18$$.$_colorTable$.$_map$.get($object$$18$$.$_colorTable$.$_map$.$getCount$() - 1)), $pixelValue_r$$ = 255 * $lookupValue_pixelValue_a$$[1], $pixelValue_g$$ = 255 * $lookupValue_pixelValue_a$$[2], 
        $pixelValue_b$$ = 255 * $lookupValue_pixelValue_a$$[3], $lookupValue_pixelValue_a$$ = 255 * $lookupValue_pixelValue_a$$[4]) : ($pixelValue_r$$ = $pixelValue_g$$ = $pixelValue_b$$ = 255 * ($pixelTexture_pixelValue$$1$$ / $max$$7$$), $lookupValue_pixelValue_a$$ = 255), $textureStartIndex$$ = 4 * $p$$9$$, $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$[$textureStartIndex$$] = $pixelValue_r$$, $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$[++$textureStartIndex$$] = 
        $pixelValue_g$$, $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$[++$textureStartIndex$$] = $pixelValue_b$$, $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$[++$textureStartIndex$$] = $lookupValue_pixelValue_a$$, $p$$9$$++
      }
    }
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$ = $pixelTexture_pixelValue$$1$$ = new $X$texture$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.$_rawData$ = $JSCompiler_StaticMethods_setRawDataHeight$self$$inline_285_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_282_iR_textureForCurrentSlice$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.$_dirty$ = $JSCompiler_alias_TRUE$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$ = $pixelTexture_pixelValue$$1$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.$_rawDataWidth$ = $rowsCount$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.$_dirty$ = $JSCompiler_alias_TRUE$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$ = $pixelTexture_pixelValue$$1$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.$_rawDataHeight$ = $slices$$;
    $JSCompiler_StaticMethods_setRawData$self$$inline_288_JSCompiler_StaticMethods_setRawData$self$$inline_297_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_294_JSCompiler_StaticMethods_setRawDataHeight$self$$inline_303_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_291_JSCompiler_StaticMethods_setRawDataWidth$self$$inline_300_datastream$$.$_dirty$ = $JSCompiler_alias_TRUE$$;
    $currentSlice$$ = $object$$18$$.$_slicesX$.children()[$col$$19$$];
    $currentSlice$$.$setTexture$($pixelTexture_pixelValue$$1$$);
    $hasLabelMap$$ && ($currentSlice$$.$_labelMap$ = $object$$18$$.$_labelMap$.$_slicesX$.children()[$col$$19$$].$_texture$)
  }
}
;function $X$parserSTL$$() {
  $X$parser$$.call(this);
  this._className = "parserSTL"
}
$goog$inherits$$($X$parserSTL$$, $X$parser$$);
$X$parserSTL$$.prototype.parse = function $$X$parserSTL$$$$parse$($object$$19$$, $data$$38$$) {
  for(var $dataAsArray_modifiedEvent$$1$$ = $data$$38$$.split("\n"), $numberOfLines$$ = $dataAsArray_modifiedEvent$$1$$.length, $p$$10$$ = $object$$19$$.$_points$, $n$$10$$ = $object$$19$$.$_normals$, $i$$159$$ = 0, $n2$$ = $numberOfLines$$ % 8;$n2$$--;) {
    this.$parseLine$($p$$10$$, $n$$10$$, $dataAsArray_modifiedEvent$$1$$[$i$$159$$]), $i$$159$$++
  }
  for($n2$$ = 0.125 * $numberOfLines$$ ^ 0;$n2$$--;) {
    this.$parseLine$($p$$10$$, $n$$10$$, $dataAsArray_modifiedEvent$$1$$[$i$$159$$]), $i$$159$$++, this.$parseLine$($p$$10$$, $n$$10$$, $dataAsArray_modifiedEvent$$1$$[$i$$159$$]), $i$$159$$++, this.$parseLine$($p$$10$$, $n$$10$$, $dataAsArray_modifiedEvent$$1$$[$i$$159$$]), $i$$159$$++, this.$parseLine$($p$$10$$, $n$$10$$, $dataAsArray_modifiedEvent$$1$$[$i$$159$$]), $i$$159$$++, this.$parseLine$($p$$10$$, $n$$10$$, $dataAsArray_modifiedEvent$$1$$[$i$$159$$]), $i$$159$$++, this.$parseLine$($p$$10$$, 
    $n$$10$$, $dataAsArray_modifiedEvent$$1$$[$i$$159$$]), $i$$159$$++, this.$parseLine$($p$$10$$, $n$$10$$, $dataAsArray_modifiedEvent$$1$$[$i$$159$$]), $i$$159$$++, this.$parseLine$($p$$10$$, $n$$10$$, $dataAsArray_modifiedEvent$$1$$[$i$$159$$]), $i$$159$$++
  }
  $dataAsArray_modifiedEvent$$1$$ = new $X$event$ModifiedEvent$$;
  $dataAsArray_modifiedEvent$$1$$.$_object$ = $object$$19$$;
  this.dispatchEvent($dataAsArray_modifiedEvent$$1$$)
};
$X$parserSTL$$.prototype.$parseLine$ = function $$X$parserSTL$$$$$parseLine$$($p$$11$$, $n$$11$$, $line$$1_x$$70$$) {
  var $line$$1_x$$70$$ = $line$$1_x$$70$$.replace(/^\s+|\s+$/g, ""), $lineFields_z$$5$$ = $line$$1_x$$70$$.split(" ");
  if("vertex" == $lineFields_z$$5$$[0]) {
    var $line$$1_x$$70$$ = parseFloat($lineFields_z$$5$$[1]), $y$$42$$ = parseFloat($lineFields_z$$5$$[2]), $lineFields_z$$5$$ = parseFloat($lineFields_z$$5$$[3]);
    $p$$11$$.add($line$$1_x$$70$$, $y$$42$$, $lineFields_z$$5$$)
  }else {
    "facet" == $lineFields_z$$5$$[0] && ($line$$1_x$$70$$ = parseFloat($lineFields_z$$5$$[2]), $y$$42$$ = parseFloat($lineFields_z$$5$$[3]), $lineFields_z$$5$$ = parseFloat($lineFields_z$$5$$[4]), $n$$11$$.add($line$$1_x$$70$$, $y$$42$$, $lineFields_z$$5$$), $n$$11$$.add($line$$1_x$$70$$, $y$$42$$, $lineFields_z$$5$$), $n$$11$$.add($line$$1_x$$70$$, $y$$42$$, $lineFields_z$$5$$))
  }
};
$goog$exportSymbol$$("X.parserSTL", $X$parserSTL$$);
$goog$exportSymbol$$("X.parserSTL.prototype.parse", $X$parserSTL$$.prototype.parse);
function $X$parserVTK$$() {
  $X$parser$$.call(this);
  this._className = "parserVTK"
}
$goog$inherits$$($X$parserVTK$$, $X$parser$$);
$X$parserVTK$$.prototype.parse = function $$X$parserVTK$$$$parse$($object$$20$$, $data$$39$$) {
  var $modifiedEvent$$2_p$$12$$ = $object$$20$$.$_points$, $n$$12$$ = $object$$20$$.$_normals$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$ = $data$$39$$.split("\n"), $numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ = 
  $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$.length, $unorderedPoints$$ = new $X$triplets$$, $unorderedNormals$$ = new $X$triplets$$;
  this.$_geometries$ = [];
  this.$_objectType$ = $X$object$types$TRIANGLES$$;
  this.$_normalsMode$ = this.$_pointDataMode$ = this.$_geometryMode$ = this.$_pointsMode$ = $JSCompiler_alias_FALSE$$;
  for(var $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$ = 0, $currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$ = $numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ % 8;$currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$--;) {
    this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$[$i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$]), $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$++
  }
  for($currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$ = 0.125 * $numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ ^ 0;$currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$--;) {
    this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$[$i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$]), $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$++, this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$[$i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$]), 
    $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$++, this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$[$i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$]), $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$++, 
    this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$[$i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$]), $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$++, this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$[$i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$]), 
    $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$++, this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$[$i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$]), $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$++, 
    this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$[$i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$]), $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$++, this.$parseLine$($unorderedPoints$$, $unorderedNormals$$, $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$[$i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$]), 
    $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$++
  }
  if(this.$_objectType$ == $X$object$types$TRIANGLES$$) {
    $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$ = $unorderedNormals$$.length();
    $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$ = $numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ = this.$_geometries$.length;
    do {
      var $currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$ = this.$_geometries$[$numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ - $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$], $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$ = 
      $currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$.length, $k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$;
      for($k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ = 0;$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ < $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$;$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$++) {
        var $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = parseInt($currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$[$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$], 
        10), $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$ = $unorderedPoints$$.get($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$);
        $modifiedEvent$$2_p$$12$$.add($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[0], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[1], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[2]);
        $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ < $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$ ? 
        ($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = $unorderedNormals$$.get($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$), 
        $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[0], $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[1], 
        $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[2])) : ($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = 
        new $goog$math$Vec3$$($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[0], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[1], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[2]), $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.normalize(), 
        $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.x, $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.y, 
        $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.$z$))
      }
      $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$--
    }while(0 < $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$)
  }else {
    if("TRIANGLE_STRIPS" == this.$_objectType$) {
      $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$ = $unorderedNormals$$.length();
      $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$ = $numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ = this.$_geometries$.length;
      do {
        $currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$ = this.$_geometries$[$numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ - $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$];
        $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$ = $currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$.length;
        for($k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ = 0;$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ < $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$;$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$++) {
          $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = parseInt($currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$[$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$], 
          10), $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$ = $unorderedPoints$$.get($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$), 
          $modifiedEvent$$2_p$$12$$.add($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[0], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[1], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[2]), 
          (0 == $k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ || $k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ == $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$ - 1) && $modifiedEvent$$2_p$$12$$.add($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[0], 
          $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[1], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[2]), $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ < 
          $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$ ? ($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = 
          $unorderedNormals$$.get($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$), $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[0], 
          $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[1], $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[2]), 
          (0 == $k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ || $k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ == $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$ - 1) && $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[0], 
          $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[1], $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[2])) : 
          ($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = new $goog$math$Vec3$$($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[0], 
          $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[1], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[2]), $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.normalize(), 
          $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.x, $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.y, 
          $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.$z$), (0 == $k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ || 
          $k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ == $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$ - 1) && $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.x, 
          $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.y, $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.$z$))
        }
        $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$--
      }while(0 < $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$)
    }else {
      if("LINES" == this.$_objectType$) {
        $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$ = $unorderedNormals$$.length();
        $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$ = $numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ = this.$_geometries$.length;
        do {
          $currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$ = this.$_geometries$[$numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ - $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$];
          $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$ = $currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$.length;
          for($k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ = 0;$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ < $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$ - 1;$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$++) {
            var $currentIndex$$inline_349$$ = parseInt($currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$[$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$], 10), $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = 
            parseInt($currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$[$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ + 1], 10), $currentPoint$$inline_351$$ = $unorderedPoints$$.get($currentIndex$$inline_349$$), $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$ = $unorderedPoints$$.get($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$);
            $modifiedEvent$$2_p$$12$$.add($currentPoint$$inline_351$$[0], $currentPoint$$inline_351$$[1], $currentPoint$$inline_351$$[2]);
            $modifiedEvent$$2_p$$12$$.add($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[0], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[1], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[2]);
            $currentIndex$$inline_349$$ < $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$ - 1 ? ($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$ = $unorderedNormals$$.get($currentIndex$$inline_349$$), $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = 
            $unorderedNormals$$.get($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$), $n$$12$$.add($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[0], 
            $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[1], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[2]), $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[0], 
            $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[1], $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[2])) : 
            ($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = new $goog$math$Vec3$$($currentPoint$$inline_351$$[0], 
            $currentPoint$$inline_351$$[1], $currentPoint$$inline_351$$[2]), $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.normalize(), 
            $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.x, $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.y, 
            $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.$z$), $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = 
            new $goog$math$Vec3$$($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[0], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[1], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[2]), 
            $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.normalize(), $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.x, 
            $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.y, $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.$z$))
          }
          $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$--
        }while(0 < $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$)
      }else {
        if("POINTS" == this.$_objectType$) {
          $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$ = $unorderedNormals$$.length();
          $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$ = $numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ = this.$_geometries$.length;
          do {
            $currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$ = this.$_geometries$[$numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ - $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$];
            $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$ = $currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$.length;
            for($k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ = 0;$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ < $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$;$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$++) {
              $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = parseInt($currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$[$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$], 
              10), $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$ = $unorderedPoints$$.get($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$), 
              $modifiedEvent$$2_p$$12$$.add($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[0], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[1], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[2]), 
              $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ < $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$ ? 
              ($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = $unorderedNormals$$.get($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$), 
              $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[0], $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[1], 
              $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[2])) : ($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = 
              new $goog$math$Vec3$$($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[0], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[1], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[2]), 
              $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.normalize(), $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.x, 
              $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.y, $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.$z$))
            }
            $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$--
          }while(0 < $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$)
        }else {
          if("POLYGONS" == this.$_objectType$) {
            $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$ = $unorderedNormals$$.length();
            $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$ = $numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ = this.$_geometries$.length;
            do {
              $currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$ = this.$_geometries$[$numberOfGeometries$$inline_312_numberOfGeometries$$inline_328_numberOfGeometries$$inline_344_numberOfGeometries$$inline_364_numberOfGeometries$$inline_380_numberOfLines$$1$$ - $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$];
              $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$ = $currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$.length;
              for($k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ = 0;$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$ < $currentGeometryLength$$inline_315_currentGeometryLength$$inline_331_currentGeometryLength$$inline_347_currentGeometryLength$$inline_367_currentGeometryLength$$inline_383$$;$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$++) {
                $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = parseInt($currentGeometry$$inline_314_currentGeometry$$inline_330_currentGeometry$$inline_346_currentGeometry$$inline_366_currentGeometry$$inline_382_n2$$1$$[$k$$inline_316_k$$inline_332_k$$inline_348_k$$inline_368_k$$inline_384$$], 
                10), $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$ = $unorderedPoints$$.get($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$), 
                $modifiedEvent$$2_p$$12$$.add($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[0], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[1], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[2]), 
                $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ < $dataAsArray$$1_numberOfUnorderedNormals$$inline_311_numberOfUnorderedNormals$$inline_327_numberOfUnorderedNormals$$inline_343_numberOfUnorderedNormals$$inline_363_numberOfUnorderedNormals$$inline_379$$ ? 
                ($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = $unorderedNormals$$.get($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$), 
                $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[0], $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[1], 
                $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$[2])) : ($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$ = 
                new $goog$math$Vec3$$($currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[0], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[1], $currentNormals$$inline_353_currentPoint$$inline_318_currentPoint$$inline_334_currentPoint$$inline_370_currentPoint$$inline_386_nextPoint$$inline_352$$[2]), 
                $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.normalize(), $n$$12$$.add($artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.x, 
                $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.y, $artificialNormal$$inline_320_artificialNormal$$inline_336_artificialNormal$$inline_355_artificialNormal$$inline_372_artificialNormal$$inline_388_artificialNormal2$$inline_356_currentIndex$$inline_317_currentIndex$$inline_333_currentIndex$$inline_369_currentIndex$$inline_385_currentNormals$$inline_319_currentNormals$$inline_335_currentNormals$$inline_371_currentNormals$$inline_387_nextIndex$$inline_350_nextNormals$$inline_354$$.$z$))
              }
              $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$--
            }while(0 < $i$$160_i$$inline_313_i$$inline_329_i$$inline_345_i$$inline_365_i$$inline_381$$)
          }
        }
      }
    }
  }
  $object$$20$$.$setType$(this.$_objectType$);
  $modifiedEvent$$2_p$$12$$ = new $X$event$ModifiedEvent$$;
  $modifiedEvent$$2_p$$12$$.$_object$ = $object$$20$$;
  this.dispatchEvent($modifiedEvent$$2_p$$12$$)
};
$X$parserVTK$$.prototype.$parseLine$ = function $$X$parserVTK$$$$$parseLine$$($numberOfElements_unorderedPoints$$1$$, $unorderedNormals$$1$$, $line$$2_lineFields$$1_z2$$) {
  var $line$$2_lineFields$$1_z2$$ = $line$$2_lineFields$$1_z2$$.replace(/^\s+|\s+$/g, ""), $line$$2_lineFields$$1_z2$$ = $line$$2_lineFields$$1_z2$$.split(" "), $numberOfLineFields_x2$$2$$ = $line$$2_lineFields$$1_z2$$.length, $firstLineField_x0$$4_x1$$6_y2$$2$$ = $line$$2_lineFields$$1_z2$$[0];
  if("POINTS" == $firstLineField_x0$$4_x1$$6_y2$$2$$) {
    this.$_pointsMode$ = $JSCompiler_alias_TRUE$$, this.$_pointDataMode$ = this.$_geometryMode$ = $JSCompiler_alias_FALSE$$
  }else {
    if("VERTICES" == $firstLineField_x0$$4_x1$$6_y2$$2$$) {
      this.$_geometryMode$ = $JSCompiler_alias_TRUE$$, this.$_pointDataMode$ = this.$_pointsMode$ = $JSCompiler_alias_FALSE$$, $numberOfElements_unorderedPoints$$1$$ = parseInt($line$$2_lineFields$$1_z2$$[1], 10), 3 <= $numberOfElements_unorderedPoints$$1$$ ? this.$_objectType$ = $X$object$types$TRIANGLES$$ : 1 == $numberOfElements_unorderedPoints$$1$$ ? this.$_objectType$ = "POINTS" : $JSCompiler_alias_THROW$$(Error("VTK file not supported!")), this.$_geometries$ = []
    }else {
      if("TRIANGLE_STRIPS" == $firstLineField_x0$$4_x1$$6_y2$$2$$) {
        this.$_geometryMode$ = $JSCompiler_alias_TRUE$$, this.$_pointDataMode$ = this.$_pointsMode$ = $JSCompiler_alias_FALSE$$, this.$_objectType$ = "TRIANGLE_STRIPS", this.$_geometries$ = []
      }else {
        if("LINES" == $firstLineField_x0$$4_x1$$6_y2$$2$$) {
          this.$_geometryMode$ = $JSCompiler_alias_TRUE$$, this.$_pointDataMode$ = this.$_pointsMode$ = $JSCompiler_alias_FALSE$$, this.$_objectType$ = "LINES", this.$_geometries$ = []
        }else {
          if("POLYGONS" == $firstLineField_x0$$4_x1$$6_y2$$2$$) {
            this.$_geometryMode$ = $JSCompiler_alias_TRUE$$, this.$_pointDataMode$ = this.$_pointsMode$ = $JSCompiler_alias_FALSE$$, this.$_objectType$ = "POLYGONS", this.$_geometries$ = []
          }else {
            if("POINT_DATA" == $firstLineField_x0$$4_x1$$6_y2$$2$$) {
              this.$_pointDataMode$ = $JSCompiler_alias_TRUE$$, this.$_geometryMode$ = this.$_pointsMode$ = $JSCompiler_alias_FALSE$$
            }else {
              if(this.$_pointsMode$) {
                if(1 == $numberOfLineFields_x2$$2$$ || isNaN(parseFloat($firstLineField_x0$$4_x1$$6_y2$$2$$))) {
                  this.$_pointsMode$ = $JSCompiler_alias_FALSE$$
                }else {
                  if(3 <= $numberOfLineFields_x2$$2$$) {
                    var $firstLineField_x0$$4_x1$$6_y2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[0]), $y0$$4_y1$$6$$ = parseFloat($line$$2_lineFields$$1_z2$$[1]), $z0_z1$$ = parseFloat($line$$2_lineFields$$1_z2$$[2]);
                    $numberOfElements_unorderedPoints$$1$$.add($firstLineField_x0$$4_x1$$6_y2$$2$$, $y0$$4_y1$$6$$, $z0_z1$$)
                  }
                  6 <= $numberOfLineFields_x2$$2$$ && ($firstLineField_x0$$4_x1$$6_y2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[3]), $y0$$4_y1$$6$$ = parseFloat($line$$2_lineFields$$1_z2$$[4]), $z0_z1$$ = parseFloat($line$$2_lineFields$$1_z2$$[5]), $numberOfElements_unorderedPoints$$1$$.add($firstLineField_x0$$4_x1$$6_y2$$2$$, $y0$$4_y1$$6$$, $z0_z1$$));
                  9 <= $numberOfLineFields_x2$$2$$ && ($numberOfLineFields_x2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[6]), $firstLineField_x0$$4_x1$$6_y2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[7]), $line$$2_lineFields$$1_z2$$ = parseFloat($line$$2_lineFields$$1_z2$$[8]), $numberOfElements_unorderedPoints$$1$$.add($numberOfLineFields_x2$$2$$, $firstLineField_x0$$4_x1$$6_y2$$2$$, $line$$2_lineFields$$1_z2$$))
                }
              }else {
                this.$_geometryMode$ ? 1 == $numberOfLineFields_x2$$2$$ || isNaN(parseFloat($firstLineField_x0$$4_x1$$6_y2$$2$$)) ? this.$_geometryMode$ = $JSCompiler_alias_FALSE$$ : this.$_geometries$.push($line$$2_lineFields$$1_z2$$.slice(1)) : this.$_pointDataMode$ && ("NORMALS" == $firstLineField_x0$$4_x1$$6_y2$$2$$ ? this.$_normalsMode$ = $JSCompiler_alias_TRUE$$ : 1 == $numberOfLineFields_x2$$2$$ || isNaN(parseFloat($firstLineField_x0$$4_x1$$6_y2$$2$$)) ? this.$_normalsMode$ = this.$_pointDataMode$ = 
                $JSCompiler_alias_FALSE$$ : this.$_normalsMode$ && (3 <= $numberOfLineFields_x2$$2$$ && ($firstLineField_x0$$4_x1$$6_y2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[0]), $y0$$4_y1$$6$$ = parseFloat($line$$2_lineFields$$1_z2$$[1]), $z0_z1$$ = parseFloat($line$$2_lineFields$$1_z2$$[2]), $unorderedNormals$$1$$.add($firstLineField_x0$$4_x1$$6_y2$$2$$, $y0$$4_y1$$6$$, $z0_z1$$)), 6 <= $numberOfLineFields_x2$$2$$ && ($firstLineField_x0$$4_x1$$6_y2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[3]), 
                $y0$$4_y1$$6$$ = parseFloat($line$$2_lineFields$$1_z2$$[4]), $z0_z1$$ = parseFloat($line$$2_lineFields$$1_z2$$[5]), $unorderedNormals$$1$$.add($firstLineField_x0$$4_x1$$6_y2$$2$$, $y0$$4_y1$$6$$, $z0_z1$$)), 9 <= $numberOfLineFields_x2$$2$$ && ($numberOfLineFields_x2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[6]), $firstLineField_x0$$4_x1$$6_y2$$2$$ = parseFloat($line$$2_lineFields$$1_z2$$[7]), $line$$2_lineFields$$1_z2$$ = parseFloat($line$$2_lineFields$$1_z2$$[8]), $unorderedNormals$$1$$.add($numberOfLineFields_x2$$2$$, 
                $firstLineField_x0$$4_x1$$6_y2$$2$$, $line$$2_lineFields$$1_z2$$))))
              }
            }
          }
        }
      }
    }
  }
};
$goog$exportSymbol$$("X.parserVTK", $X$parserVTK$$);
$goog$exportSymbol$$("X.parserVTK.prototype.parse", $X$parserVTK$$.prototype.parse);
function $X$parserFSM$$() {
  $X$parser$$.call(this);
  this._className = "parserFSM"
}
$goog$inherits$$($X$parserFSM$$, $X$parser$$);
$X$parserFSM$$.prototype.parse = function $$X$parserFSM$$$$parse$($object$$21$$, $data$$40$$) {
  var $modifiedEvent$$3_p$$18$$ = $object$$21$$.$_points$, $n$$18$$ = $object$$21$$.$_normals$, $ind$$ = $object$$21$$.$_pointIndices$, $unorderedPoints$$7$$ = new $X$triplets$$, $currentOffset_n1_normal$$2_v2$$1$$;
  $currentOffset_n1_normal$$2_v2$$1$$ = 3;
  var $iters_numberOfTriangles$$ = 0, $curChar_indexCounter$$;
  do {
    $curChar_indexCounter$$ = this.$parseUChar8$($data$$40$$, $currentOffset_n1_normal$$2_v2$$1$$++), $iters_numberOfTriangles$$++
  }while(200 > $iters_numberOfTriangles$$ && 10 != $curChar_indexCounter$$);
  $currentOffset_n1_normal$$2_v2$$1$$++;
  var $numberOfVertices_triangles$$1$$ = $JSCompiler_StaticMethods_parseUInt32EndianSwapped$$(this, $data$$40$$, $currentOffset_n1_normal$$2_v2$$1$$);
  $currentOffset_n1_normal$$2_v2$$1$$ += 4;
  $iters_numberOfTriangles$$ = $JSCompiler_StaticMethods_parseUInt32EndianSwapped$$(this, $data$$40$$, $currentOffset_n1_normal$$2_v2$$1$$);
  $currentOffset_n1_normal$$2_v2$$1$$ += 4;
  $curChar_indexCounter$$ = [];
  for(var $normals$$1_v$$11$$ = 0, $normals$$1_v$$11$$ = 0;$normals$$1_v$$11$$ < $numberOfVertices_triangles$$1$$;$normals$$1_v$$11$$++) {
    var $t$$5_x$$71$$ = $JSCompiler_StaticMethods_parseFloat32EndianSwapped$$(this, $data$$40$$, $currentOffset_n1_normal$$2_v2$$1$$);
    $currentOffset_n1_normal$$2_v2$$1$$ += 4;
    var $index3_normal3$$1_y$$43$$ = $JSCompiler_StaticMethods_parseFloat32EndianSwapped$$(this, $data$$40$$, $currentOffset_n1_normal$$2_v2$$1$$);
    $currentOffset_n1_normal$$2_v2$$1$$ += 4;
    var $index2$$1_normal2$$1_z$$6$$ = $JSCompiler_StaticMethods_parseFloat32EndianSwapped$$(this, $data$$40$$, $currentOffset_n1_normal$$2_v2$$1$$);
    $currentOffset_n1_normal$$2_v2$$1$$ += 4;
    $curChar_indexCounter$$[$normals$$1_v$$11$$] = 0;
    $unorderedPoints$$7$$.add($t$$5_x$$71$$, $index3_normal3$$1_y$$43$$, $index2$$1_normal2$$1_z$$6$$)
  }
  $numberOfVertices_triangles$$1$$ = [];
  $normals$$1_v$$11$$ = [];
  for($t$$5_x$$71$$ = 0;$t$$5_x$$71$$ < $iters_numberOfTriangles$$;$t$$5_x$$71$$++) {
    var $index1$$1_normal1$$1$$ = $JSCompiler_StaticMethods_parseUInt32EndianSwapped$$(this, $data$$40$$, $currentOffset_n1_normal$$2_v2$$1$$);
    $currentOffset_n1_normal$$2_v2$$1$$ += 4;
    $index2$$1_normal2$$1_z$$6$$ = $JSCompiler_StaticMethods_parseUInt32EndianSwapped$$(this, $data$$40$$, $currentOffset_n1_normal$$2_v2$$1$$);
    $currentOffset_n1_normal$$2_v2$$1$$ += 4;
    $index3_normal3$$1_y$$43$$ = $JSCompiler_StaticMethods_parseUInt32EndianSwapped$$(this, $data$$40$$, $currentOffset_n1_normal$$2_v2$$1$$);
    $currentOffset_n1_normal$$2_v2$$1$$ += 4;
    $curChar_indexCounter$$[$index1$$1_normal1$$1$$] += 1;
    $curChar_indexCounter$$[$index2$$1_normal2$$1_z$$6$$] += 1;
    $curChar_indexCounter$$[$index3_normal3$$1_y$$43$$] += 1;
    $numberOfVertices_triangles$$1$$.push([$index1$$1_normal1$$1$$, $index2$$1_normal2$$1_z$$6$$, $index3_normal3$$1_y$$43$$]);
    $normals$$1_v$$11$$.push(new $goog$math$Vec3$$(0, 0, 0))
  }
  for($t$$5_x$$71$$ = 0;$t$$5_x$$71$$ < $iters_numberOfTriangles$$;$t$$5_x$$71$$++) {
    var $index1$$1_normal1$$1$$ = $numberOfVertices_triangles$$1$$[$t$$5_x$$71$$][0], $index2$$1_normal2$$1_z$$6$$ = $numberOfVertices_triangles$$1$$[$t$$5_x$$71$$][1], $index3_normal3$$1_y$$43$$ = $numberOfVertices_triangles$$1$$[$t$$5_x$$71$$][2], $n2$$2_v1$$1_v1v$$ = $unorderedPoints$$7$$.get($index1$$1_normal1$$1$$);
    $currentOffset_n1_normal$$2_v2$$1$$ = $unorderedPoints$$7$$.get($index2$$1_normal2$$1_z$$6$$);
    var $v3_v3v$$ = $unorderedPoints$$7$$.get($index3_normal3$$1_y$$43$$), $n2$$2_v1$$1_v1v$$ = new $goog$math$Vec3$$($n2$$2_v1$$1_v1v$$[0], $n2$$2_v1$$1_v1v$$[1], $n2$$2_v1$$1_v1v$$[2]), $v3_v3v$$ = new $goog$math$Vec3$$($v3_v3v$$[0], $v3_v3v$$[1], $v3_v3v$$[2]);
    $currentOffset_n1_normal$$2_v2$$1$$ = (new $goog$math$Vec3$$($currentOffset_n1_normal$$2_v2$$1$$[0], $currentOffset_n1_normal$$2_v2$$1$$[1], $currentOffset_n1_normal$$2_v2$$1$$[2])).$clone$().$subtract$($n2$$2_v1$$1_v1v$$);
    $n2$$2_v1$$1_v1v$$ = $v3_v3v$$.$clone$().$subtract$($n2$$2_v1$$1_v1v$$);
    $currentOffset_n1_normal$$2_v2$$1$$ = $goog$math$Vec3$cross$$($currentOffset_n1_normal$$2_v2$$1$$, $n2$$2_v1$$1_v1v$$).normalize();
    $normals$$1_v$$11$$[$index1$$1_normal1$$1$$] = $normals$$1_v$$11$$[$index1$$1_normal1$$1$$].add($currentOffset_n1_normal$$2_v2$$1$$);
    $normals$$1_v$$11$$[$index2$$1_normal2$$1_z$$6$$] = $normals$$1_v$$11$$[$index2$$1_normal2$$1_z$$6$$].add($currentOffset_n1_normal$$2_v2$$1$$);
    $normals$$1_v$$11$$[$index3_normal3$$1_y$$43$$] = $normals$$1_v$$11$$[$index3_normal3$$1_y$$43$$].add($currentOffset_n1_normal$$2_v2$$1$$)
  }
  for($t$$5_x$$71$$ = 0;$t$$5_x$$71$$ < $iters_numberOfTriangles$$;$t$$5_x$$71$$++) {
    $index1$$1_normal1$$1$$ = $numberOfVertices_triangles$$1$$[$t$$5_x$$71$$][0], $index2$$1_normal2$$1_z$$6$$ = $numberOfVertices_triangles$$1$$[$t$$5_x$$71$$][1], $index3_normal3$$1_y$$43$$ = $numberOfVertices_triangles$$1$$[$t$$5_x$$71$$][2], $n2$$2_v1$$1_v1v$$ = $unorderedPoints$$7$$.get($index1$$1_normal1$$1$$), $currentOffset_n1_normal$$2_v2$$1$$ = $unorderedPoints$$7$$.get($index2$$1_normal2$$1_z$$6$$), $v3_v3v$$ = $unorderedPoints$$7$$.get($index3_normal3$$1_y$$43$$), $ind$$.push($index1$$1_normal1$$1$$), 
    $ind$$.push($index2$$1_normal2$$1_z$$6$$), $ind$$.push($index3_normal3$$1_y$$43$$), $modifiedEvent$$3_p$$18$$.add($n2$$2_v1$$1_v1v$$[0], $n2$$2_v1$$1_v1v$$[1], $n2$$2_v1$$1_v1v$$[2]), $modifiedEvent$$3_p$$18$$.add($currentOffset_n1_normal$$2_v2$$1$$[0], $currentOffset_n1_normal$$2_v2$$1$$[1], $currentOffset_n1_normal$$2_v2$$1$$[2]), $modifiedEvent$$3_p$$18$$.add($v3_v3v$$[0], $v3_v3v$$[1], $v3_v3v$$[2]), $index1$$1_normal1$$1$$ = $normals$$1_v$$11$$[$index1$$1_normal1$$1$$].scale(1 / $curChar_indexCounter$$[$index1$$1_normal1$$1$$]).normalize(), 
    $index2$$1_normal2$$1_z$$6$$ = $normals$$1_v$$11$$[$index2$$1_normal2$$1_z$$6$$].scale(1 / $curChar_indexCounter$$[$index2$$1_normal2$$1_z$$6$$]).normalize(), $index3_normal3$$1_y$$43$$ = $normals$$1_v$$11$$[$index3_normal3$$1_y$$43$$].scale(1 / $curChar_indexCounter$$[$index3_normal3$$1_y$$43$$]).normalize(), $n$$18$$.add($index1$$1_normal1$$1$$.x, $index1$$1_normal1$$1$$.y, $index1$$1_normal1$$1$$.$z$), $n$$18$$.add($index2$$1_normal2$$1_z$$6$$.x, $index2$$1_normal2$$1_z$$6$$.y, $index2$$1_normal2$$1_z$$6$$.$z$), 
    $n$$18$$.add($index3_normal3$$1_y$$43$$.x, $index3_normal3$$1_y$$43$$.y, $index3_normal3$$1_y$$43$$.$z$)
  }
  $object$$21$$.$setType$($X$object$types$TRIANGLES$$);
  $modifiedEvent$$3_p$$18$$ = new $X$event$ModifiedEvent$$;
  $modifiedEvent$$3_p$$18$$.$_object$ = $object$$21$$;
  this.dispatchEvent($modifiedEvent$$3_p$$18$$)
};
$goog$exportSymbol$$("X.parserFSM", $X$parserFSM$$);
$goog$exportSymbol$$("X.parserFSM.prototype.parse", $X$parserFSM$$.prototype.parse);
function $JXG$Util$Unzip$$($Q$$) {
  function $d$$1$$() {
    $a$$60$$ += 8;
    return $b$$57$$ < $u$$1$$.length ? $u$$1$$.charCodeAt($b$$57$$++) & 255 : -1
  }
  function $T$$() {
    var $ab$$1$$;
    $a$$60$$++;
    $ab$$1$$ = $Z$$ & 1;
    $Z$$ >>= 1;
    0 == $Z$$ && ($Z$$ = $d$$1$$(), $ab$$1$$ = $Z$$ & 1, $Z$$ = $Z$$ >> 1 | 128);
    return $ab$$1$$
  }
  function $R$$($ab$$2$$) {
    for(var $ad$$ = 0, $ac$$ = $ab$$2$$;$ac$$--;) {
      $ad$$ = $ad$$ << 1 | $T$$()
    }
    $ab$$2$$ && ($ad$$ = $U$$[$ad$$] >> 8 - $ab$$2$$);
    return $ad$$
  }
  function $v$$12$$($ab$$3$$) {
    $F$$++;
    $h$$7$$[$V$$++] = $ab$$3$$;
    $m$$15$$.push(String.fromCharCode($ab$$3$$));
    32768 == $V$$ && ($V$$ = 0)
  }
  function $l$$23$$() {
    this.$b1$ = this.$b0$ = 0;
    this.$jump$ = $JSCompiler_alias_NULL$$;
    this.$jumppos$ = -1
  }
  function $i$$166$$() {
    for(;;) {
      if($A$$[$w$$7$$] >= $s$$26$$) {
        return-1
      }
      if($M$$[$A$$[$w$$7$$]] == $w$$7$$) {
        return $A$$[$w$$7$$]++
      }
      $A$$[$w$$7$$]++
    }
  }
  function $C$$() {
    var $ac$$1$$ = $W$$[$G$$], $ab$$4$$;
    $B$$ && document.write("<br>len:" + $w$$7$$ + " treepos:" + $G$$);
    if(17 == $w$$7$$) {
      return-1
    }
    $G$$++;
    $w$$7$$++;
    $ab$$4$$ = $i$$166$$();
    $B$$ && document.write("<br>IsPat " + $ab$$4$$);
    if(0 <= $ab$$4$$) {
      $ac$$1$$.$b0$ = $ab$$4$$, $B$$ && document.write("<br>b0 " + $ac$$1$$.$b0$)
    }else {
      if($ac$$1$$.$b0$ = 32768, $B$$ && document.write("<br>b0 " + $ac$$1$$.$b0$), $C$$()) {
        return-1
      }
    }
    $ab$$4$$ = $i$$166$$();
    if(0 <= $ab$$4$$) {
      $ac$$1$$.$b1$ = $ab$$4$$, $B$$ && document.write("<br>b1 " + $ac$$1$$.$b1$), $ac$$1$$.$jump$ = $JSCompiler_alias_NULL$$
    }else {
      if($ac$$1$$.$b1$ = 32768, $B$$ && document.write("<br>b1 " + $ac$$1$$.$b1$), $ac$$1$$.$jump$ = $W$$[$G$$], $ac$$1$$.$jumppos$ = $G$$, $C$$()) {
        return-1
      }
    }
    $w$$7$$--;
    return 0
  }
  function $k$$5$$($ab$$5_ae_af$$, $ad$$1$$, $ag$$) {
    $B$$ && document.write("currentTree " + $ab$$5_ae_af$$ + " numval " + $ad$$1$$ + " lengths " + $ag$$ + " show 0");
    $W$$ = $ab$$5_ae_af$$;
    $G$$ = 0;
    $M$$ = $ag$$;
    $s$$26$$ = $ad$$1$$;
    for($ab$$5_ae_af$$ = 0;17 > $ab$$5_ae_af$$;$ab$$5_ae_af$$++) {
      $A$$[$ab$$5_ae_af$$] = 0
    }
    $w$$7$$ = 0;
    if($C$$()) {
      return $B$$ && window.console.log("invalid huffman tree\n"), -1
    }
    if($B$$) {
      document.write("<br>Tree: " + $W$$.length);
      for($ab$$5_ae_af$$ = 0;32 > $ab$$5_ae_af$$;$ab$$5_ae_af$$++) {
        document.write("Places[" + $ab$$5_ae_af$$ + "].b0=" + $W$$[$ab$$5_ae_af$$].$b0$ + "<br>"), document.write("Places[" + $ab$$5_ae_af$$ + "].b1=" + $W$$[$ab$$5_ae_af$$].$b1$ + "<br>")
      }
    }
    return 0
  }
  function $z$$7$$($ae$$1$$) {
    for(var $ab$$6_ac$$3$$, $ad$$2$$, $ag$$1$$ = 0, $af$$1$$ = $ae$$1$$[$ag$$1$$];;) {
      if($ab$$6_ac$$3$$ = $T$$(), $B$$ && document.write("b=" + $ab$$6_ac$$3$$), $ab$$6_ac$$3$$) {
        if(!($af$$1$$.$b1$ & 32768)) {
          return $B$$ && document.write("ret1"), $af$$1$$.$b1$
        }
        $af$$1$$ = $af$$1$$.$jump$;
        $ab$$6_ac$$3$$ = $ae$$1$$.length;
        for($ad$$2$$ = 0;$ad$$2$$ < $ab$$6_ac$$3$$;$ad$$2$$++) {
          if($ae$$1$$[$ad$$2$$] === $af$$1$$) {
            $ag$$1$$ = $ad$$2$$;
            break
          }
        }
      }else {
        if(!($af$$1$$.$b0$ & 32768)) {
          return $B$$ && document.write("ret2"), $af$$1$$.$b0$
        }
        $ag$$1$$++;
        $af$$1$$ = $ae$$1$$[$ag$$1$$]
      }
    }
  }
  function $aa$$() {
    var $af$$2$$, $ab$$7_ac$$4_ad$$3_ar$$1$$, $aj_ap$$1$$, $ahlength_al_aq$$;
    do {
      $af$$2$$ = $T$$();
      $ab$$7_ac$$4_ad$$3_ar$$1$$ = $R$$(2);
      switch($ab$$7_ac$$4_ad$$3_ar$$1$$) {
        case 0:
          $B$$ && window.console.log("Stored\n");
          break;
        case 1:
          $B$$ && window.console.log("Fixed Huffman codes\n");
          break;
        case 2:
          $B$$ && window.console.log("Dynamic Huffman codes\n");
          break;
        case 3:
          $B$$ && window.console.log("Reserved block type!!\n");
          break;
        default:
          $B$$ && window.console.log("Unexpected value %d!\n", $ab$$7_ac$$4_ad$$3_ar$$1$$)
      }
      if(0 == $ab$$7_ac$$4_ad$$3_ar$$1$$) {
        var $ai_ak_an$$;
        $Z$$ = 1;
        $ai_ak_an$$ = $d$$1$$();
        $ai_ak_an$$ |= $d$$1$$() << 8;
        $ab$$7_ac$$4_ad$$3_ar$$1$$ = $d$$1$$();
        $ab$$7_ac$$4_ad$$3_ar$$1$$ |= $d$$1$$() << 8;
        for(($ai_ak_an$$ ^ ~$ab$$7_ac$$4_ad$$3_ar$$1$$) & 65535 && document.write("BlockLen checksum mismatch\n");$ai_ak_an$$--;) {
          $ab$$7_ac$$4_ad$$3_ar$$1$$ = $d$$1$$(), $v$$12$$($ab$$7_ac$$4_ad$$3_ar$$1$$)
        }
      }else {
        if(1 == $ab$$7_ac$$4_ad$$3_ar$$1$$) {
          for(var $ag$$2_ao_at$$;;) {
            if($ag$$2_ao_at$$ = $U$$[$R$$(7)] >> 1, 23 < $ag$$2_ao_at$$ ? ($ag$$2_ao_at$$ = $ag$$2_ao_at$$ << 1 | $T$$(), 199 < $ag$$2_ao_at$$ ? ($ag$$2_ao_at$$ -= 128, $ag$$2_ao_at$$ = $ag$$2_ao_at$$ << 1 | $T$$()) : ($ag$$2_ao_at$$ -= 48, 143 < $ag$$2_ao_at$$ && ($ag$$2_ao_at$$ += 136))) : $ag$$2_ao_at$$ += 256, 256 > $ag$$2_ao_at$$) {
              $v$$12$$($ag$$2_ao_at$$)
            }else {
              if(256 == $ag$$2_ao_at$$) {
                break
              }else {
                $ag$$2_ao_at$$ -= 257;
                $ahlength_al_aq$$ = $R$$($P$$[$ag$$2_ao_at$$]) + $Y$$[$ag$$2_ao_at$$];
                $ag$$2_ao_at$$ = $U$$[$R$$(5)] >> 3;
                8 < $x$$72$$[$ag$$2_ao_at$$] ? ($ai_ak_an$$ = $R$$(8), $ai_ak_an$$ |= $R$$($x$$72$$[$ag$$2_ao_at$$] - 8) << 8) : $ai_ak_an$$ = $R$$($x$$72$$[$ag$$2_ao_at$$]);
                $ai_ak_an$$ += $J$$[$ag$$2_ao_at$$];
                for($ag$$2_ao_at$$ = 0;$ag$$2_ao_at$$ < $ahlength_al_aq$$;$ag$$2_ao_at$$++) {
                  $ab$$7_ac$$4_ad$$3_ar$$1$$ = $h$$7$$[$V$$ - $ai_ak_an$$ & 32767], $v$$12$$($ab$$7_ac$$4_ad$$3_ar$$1$$)
                }
              }
            }
          }
        }else {
          if(2 == $ab$$7_ac$$4_ad$$3_ar$$1$$) {
            var $ah$$ = Array(320);
            $ab$$7_ac$$4_ad$$3_ar$$1$$ = 257 + $R$$(5);
            $ai_ak_an$$ = 1 + $R$$(5);
            $aj_ap$$1$$ = 4 + $R$$(4);
            for($ag$$2_ao_at$$ = 0;19 > $ag$$2_ao_at$$;$ag$$2_ao_at$$++) {
              $ah$$[$ag$$2_ao_at$$] = 0
            }
            for($ag$$2_ao_at$$ = 0;$ag$$2_ao_at$$ < $aj_ap$$1$$;$ag$$2_ao_at$$++) {
              $ah$$[$n$$19$$[$ag$$2_ao_at$$]] = $R$$(3)
            }
            $ahlength_al_aq$$ = $L$$.length;
            for($aj_ap$$1$$ = 0;$aj_ap$$1$$ < $ahlength_al_aq$$;$aj_ap$$1$$++) {
              $L$$[$aj_ap$$1$$] = new $l$$23$$
            }
            if($k$$5$$($L$$, 19, $ah$$)) {
              $V$$ = 0;
              return
            }
            if($B$$) {
              document.write("<br>distanceTree");
              for($ag$$2_ao_at$$ = 0;$ag$$2_ao_at$$ < $L$$.length;$ag$$2_ao_at$$++) {
                document.write("<br>" + $L$$[$ag$$2_ao_at$$].$b0$ + " " + $L$$[$ag$$2_ao_at$$].$b1$ + " " + $L$$[$ag$$2_ao_at$$].$jump$ + " " + $L$$[$ag$$2_ao_at$$].$jumppos$)
              }
            }
            $ahlength_al_aq$$ = $ab$$7_ac$$4_ad$$3_ar$$1$$ + $ai_ak_an$$;
            $aj_ap$$1$$ = 0;
            var $ae$$2$$ = -1;
            for($B$$ && document.write("<br>n=" + $ahlength_al_aq$$ + " bits: " + $a$$60$$ + "<br>");$aj_ap$$1$$ < $ahlength_al_aq$$;) {
              if($ae$$2$$++, $ag$$2_ao_at$$ = $z$$7$$($L$$), $B$$ && document.write("<br>" + $ae$$2$$ + " i:" + $aj_ap$$1$$ + " decode: " + $ag$$2_ao_at$$ + "    bits " + $a$$60$$ + "<br>"), 16 > $ag$$2_ao_at$$) {
                $ah$$[$aj_ap$$1$$++] = $ag$$2_ao_at$$
              }else {
                if(16 == $ag$$2_ao_at$$) {
                  var $am$$;
                  $ag$$2_ao_at$$ = 3 + $R$$(2);
                  if($aj_ap$$1$$ + $ag$$2_ao_at$$ > $ahlength_al_aq$$) {
                    $V$$ = 0;
                    return
                  }
                  for($am$$ = $aj_ap$$1$$ ? $ah$$[$aj_ap$$1$$ - 1] : 0;$ag$$2_ao_at$$--;) {
                    $ah$$[$aj_ap$$1$$++] = $am$$
                  }
                }else {
                  $ag$$2_ao_at$$ = 17 == $ag$$2_ao_at$$ ? 3 + $R$$(3) : 11 + $R$$(7);
                  if($aj_ap$$1$$ + $ag$$2_ao_at$$ > $ahlength_al_aq$$) {
                    $V$$ = 0;
                    return
                  }
                  for(;$ag$$2_ao_at$$--;) {
                    $ah$$[$aj_ap$$1$$++] = 0
                  }
                }
              }
            }
            $ahlength_al_aq$$ = $t$$6$$.length;
            for($aj_ap$$1$$ = 0;$aj_ap$$1$$ < $ahlength_al_aq$$;$aj_ap$$1$$++) {
              $t$$6$$[$aj_ap$$1$$] = new $l$$23$$
            }
            if($k$$5$$($t$$6$$, $ab$$7_ac$$4_ad$$3_ar$$1$$, $ah$$)) {
              $V$$ = 0;
              return
            }
            $ahlength_al_aq$$ = $t$$6$$.length;
            for($aj_ap$$1$$ = 0;$aj_ap$$1$$ < $ahlength_al_aq$$;$aj_ap$$1$$++) {
              $L$$[$aj_ap$$1$$] = new $l$$23$$
            }
            $ag$$2_ao_at$$ = [];
            $ahlength_al_aq$$ = $ah$$.length;
            for($aj_ap$$1$$ = $ab$$7_ac$$4_ad$$3_ar$$1$$;$aj_ap$$1$$ < $ahlength_al_aq$$;$aj_ap$$1$$++) {
              $ag$$2_ao_at$$[$aj_ap$$1$$ - $ab$$7_ac$$4_ad$$3_ar$$1$$] = $ah$$[$aj_ap$$1$$]
            }
            if($k$$5$$($L$$, $ai_ak_an$$, $ag$$2_ao_at$$)) {
              $V$$ = 0;
              return
            }
            for($B$$ && document.write("<br>literalTree");;) {
              if($ag$$2_ao_at$$ = $z$$7$$($t$$6$$), 256 <= $ag$$2_ao_at$$) {
                $ag$$2_ao_at$$ -= 256;
                if(0 == $ag$$2_ao_at$$) {
                  break
                }
                $ag$$2_ao_at$$--;
                $ahlength_al_aq$$ = $R$$($P$$[$ag$$2_ao_at$$]) + $Y$$[$ag$$2_ao_at$$];
                $ag$$2_ao_at$$ = $z$$7$$($L$$);
                8 < $x$$72$$[$ag$$2_ao_at$$] ? ($ai_ak_an$$ = $R$$(8), $ai_ak_an$$ |= $R$$($x$$72$$[$ag$$2_ao_at$$] - 8) << 8) : $ai_ak_an$$ = $R$$($x$$72$$[$ag$$2_ao_at$$]);
                for($ai_ak_an$$ += $J$$[$ag$$2_ao_at$$];$ahlength_al_aq$$--;) {
                  $ab$$7_ac$$4_ad$$3_ar$$1$$ = $h$$7$$[$V$$ - $ai_ak_an$$ & 32767], $v$$12$$($ab$$7_ac$$4_ad$$3_ar$$1$$)
                }
              }else {
                $v$$12$$($ag$$2_ao_at$$)
              }
            }
          }
        }
      }
    }while(!$af$$2$$);
    $V$$ = 0;
    $Z$$ = 1
  }
  function $r$$4$$() {
    $B$$ && window.console.log("NEXTFILE");
    $m$$15$$ = [];
    var $ab$$8_af$$3$$ = [];
    $I$$ = $JSCompiler_alias_FALSE$$;
    $ab$$8_af$$3$$[0] = $d$$1$$();
    $ab$$8_af$$3$$[1] = $d$$1$$();
    $B$$ && window.console.log("type: " + $ab$$8_af$$3$$[0] + " " + $ab$$8_af$$3$$[1]);
    120 == $ab$$8_af$$3$$[0] && 218 == $ab$$8_af$$3$$[1] && ($B$$ && window.console.log("GEONExT-GZIP"), $aa$$(), $B$$ && window.console.log($m$$15$$.join("")), $N$$[$E$$] = Array(2), $N$$[$E$$][0] = $m$$15$$.join(""), $N$$[$E$$][1] = "geonext.gxt", $E$$++);
    31 == $ab$$8_af$$3$$[0] && 139 == $ab$$8_af$$3$$[1] && ($B$$ && window.console.log("GZIP"), $O$$(), $B$$ && window.console.log($m$$15$$.join("")), $N$$[$E$$] = Array(2), $N$$[$E$$][0] = $m$$15$$.join(""), $N$$[$E$$][1] = "file", $E$$++);
    if(80 == $ab$$8_af$$3$$[0] && 75 == $ab$$8_af$$3$$[1] && ($I$$ = $JSCompiler_alias_TRUE$$, $ab$$8_af$$3$$[2] = $d$$1$$(), $ab$$8_af$$3$$[3] = $d$$1$$(), 3 == $ab$$8_af$$3$$[2] && 4 == $ab$$8_af$$3$$[3])) {
      $ab$$8_af$$3$$[0] = $d$$1$$();
      $ab$$8_af$$3$$[1] = $d$$1$$();
      $B$$ && window.console.log("ZIP-Version: " + $ab$$8_af$$3$$[1] + " " + $ab$$8_af$$3$$[0] / 10 + "." + $ab$$8_af$$3$$[0] % 10);
      $y$$44$$ = $d$$1$$();
      $y$$44$$ |= $d$$1$$() << 8;
      $B$$ && window.console.log("gpflags: " + $y$$44$$);
      $ab$$8_af$$3$$ = $d$$1$$();
      $ab$$8_af$$3$$ |= $d$$1$$() << 8;
      $B$$ && window.console.log("method: " + $ab$$8_af$$3$$);
      $d$$1$$();
      $d$$1$$();
      $d$$1$$();
      $d$$1$$();
      var $ac$$5_ag$$3$$ = $d$$1$$(), $ac$$5_ag$$3$$ = $ac$$5_ag$$3$$ | $d$$1$$() << 8, $ac$$5_ag$$3$$ = $ac$$5_ag$$3$$ | $d$$1$$() << 16, $ac$$5_ag$$3$$ = $ac$$5_ag$$3$$ | $d$$1$$() << 24, $ae$$3_ai$$1$$ = $d$$1$$(), $ae$$3_ai$$1$$ = $ae$$3_ai$$1$$ | $d$$1$$() << 8, $ae$$3_ai$$1$$ = $ae$$3_ai$$1$$ | $d$$1$$() << 16, $ae$$3_ai$$1$$ = $ae$$3_ai$$1$$ | $d$$1$$() << 24, $ad$$4_aj$$1$$ = $d$$1$$(), $ad$$4_aj$$1$$ = $ad$$4_aj$$1$$ | $d$$1$$() << 8, $ad$$4_aj$$1$$ = $ad$$4_aj$$1$$ | $d$$1$$() << 16, $ad$$4_aj$$1$$ = 
      $ad$$4_aj$$1$$ | $d$$1$$() << 24;
      $B$$ && window.console.log("local CRC: " + $ac$$5_ag$$3$$ + "\nlocal Size: " + $ad$$4_aj$$1$$ + "\nlocal CompSize: " + $ae$$3_ai$$1$$);
      $ac$$5_ag$$3$$ = $d$$1$$();
      $ac$$5_ag$$3$$ |= $d$$1$$() << 8;
      $ae$$3_ai$$1$$ = $d$$1$$();
      $ae$$3_ai$$1$$ |= $d$$1$$() << 8;
      $B$$ && window.console.log("filelen " + $ac$$5_ag$$3$$);
      $ad$$4_aj$$1$$ = 0;
      for($f$$43$$ = [];$ac$$5_ag$$3$$--;) {
        var $ah$$1$$ = $d$$1$$();
        "/" == $ah$$1$$ | ":" == $ah$$1$$ ? $ad$$4_aj$$1$$ = 0 : $ad$$4_aj$$1$$ < $X$$1$$ - 1 && ($f$$43$$[$ad$$4_aj$$1$$++] = String.fromCharCode($ah$$1$$))
      }
      $B$$ && window.console.log("nameBuf: " + $f$$43$$);
      $j$$33$$ || ($j$$33$$ = $f$$43$$);
      for($ad$$4_aj$$1$$ = 0;$ad$$4_aj$$1$$ < $ae$$3_ai$$1$$;) {
        $d$$1$$(), $ad$$4_aj$$1$$++
      }
      $F$$ = 0;
      8 == $ab$$8_af$$3$$ && ($aa$$(), $B$$ && window.console.log($m$$15$$.join("")), $N$$[$E$$] = Array(2), $N$$[$E$$][0] = $m$$15$$.join(""), $N$$[$E$$][1] = $f$$43$$.join(""), $E$$++);
      $O$$()
    }
  }
  function $O$$() {
    var $ab$$9_ad$$5$$ = [], $ah$$2$$;
    $y$$44$$ & 8 && ($ab$$9_ad$$5$$[0] = $d$$1$$(), $ab$$9_ad$$5$$[1] = $d$$1$$(), $ab$$9_ad$$5$$[2] = $d$$1$$(), $ab$$9_ad$$5$$[3] = $d$$1$$(), 80 == $ab$$9_ad$$5$$[0] && 75 == $ab$$9_ad$$5$$[1] && 7 == $ab$$9_ad$$5$$[2] && 8 == $ab$$9_ad$$5$$[3] && ($d$$1$$(), $d$$1$$(), $d$$1$$(), $d$$1$$()), $d$$1$$(), $d$$1$$(), $d$$1$$(), $d$$1$$(), $d$$1$$(), $d$$1$$(), $d$$1$$(), $d$$1$$(), $B$$ && window.console.log("CRC:"));
    $I$$ && $r$$4$$();
    $ab$$9_ad$$5$$[0] = $d$$1$$();
    if(8 != $ab$$9_ad$$5$$[0]) {
      $B$$ && window.console.log("Unknown compression method!")
    }else {
      $y$$44$$ = $d$$1$$();
      $B$$ && $y$$44$$ & -32 && window.console.log("Unknown flags set!");
      $d$$1$$();
      $d$$1$$();
      $d$$1$$();
      $d$$1$$();
      $d$$1$$();
      $d$$1$$();
      if($y$$44$$ & 4) {
        $ab$$9_ad$$5$$[0] = $d$$1$$();
        $ab$$9_ad$$5$$[2] = $d$$1$$();
        $w$$7$$ = $ab$$9_ad$$5$$[0] + 256 * $ab$$9_ad$$5$$[1];
        $B$$ && window.console.log("Extra field size: " + $w$$7$$);
        for($ab$$9_ad$$5$$ = 0;$ab$$9_ad$$5$$ < $w$$7$$;$ab$$9_ad$$5$$++) {
          $d$$1$$()
        }
      }
      if($y$$44$$ & 8) {
        $ab$$9_ad$$5$$ = 0;
        for($f$$43$$ = [];$ah$$2$$ = $d$$1$$();) {
          if("7" == $ah$$2$$ || ":" == $ah$$2$$) {
            $ab$$9_ad$$5$$ = 0
          }
          $ab$$9_ad$$5$$ < $X$$1$$ - 1 && ($f$$43$$[$ab$$9_ad$$5$$++] = $ah$$2$$)
        }
        $B$$ && window.console.log("original file name: " + $f$$43$$)
      }
      if($y$$44$$ & 16) {
        for(;$d$$1$$();) {
        }
      }
      $y$$44$$ & 2 && ($d$$1$$(), $d$$1$$());
      $aa$$();
      $d$$1$$();
      $d$$1$$();
      $d$$1$$();
      $d$$1$$();
      $d$$1$$();
      $d$$1$$();
      $d$$1$$();
      $d$$1$$();
      $I$$ && $r$$4$$()
    }
  }
  var $m$$15$$ = [], $B$$ = $JSCompiler_alias_FALSE$$, $y$$44$$, $E$$ = 0, $N$$ = [], $h$$7$$ = Array(32768), $V$$ = 0, $I$$ = $JSCompiler_alias_FALSE$$, $F$$, $U$$ = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 
  82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 
  237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255], $Y$$ = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], $P$$ = [0, 0, 0, 0, 0, 0, 0, 0, 1, 
  1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], $J$$ = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], $x$$72$$ = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], $n$$19$$ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], $u$$1$$ = $Q$$, $b$$57$$ = 0, $Z$$ = 1, $a$$60$$ = 0, $X$$1$$ = 256, $f$$43$$ = [], $j$$33$$, 
  $t$$6$$ = Array(288), $L$$ = Array(32), $G$$ = 0, $W$$ = $JSCompiler_alias_NULL$$, $w$$7$$ = 0, $A$$ = Array(17);
  $A$$[0] = 0;
  var $M$$, $s$$26$$;
  $JXG$Util$Unzip$$.prototype.$unzip$ = function $$JXG$Util$Unzip$$$$$unzip$$() {
    $B$$ && window.console.log($u$$1$$);
    $r$$4$$();
    return $N$$
  }
}
;function $X$parserNRRD$$() {
  $X$parser$$.call(this);
  this._className = "parserNRRD"
}
$goog$inherits$$($X$parserNRRD$$, $X$parser$$);
$X$parserNRRD$$.prototype.parse = function $$X$parserNRRD$$$$parse$($object$$22$$, $data$$41$$) {
  var $modifiedEvent$$4_numberOfPixels_position$$2$$ = 0, $_results$$inline_409_datastream$$1_headerRegexMatch_lines$$inline_405$$ = $data$$41$$.match(/^([\s\S]*?)\r?\n\r?\n/), $modifiedEvent$$4_numberOfPixels_position$$2$$ = $_results$$inline_409_datastream$$1_headerRegexMatch_lines$$inline_405$$[0].length, $data$$inline_400_i$$167_l$$inline_404$$, $field$$inline_401_pixelValue$$2$$, $fn$$inline_402$$, $_data_i$$inline_403_m$$inline_406$$, $_i$$inline_407_max$$8$$, $_len$$inline_408_min$$8$$, $_results$$inline_409_datastream$$1_headerRegexMatch_lines$$inline_405$$ = 
  $_results$$inline_409_datastream$$1_headerRegexMatch_lines$$inline_405$$[1].split(/\r?\n/);
  for($_i$$inline_407_max$$8$$ = 0, $_len$$inline_408_min$$8$$ = $_results$$inline_409_datastream$$1_headerRegexMatch_lines$$inline_405$$.length;$_i$$inline_407_max$$8$$ < $_len$$inline_408_min$$8$$;$_i$$inline_407_max$$8$$++) {
    if($data$$inline_400_i$$167_l$$inline_404$$ = $_results$$inline_409_datastream$$1_headerRegexMatch_lines$$inline_405$$[$_i$$inline_407_max$$8$$], $data$$inline_400_i$$167_l$$inline_404$$.match(/NRRD\d+/)) {
      this.$isNrrd$ = $JSCompiler_alias_TRUE$$
    }else {
      if(!$data$$inline_400_i$$167_l$$inline_404$$.match(/^#/) && ($_data_i$$inline_403_m$$inline_406$$ = $data$$inline_400_i$$167_l$$inline_404$$.match(/(.*):(.*)/))) {
        $field$$inline_401_pixelValue$$2$$ = $_data_i$$inline_403_m$$inline_406$$[1].trim(), $data$$inline_400_i$$167_l$$inline_404$$ = $_data_i$$inline_403_m$$inline_406$$[2].trim(), ($fn$$inline_402$$ = this.$fieldFunctions$[$field$$inline_401_pixelValue$$2$$]) ? $fn$$inline_402$$.call(this, $data$$inline_400_i$$167_l$$inline_404$$) : this[$field$$inline_401_pixelValue$$2$$] = $data$$inline_400_i$$167_l$$inline_404$$
      }
    }
  }
  this.$isNrrd$ || $JSCompiler_alias_THROW$$(Error("Not an NRRD file"));
  "raw" !== this.encoding && "gzip" !== this.encoding && "gz" !== this.encoding && $JSCompiler_alias_THROW$$(Error("Only raw or gz/gzip encoding is allowed"));
  if(!this.$vectors$ && (this.$vectors$ = [new $goog$math$Vec3$$(1, 0, 0), new $goog$math$Vec3$$(0, 1, 0), new $goog$math$Vec3$$(0, 0, 1)], this.$spacings$)) {
    $_results$$inline_409_datastream$$1_headerRegexMatch_lines$$inline_405$$ = [];
    for($_data_i$$inline_403_m$$inline_406$$ = 0;2 >= $_data_i$$inline_403_m$$inline_406$$;$_data_i$$inline_403_m$$inline_406$$++) {
      $_results$$inline_409_datastream$$1_headerRegexMatch_lines$$inline_405$$.push(!isNaN(this.$spacings$[$_data_i$$inline_403_m$$inline_406$$]) ? this.$vectors$[$_data_i$$inline_403_m$$inline_406$$].scale(this.$spacings$[$_data_i$$inline_403_m$$inline_406$$]) : $JSCompiler_alias_VOID$$)
    }
  }
  $_data_i$$inline_403_m$$inline_406$$ = 0;
  $_data_i$$inline_403_m$$inline_406$$ = "gzip" == this.encoding || "gz" == this.encoding ? (new $JXG$Util$Unzip$$($data$$41$$.substr($modifiedEvent$$4_numberOfPixels_position$$2$$))).$unzip$()[0][0] : $data$$41$$.substr($modifiedEvent$$4_numberOfPixels_position$$2$$);
  $modifiedEvent$$4_numberOfPixels_position$$2$$ = this.$sizes$[0] * this.$sizes$[1] * this.$sizes$[2];
  $_results$$inline_409_datastream$$1_headerRegexMatch_lines$$inline_405$$ = Array($modifiedEvent$$4_numberOfPixels_position$$2$$);
  $_i$$inline_407_max$$8$$ = -Infinity;
  $_len$$inline_408_min$$8$$ = Infinity;
  for($data$$inline_400_i$$167_l$$inline_404$$ = 0;$data$$inline_400_i$$167_l$$inline_404$$ < $modifiedEvent$$4_numberOfPixels_position$$2$$;$data$$inline_400_i$$167_l$$inline_404$$++) {
    $field$$inline_401_pixelValue$$2$$ = this.$parseFunc$($_data_i$$inline_403_m$$inline_406$$, 0 + $data$$inline_400_i$$167_l$$inline_404$$ * this.$parseBytes$), $_results$$inline_409_datastream$$1_headerRegexMatch_lines$$inline_405$$[$data$$inline_400_i$$167_l$$inline_404$$] = $field$$inline_401_pixelValue$$2$$, $_i$$inline_407_max$$8$$ = Math.max($_i$$inline_407_max$$8$$, $field$$inline_401_pixelValue$$2$$), $_len$$inline_408_min$$8$$ = Math.min($_len$$inline_408_min$$8$$, $field$$inline_401_pixelValue$$2$$)
  }
  $object$$22$$.$_dimensions$ = [this.$sizes$[0], this.$sizes$[1], this.$sizes$[2]];
  $object$$22$$.$_spacing$ = [(new $goog$math$Vec3$$(this.$vectors$[0][0], this.$vectors$[0][1], this.$vectors$[0][2])).$magnitude$(), (new $goog$math$Vec3$$(this.$vectors$[1][0], this.$vectors$[1][1], this.$vectors$[1][2])).$magnitude$(), (new $goog$math$Vec3$$(this.$vectors$[2][0], this.$vectors$[2][1], this.$vectors$[2][2])).$magnitude$()];
  $object$$22$$.$_scalarRange$ = [$_len$$inline_408_min$$8$$, $_i$$inline_407_max$$8$$];
  $object$$22$$.$threshold$($_len$$inline_408_min$$8$$, $_i$$inline_407_max$$8$$);
  $object$$22$$.$create_$();
  $JSCompiler_StaticMethods_reslice$$($object$$22$$, $_results$$inline_409_datastream$$1_headerRegexMatch_lines$$inline_405$$, this.$sizes$, $_i$$inline_407_max$$8$$);
  $modifiedEvent$$4_numberOfPixels_position$$2$$ = new $X$event$ModifiedEvent$$;
  $modifiedEvent$$4_numberOfPixels_position$$2$$.$_object$ = $object$$22$$;
  this.dispatchEvent($modifiedEvent$$4_numberOfPixels_position$$2$$)
};
$X$parserNRRD$$.prototype.$fieldFunctions$ = {type:function $$X$parserNRRD$$$$$fieldFunctions$$type$($data$$43$$) {
  switch($data$$43$$) {
    case "unsigned char":
    ;
    case "uint8":
      this.$parseFunc$ = this.$parseUChar8$;
      this.$parseBytes$ = 1;
      break;
    case "signed char":
    ;
    case "int8":
      this.$parseFunc$ = this.$parseSChar8$;
      this.$parseBytes$ = 1;
      break;
    case "short":
    ;
    case "signed short":
    ;
    case "unsigned short":
    ;
    case "short int":
    ;
    case "int16":
      this.$parseFunc$ = this.$parseUInt16$;
      this.$parseBytes$ = 2;
      break;
    case "int":
    ;
    case "int32":
      break;
    case "float":
      this.$parseFunc$ = this.$parseFloat32$;
      this.$parseBytes$ = 4;
      break;
    default:
      $JSCompiler_alias_THROW$$(Error("Only short/int/int8/float data is allowed. Found " + $data$$43$$))
  }
  return this.type = $data$$43$$
}, endian:function $$X$parserNRRD$$$$$fieldFunctions$$endian$($data$$44$$) {
  return $data$$44$$
}, encoding:function $$X$parserNRRD$$$$$fieldFunctions$$encoding$($data$$45$$) {
  return this.encoding = $data$$45$$
}, dimension:function $$X$parserNRRD$$$$$fieldFunctions$$dimension$($data$$46$$) {
  return parseInt($data$$46$$, 10)
}, sizes:function $$X$parserNRRD$$$$$fieldFunctions$$sizes$($data$$47_i$$169$$) {
  var $_i$$inline_412$$, $_len$$inline_413$$, $_ref$$inline_414$$, $_results$$inline_415$$;
  $_ref$$inline_414$$ = $data$$47_i$$169$$.split(/\s+/);
  $_results$$inline_415$$ = [];
  for($_i$$inline_412$$ = 0, $_len$$inline_413$$ = $_ref$$inline_414$$.length;$_i$$inline_412$$ < $_len$$inline_413$$;$_i$$inline_412$$++) {
    $data$$47_i$$169$$ = $_ref$$inline_414$$[$_i$$inline_412$$], $_results$$inline_415$$.push(parseInt($data$$47_i$$169$$, 10))
  }
  return this.$sizes$ = $_results$$inline_415$$
}, "space directions":function $$X$parserNRRD$$$$$fieldFunctions$$__0$($data$$48$$) {
  var $f$$44$$, $parts$$3$$, $v$$13$$;
  $parts$$3$$ = $data$$48$$.match(/\(.*?\)/g);
  return this.$vectors$ = function() {
    var $_i$$2$$, $_len$$2$$, $_results$$2$$;
    $_results$$2$$ = [];
    for($_i$$2$$ = 0, $_len$$2$$ = $parts$$3$$.length;$_i$$2$$ < $_len$$2$$;$_i$$2$$++) {
      $v$$13$$ = $parts$$3$$[$_i$$2$$], $_results$$2$$.push(function() {
        var $_j$$, $_len2$$, $_ref$$1$$, $_results2$$;
        $_ref$$1$$ = $v$$13$$.slice(1, -1).split(/,/);
        $_results2$$ = [];
        for($_j$$ = 0, $_len2$$ = $_ref$$1$$.length;$_j$$ < $_len2$$;$_j$$++) {
          $f$$44$$ = $_ref$$1$$[$_j$$], $_results2$$.push(parseFloat($f$$44$$))
        }
        return $_results2$$
      }())
    }
    return $_results$$2$$
  }()
}, spacings:function $$X$parserNRRD$$$$$fieldFunctions$$spacings$($data$$49_f$$45$$) {
  var $parts$$4$$;
  $parts$$4$$ = $data$$49_f$$45$$.split(/\s+/);
  var $_i$$inline_418$$, $_len$$inline_419$$, $_results$$inline_420$$;
  $_results$$inline_420$$ = [];
  for($_i$$inline_418$$ = 0, $_len$$inline_419$$ = $parts$$4$$.length;$_i$$inline_418$$ < $_len$$inline_419$$;$_i$$inline_418$$++) {
    $data$$49_f$$45$$ = $parts$$4$$[$_i$$inline_418$$], $_results$$inline_420$$.push(parseFloat($data$$49_f$$45$$))
  }
  return this.$spacings$ = $_results$$inline_420$$
}};
$goog$exportSymbol$$("X.parserNRRD", $X$parserNRRD$$);
$goog$exportSymbol$$("X.parserNRRD.prototype.parse", $X$parserNRRD$$.prototype.parse);
function $X$parserHelper$$($data$$50$$) {
  $goog$isDefAndNotNull$$($data$$50$$) || $JSCompiler_alias_THROW$$(Error("Invalid data."));
  $X$base$$.call(this);
  this._className = "parserHelper";
  this.$_data$ = $data$$50$$;
  this.$_dataPointer$ = 0;
  this.$sizeOfChar$ = this.$_elementSize$ = 1;
  this.$sizeOfShort$ = 2;
  this.$sizeOfFloat$ = this.$sizeOfInt$ = 4
}
$goog$inherits$$($X$parserHelper$$, $X$base$$);
$X$parserHelper$$.prototype.$parseFunction$ = $JSCompiler_emptyFn$$();
$X$parserHelper$$.prototype.data = $JSCompiler_get$$("$_data$");
function $JSCompiler_StaticMethods_read$$($JSCompiler_StaticMethods_read$self$$, $chunks$$) {
  $goog$isDefAndNotNull$$($chunks$$) || ($chunks$$ = 1);
  var $arr_byte$$ = $JSCompiler_StaticMethods_read$self$$.$parseFunction$($JSCompiler_StaticMethods_read$self$$.$_data$, $JSCompiler_StaticMethods_read$self$$.$_dataPointer$, $chunks$$)[0];
  $JSCompiler_StaticMethods_read$self$$.$_dataPointer$ += $JSCompiler_StaticMethods_read$self$$.$_elementSize$ * $chunks$$;
  return 1 == $chunks$$ ? $arr_byte$$[0] : $arr_byte$$
}
;function $X$parserMGZ$$() {
  $X$parser$$.call(this);
  this._className = "parserMGZ"
}
$goog$inherits$$($X$parserMGZ$$, $X$parser$$);
$X$parserMGZ$$.prototype.parse = function $$X$parserMGZ$$$$parse$($object$$23$$, $JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$, $JSCompiler_object_inline_ndim1_702__dimensions_b_zipped_func$$inline_612$$) {
  var $JSCompiler_object_inline_ndim2_703__data$$1_elementSize$$inline_613_max$$9$$ = 0, $data$$inline_423_dataptr$$inline_430_r$$inline_637$$ = $JSCompiler_object_inline_ndim2_703__data$$1_elementSize$$inline_613_max$$9$$ = $JSCompiler_object_inline_ndim1_702__dimensions_b_zipped_func$$inline_612$$ ? (new $JXG$Util$Unzip$$($JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$.substr(0))).$unzip$()[0][0] : $JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$.substr(0), 
  $JSCompiler_object_inline_ndim3_704$$ = $JSCompiler_object_inline_ndim2_703__data$$1_elementSize$$inline_613_max$$9$$ = $JSCompiler_object_inline_ndim1_702__dimensions_b_zipped_func$$inline_612$$ = 0, $JSCompiler_object_inline_type_706$$ = 0, $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ = 0, $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$ = 
  [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], $JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$ = [], $JSCompiler_object_inline_v_data_712_unused_space_size$$inline_429$$ = [], $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ = $JSCompiler_alias_NULL$$, $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$, 
  $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ = {value:0, name:"uchar", size:1, $func_arrayRead$:this.$parseUChar8Array$.bind(this)}, $JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$ = {value:1, name:"int", size:4, $func_arrayRead$:this.$parseUInt32EndianSwappedArray$.bind(this)}, 
  $JSCompiler_object_inline_MRI_FLOAT_2$$inline_427_m$$inline_639_p$$inline_640$$ = {value:3, name:"float", size:4, $func_arrayRead$:this.$parseFloat32EndianSwappedArray$.bind(this)}, $JSCompiler_object_inline_MRI_SHORT_3$$inline_428$$ = {value:4, name:"short", size:2, $func_arrayRead$:this.$parseUInt16EndianSwappedArray$.bind(this)}, $JSCompiler_object_inline_v_data_712_unused_space_size$$inline_429$$ = 256, $data$$inline_423_dataptr$$inline_430_r$$inline_637$$ = new $X$parserHelper$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), 
  $JSCompiler_object_inline_ndim1_702__dimensions_b_zipped_func$$inline_612$$ = this.$parseUInt32EndianSwappedArray$.bind(this), $JSCompiler_object_inline_ndim2_703__data$$1_elementSize$$inline_613_max$$9$$ = $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$sizeOfInt$;
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$parseFunction$ = $JSCompiler_object_inline_ndim1_702__dimensions_b_zipped_func$$inline_612$$;
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$_elementSize$ = $JSCompiler_object_inline_ndim2_703__data$$1_elementSize$$inline_613_max$$9$$;
  $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$);
  $JSCompiler_object_inline_ndim1_702__dimensions_b_zipped_func$$inline_612$$ = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$);
  $JSCompiler_object_inline_ndim2_703__data$$1_elementSize$$inline_613_max$$9$$ = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$);
  $JSCompiler_object_inline_ndim3_704$$ = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$);
  $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$);
  $JSCompiler_object_inline_type_706$$ = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$);
  switch($JSCompiler_object_inline_type_706$$) {
    case 0:
      $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$ = $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$;
      break;
    case 1:
      $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$ = $JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$;
      break;
    case 3:
      $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$ = $JSCompiler_object_inline_MRI_FLOAT_2$$inline_427_m$$inline_639_p$$inline_640$$;
      break;
    case 4:
      $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$ = $JSCompiler_object_inline_MRI_SHORT_3$$inline_428$$
  }
  $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$);
  $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ = this.$parseUInt16EndianSwappedArray$.bind(this);
  $JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$ = $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$sizeOfShort$;
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$parseFunction$ = $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$;
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$_elementSize$ = $JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$;
  $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$);
  $JSCompiler_object_inline_v_data_712_unused_space_size$$inline_429$$ -= 2;
  0 < $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ && ($JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ = this.$parseFloat32EndianSwappedArray$.bind(this), $JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$ = 
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$sizeOfFloat$, $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$parseFunction$ = $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$, $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$_elementSize$ = $JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$, 
  $JSCompiler_object_inline_v_data_712_unused_space_size$$inline_429$$ -= 60, $JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$[0] = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$[1] = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$[2] = 
  $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$[0][0] = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$[1][0] = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), 
  $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$[2][0] = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$[0][1] = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$[1][1] = 
  $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$[2][1] = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$[0][2] = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), 
  $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$[1][2] = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$[2][2] = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$[0][3] = 
  $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$[1][3] = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$[2][3] = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$));
  $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$ = this.$parseUChar8Array$.bind(this);
  $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ = $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$sizeOfChar$;
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$parseFunction$ = $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$;
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$_elementSize$ = $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$;
  $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$, $JSCompiler_object_inline_v_data_712_unused_space_size$$inline_429$$);
  $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$ = $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$.size;
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$parseFunction$ = $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$.$func_arrayRead$;
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$_elementSize$ = $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$;
  $JSCompiler_object_inline_v_data_712_unused_space_size$$inline_429$$ = $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$, $JSCompiler_object_inline_ndim1_702__dimensions_b_zipped_func$$inline_612$$ * $JSCompiler_object_inline_ndim2_703__data$$1_elementSize$$inline_613_max$$9$$ * $JSCompiler_object_inline_ndim3_704$$);
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$_dataPointer$ + 16 < $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.data().length && ($JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$ = this.$parseFloat32EndianSwappedArray$.bind(this), $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$ = $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$sizeOfFloat$, $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$parseFunction$ = 
  $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$, $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$_elementSize$ = $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$, $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$), 
  $JSCompiler_StaticMethods_read$$($data$$inline_423_dataptr$$inline_430_r$$inline_637$$));
  $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$ = $JSCompiler_object_inline_v_data_712_unused_space_size$$inline_429$$;
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$ = {$mean$:0, $variance$:0, $deviation$:0, $prod$:1, $sum$:0, min:0, $minIndex$:0, max:0, $maxIndex$:0};
  $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$ = $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$.length;
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.size = $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$;
  $JSCompiler_object_inline_MRI_FLOAT_2$$inline_427_m$$inline_639_p$$inline_640$$ = 0;
  $JSCompiler_object_inline_MRI_FLOAT_2$$inline_427_m$$inline_639_p$$inline_640$$ = 1;
  $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ = 0;
  for($JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$ = $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$;0 <= $JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$;$JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$--) {
    $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ += $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$[$JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$], $JSCompiler_object_inline_MRI_FLOAT_2$$inline_427_m$$inline_639_p$$inline_640$$ *= $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$[$JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$], 
    $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.min >= $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$[$JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$] && ($data$$inline_423_dataptr$$inline_430_r$$inline_637$$.min = $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$[$JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$], 
    $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$minIndex$ = $JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$), $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.max <= $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$[$JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$] && ($data$$inline_423_dataptr$$inline_430_r$$inline_637$$.max = 
    $JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$[$JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$], $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$maxIndex$ = $JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$)
  }
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$prod$ = $JSCompiler_object_inline_MRI_FLOAT_2$$inline_427_m$$inline_639_p$$inline_640$$;
  $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$sum$ = $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$;
  for($JSCompiler_object_inline_MRI_FLOAT_2$$inline_427_m$$inline_639_p$$inline_640$$ = $data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$mean$ = $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ / $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$, $JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$ = 
  $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$, $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ = 0;$JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$--;$JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ += 
  Math.pow($JSCompiler_object_inline_MRIdatatype_715_data$$inline_636_func$$inline_632$$[$JSCompiler_object_inline_MRI_INT_1$$inline_426_elementSize$$inline_617_elementSize$$inline_621_l$$inline_642$$] - $JSCompiler_object_inline_MRI_FLOAT_2$$inline_427_m$$inline_639_p$$inline_640$$, 2)) {
  }
  $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ = ($data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$deviation$ = Math.sqrt($data$$inline_423_dataptr$$inline_430_r$$inline_637$$.$variance$ = $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$ / 
  $JSCompiler_object_inline_M_ras_710_elementSize$$inline_629_elementSize$$inline_633_func$$inline_624_t$$inline_638$$), $data$$inline_423_dataptr$$inline_430_r$$inline_637$$);
  $JSCompiler_object_inline_ndim1_702__dimensions_b_zipped_func$$inline_612$$ = [$JSCompiler_object_inline_ndim1_702__dimensions_b_zipped_func$$inline_612$$, $JSCompiler_object_inline_ndim2_703__data$$1_elementSize$$inline_613_max$$9$$, $JSCompiler_object_inline_ndim3_704$$];
  $object$$23$$.$_dimensions$ = $JSCompiler_object_inline_ndim1_702__dimensions_b_zipped_func$$inline_612$$;
  $object$$23$$.$_spacing$ = $JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$;
  $JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$ = $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$.min;
  $JSCompiler_object_inline_ndim2_703__data$$1_elementSize$$inline_613_max$$9$$ = $JSCompiler_object_inline_MRI_UCHAR_0$$inline_425_JSCompiler_object_inline_rasgoodflag_708_JSCompiler_object_inline_stats_714_elementSize$$inline_625_func$$inline_616_func$$inline_620_s$$inline_641$$.max;
  $object$$23$$.$_scalarRange$ = [$JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$, $JSCompiler_object_inline_ndim2_703__data$$1_elementSize$$inline_613_max$$9$$];
  $object$$23$$.$threshold$($JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$, $JSCompiler_object_inline_ndim2_703__data$$1_elementSize$$inline_613_max$$9$$);
  $object$$23$$.$create_$();
  $JSCompiler_StaticMethods_reslice$$($object$$23$$, $JSCompiler_object_inline_v_data_712_unused_space_size$$inline_429$$, $JSCompiler_object_inline_ndim1_702__dimensions_b_zipped_func$$inline_612$$, $JSCompiler_object_inline_ndim2_703__data$$1_elementSize$$inline_613_max$$9$$);
  $JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$ = new $X$event$ModifiedEvent$$;
  $JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$.$_object$ = $object$$23$$;
  this.dispatchEvent($JSCompiler_object_inline_v_voxelsize_711_data$$52_min$$9_modifiedEvent$$5$$)
};
$goog$exportSymbol$$("X.parserMGZ", $X$parserMGZ$$);
$goog$exportSymbol$$("X.parserMGZ.prototype.parse", $X$parserMGZ$$.prototype.parse);
function $X$parserCRV$$() {
  $X$parser$$.call(this);
  this._className = "parserCRV"
}
$goog$inherits$$($X$parserCRV$$, $X$parser$$);
$X$parserCRV$$.prototype.parse = function $$X$parserCRV$$$$parse$($object$$24$$, $data$$54$$) {
  var $JSCompiler_StaticMethods_setGlArray$self$$inline_434_ind$$1_modifiedEvent$$6$$ = $object$$24$$.$_pointIndices$;
  0 == $JSCompiler_StaticMethods_setGlArray$self$$inline_434_ind$$1_modifiedEvent$$6$$.length && $JSCompiler_alias_THROW$$(Error("No _pointIndices defined on the X.object."));
  var $currentOffset$$1_i$$170$$ = 0, $magicNumber_numVertices$$ = (this.$parseUChar8$($data$$54$$, $currentOffset$$1_i$$170$$) << 16) + (this.$parseUChar8$($data$$54$$, $currentOffset$$1_i$$170$$ + 1) << 8) + this.$parseUChar8$($data$$54$$, $currentOffset$$1_i$$170$$ + 2) & 16777215, $currentOffset$$1_i$$170$$ = $currentOffset$$1_i$$170$$ + 3;
  if(16777215 != $magicNumber_numVertices$$) {
    alert("Can't load curvature file, invalid magic number.")
  }else {
    var $magicNumber_numVertices$$ = $JSCompiler_StaticMethods_parseUInt32EndianSwapped$$(this, $data$$54$$, $currentOffset$$1_i$$170$$), $currentOffset$$1_i$$170$$ = $currentOffset$$1_i$$170$$ + 4 + 4 + 4, $numPosValues_orderedCurvatures$$ = 0, $numNegValues_numberOfIndices$$ = 0, $currentIndex$$5_currentScalar_negSum$$ = 0, $posSum$$ = 0, $posMean$$ = 0, $negMean$$ = 0, $posStdDev$$ = 0, $negStdDev$$ = 0, $sum$$1$$ = 0, $mean$$1$$ = 0, $diffSq_numValues$$ = 0, $vertexCurvatures$$ = Array($magicNumber_numVertices$$), 
    $minCurv$$ = Array(2), $maxCurv$$ = Array(2), $k$$6$$;
    for($k$$6$$ = 0;$k$$6$$ < $magicNumber_numVertices$$;$k$$6$$++) {
      var $curv$$ = $JSCompiler_StaticMethods_parseFloat32EndianSwapped$$(this, $data$$54$$, $currentOffset$$1_i$$170$$), $currentOffset$$1_i$$170$$ = $currentOffset$$1_i$$170$$ + 4;
      0 == $k$$6$$ && ($minCurv$$[0] = $maxCurv$$[0] = $curv$$);
      0 <= $curv$$ ? ($numPosValues_orderedCurvatures$$++, $posSum$$ += $curv$$) : ($numNegValues_numberOfIndices$$++, $currentIndex$$5_currentScalar_negSum$$ += $curv$$);
      $sum$$1$$ += $curv$$;
      $diffSq_numValues$$++;
      $maxCurv$$[0] = Math.max($curv$$, $maxCurv$$[0]);
      $minCurv$$[0] = Math.min($curv$$, $minCurv$$[0]);
      $vertexCurvatures$$[$k$$6$$] = $curv$$
    }
    0 != $numPosValues_orderedCurvatures$$ && ($posMean$$ = $posSum$$ / $numPosValues_orderedCurvatures$$);
    0 != $numNegValues_numberOfIndices$$ && ($negMean$$ = $currentIndex$$5_currentScalar_negSum$$ / $numNegValues_numberOfIndices$$);
    0 != $diffSq_numValues$$ && ($mean$$1$$ = $sum$$1$$ / $diffSq_numValues$$);
    for($currentOffset$$1_i$$170$$ = $sum$$1$$ = $currentIndex$$5_currentScalar_negSum$$ = $posSum$$ = 0;$currentOffset$$1_i$$170$$ < $magicNumber_numVertices$$;$currentOffset$$1_i$$170$$++) {
      $curv$$ = $vertexCurvatures$$[$currentOffset$$1_i$$170$$], $diffSq_numValues$$ = 0, 0 <= $curv$$ ? ($diffSq_numValues$$ = Math.pow($curv$$ - $posMean$$, 2), $posSum$$ += $diffSq_numValues$$) : ($diffSq_numValues$$ = Math.pow($curv$$ - $negMean$$, 2), $currentIndex$$5_currentScalar_negSum$$ += $diffSq_numValues$$), $diffSq_numValues$$ = Math.pow($curv$$ - $mean$$1$$, 2), $sum$$1$$ += $diffSq_numValues$$
    }
    1 < $numPosValues_orderedCurvatures$$ && ($posStdDev$$ = Math.sqrt($posSum$$ / ($numPosValues_orderedCurvatures$$ - 1)));
    1 < $numNegValues_numberOfIndices$$ && ($negStdDev$$ = Math.sqrt($currentIndex$$5_currentScalar_negSum$$ / ($numNegValues_numberOfIndices$$ - 1)));
    $minCurv$$[1] = $negMean$$ - 2.5 * $negStdDev$$;
    $maxCurv$$[1] = $posMean$$ + 2.5 * $posStdDev$$;
    $numNegValues_numberOfIndices$$ = $JSCompiler_StaticMethods_setGlArray$self$$inline_434_ind$$1_modifiedEvent$$6$$.length;
    $numPosValues_orderedCurvatures$$ = [];
    for($currentOffset$$1_i$$170$$ = 0;$currentOffset$$1_i$$170$$ < $numNegValues_numberOfIndices$$;$currentOffset$$1_i$$170$$++) {
      $currentIndex$$5_currentScalar_negSum$$ = $JSCompiler_StaticMethods_setGlArray$self$$inline_434_ind$$1_modifiedEvent$$6$$[$currentOffset$$1_i$$170$$], $currentIndex$$5_currentScalar_negSum$$ > $magicNumber_numVertices$$ && $JSCompiler_alias_THROW$$(Error("Could not find scalar for vertex.")), $currentIndex$$5_currentScalar_negSum$$ = $vertexCurvatures$$[$currentIndex$$5_currentScalar_negSum$$], $numPosValues_orderedCurvatures$$.push($currentIndex$$5_currentScalar_negSum$$), $numPosValues_orderedCurvatures$$.push($currentIndex$$5_currentScalar_negSum$$), 
      $numPosValues_orderedCurvatures$$.push($currentIndex$$5_currentScalar_negSum$$)
    }
    $object$$24$$.$_scalars$.$_min$ = $minCurv$$[1];
    $object$$24$$.$_scalars$.$_max$ = $maxCurv$$[1];
    $object$$24$$.$_scalars$._minThreshold = $minCurv$$[1];
    $object$$24$$.$_scalars$._maxThreshold = $maxCurv$$[1];
    $object$$24$$.$_scalars$.$_array$ = $vertexCurvatures$$;
    $JSCompiler_StaticMethods_setGlArray$self$$inline_434_ind$$1_modifiedEvent$$6$$ = $object$$24$$.$_scalars$;
    $JSCompiler_StaticMethods_setGlArray$self$$inline_434_ind$$1_modifiedEvent$$6$$.$_glArray$ = $numPosValues_orderedCurvatures$$;
    $JSCompiler_StaticMethods_setGlArray$self$$inline_434_ind$$1_modifiedEvent$$6$$.$_dirty$ = $JSCompiler_alias_TRUE$$;
    $JSCompiler_StaticMethods_setGlArray$self$$inline_434_ind$$1_modifiedEvent$$6$$ = new $X$event$ModifiedEvent$$;
    $JSCompiler_StaticMethods_setGlArray$self$$inline_434_ind$$1_modifiedEvent$$6$$.$_object$ = $object$$24$$;
    this.dispatchEvent($JSCompiler_StaticMethods_setGlArray$self$$inline_434_ind$$1_modifiedEvent$$6$$)
  }
};
$goog$exportSymbol$$("X.parserCRV", $X$parserCRV$$);
$goog$exportSymbol$$("X.parserCRV.prototype.parse", $X$parserCRV$$.prototype.parse);
function $X$parserTRK$$() {
  $X$parser$$.call(this);
  this._className = "parserTRK"
}
$goog$inherits$$($X$parserTRK$$, $X$parser$$);
$X$parserTRK$$.prototype.parse = function $$X$parserTRK$$$$parse$($object$$25$$, $data$$55$$) {
  var $JSCompiler_StaticMethods_setGlArray$self$$inline_447_modifiedEvent$$7_p$$20$$ = $object$$25$$.$_points$, $n$$20$$ = $object$$25$$.$_normals$, $c$$9$$ = $object$$25$$.$_colors$, $centerX_offset$$34$$ = 0, $JSCompiler_object_inline_n_count_24_offset$$inline_440$$ = $centerX_offset$$34$$ + 6, $fibers_max$$inline_442$$ = 0, $lengths_min$$inline_443$$ = Infinity, $i$$inline_444_minLength$$1$$;
  for($i$$inline_444_minLength$$1$$ = 0;3 > $i$$inline_444_minLength$$1$$;$i$$inline_444_minLength$$1$$++) {
    var $maxLength_val$$inline_445$$ = this.$parseUInt16$($data$$55$$, $JSCompiler_object_inline_n_count_24_offset$$inline_440$$ + 2 * $i$$inline_444_minLength$$1$$), $fibers_max$$inline_442$$ = Math.max($fibers_max$$inline_442$$, $maxLength_val$$inline_445$$), $lengths_min$$inline_443$$ = Math.min($lengths_min$$inline_443$$, $maxLength_val$$inline_445$$)
  }
  var $JSCompiler_object_inline_voxel_size_6_numberOfPoints$$1$$ = $JSCompiler_StaticMethods_parseFloat32Array$$(this, $data$$55$$, $centerX_offset$$34$$ + 12, 3)[0];
  $JSCompiler_StaticMethods_parseFloat32Array$$(this, $data$$55$$, $centerX_offset$$34$$ + 24, 3);
  var $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$ = this.$parseUInt16$($data$$55$$, $centerX_offset$$34$$ + 36), $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$ = this.$parseUInt16$($data$$55$$, $centerX_offset$$34$$ + 238);
  $JSCompiler_StaticMethods_parseFloat32Array$$(this, $data$$55$$, $centerX_offset$$34$$ + 440, 16);
  $JSCompiler_StaticMethods_parseFloat32Array$$(this, $data$$55$$, $centerX_offset$$34$$ + 956, 6);
  $JSCompiler_object_inline_n_count_24_offset$$inline_440$$ = $JSCompiler_StaticMethods_parseUInt32$$(this, $data$$55$$, $centerX_offset$$34$$ + 988);
  $centerX_offset$$34$$ = $JSCompiler_StaticMethods_parseUInt32$$(this, $data$$55$$, $centerX_offset$$34$$ + 996);
  $fibers_max$$inline_442$$ = [];
  $lengths_min$$inline_443$$ = [];
  $i$$inline_444_minLength$$1$$ = Infinity;
  var $maxLength_val$$inline_445$$ = -Infinity, $minX_nCurrentPointX$$ = $JSCompiler_alias_NULL$$, $maxX_nCurrentPointY$$ = $JSCompiler_alias_NULL$$, $centerY_minY$$ = $JSCompiler_alias_NULL$$, $maxY_points$$ = $JSCompiler_alias_NULL$$, $minZ_scalarArray$$ = $JSCompiler_alias_NULL$$, $centerZ_maxZ$$ = $JSCompiler_alias_NULL$$, $i$$171$$;
  for($i$$171$$ = 0;$i$$171$$ < $JSCompiler_object_inline_n_count_24_offset$$inline_440$$;$i$$171$$++) {
    for(var $cMinY_nNextPointX_numPoints$$ = $JSCompiler_StaticMethods_parseUInt32$$(this, $data$$55$$, $centerX_offset$$34$$), $currentPoints_nCurrentPointZ$$ = new $X$triplets$$, $length$$22$$ = 0, $centerX_offset$$34$$ = $centerX_offset$$34$$ + 4, $cMinX_j$$34$$ = 0;$cMinX_j$$34$$ < $cMinY_nNextPointX_numPoints$$;$cMinX_j$$34$$++) {
      var $cMaxY_nNextPointY_x$$73$$ = this.$parseFloat32$($data$$55$$, $centerX_offset$$34$$), $centerX_offset$$34$$ = $centerX_offset$$34$$ + 4, $cMinZ_nNextPointZ_y$$45$$ = this.$parseFloat32$($data$$55$$, $centerX_offset$$34$$), $centerX_offset$$34$$ = $centerX_offset$$34$$ + 4, $cMaxZ_nNextPointLength_z$$8$$ = this.$parseFloat32$($data$$55$$, $centerX_offset$$34$$), $centerX_offset$$34$$ = $centerX_offset$$34$$ + 4, $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$ = $JSCompiler_alias_NULL$$;
      0 < $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$ && ($JSCompiler_StaticMethods_parseFloat32Array$$(this, $data$$55$$, $centerX_offset$$34$$, $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$), $centerX_offset$$34$$ += 4 * $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$);
      $cMaxY_nNextPointY_x$$73$$ /= $JSCompiler_object_inline_voxel_size_6_numberOfPoints$$1$$[0];
      $cMinZ_nNextPointZ_y$$45$$ /= $JSCompiler_object_inline_voxel_size_6_numberOfPoints$$1$$[1];
      $cMaxZ_nNextPointLength_z$$8$$ /= $JSCompiler_object_inline_voxel_size_6_numberOfPoints$$1$$[2];
      $currentPoints_nCurrentPointZ$$.add($cMaxY_nNextPointY_x$$73$$, $cMinZ_nNextPointZ_y$$45$$, $cMaxZ_nNextPointLength_z$$8$$);
      0 < $cMinX_j$$34$$ && ($cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$ = $currentPoints_nCurrentPointZ$$.get($cMinX_j$$34$$ - 1), $length$$22$$ += Math.sqrt(Math.pow($cMaxY_nNextPointY_x$$73$$ - $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$[0], 2) + Math.pow($cMinZ_nNextPointZ_y$$45$$ - $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$[1], 2) + Math.pow($cMaxZ_nNextPointLength_z$$8$$ - $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$[2], 2)))
    }
    0 < $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$ && ($centerX_offset$$34$$ += 4 * $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$);
    $cMinX_j$$34$$ = $currentPoints_nCurrentPointZ$$.$_minA$;
    $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$ = $currentPoints_nCurrentPointZ$$.$_maxA$;
    $cMinY_nNextPointX_numPoints$$ = $currentPoints_nCurrentPointZ$$.$_minB$;
    $cMaxY_nNextPointY_x$$73$$ = $currentPoints_nCurrentPointZ$$.$_maxB$;
    $cMinZ_nNextPointZ_y$$45$$ = $currentPoints_nCurrentPointZ$$.$_minC$;
    $cMaxZ_nNextPointLength_z$$8$$ = $currentPoints_nCurrentPointZ$$.$_maxC$;
    if(!$minX_nCurrentPointX$$ || $cMinX_j$$34$$ < $minX_nCurrentPointX$$) {
      $minX_nCurrentPointX$$ = $cMinX_j$$34$$
    }
    if(!$maxX_nCurrentPointY$$ || $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$ > $maxX_nCurrentPointY$$) {
      $maxX_nCurrentPointY$$ = $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$
    }
    if(!$centerY_minY$$ || $cMinY_nNextPointX_numPoints$$ < $centerY_minY$$) {
      $centerY_minY$$ = $cMinY_nNextPointX_numPoints$$
    }
    if(!$maxY_points$$ || $cMaxY_nNextPointY_x$$73$$ > $maxY_points$$) {
      $maxY_points$$ = $cMaxY_nNextPointY_x$$73$$
    }
    if(!$minZ_scalarArray$$ || $cMinZ_nNextPointZ_y$$45$$ < $minZ_scalarArray$$) {
      $minZ_scalarArray$$ = $cMinZ_nNextPointZ_y$$45$$
    }
    if(!$centerZ_maxZ$$ || $cMaxZ_nNextPointLength_z$$8$$ > $centerZ_maxZ$$) {
      $centerZ_maxZ$$ = $cMaxZ_nNextPointLength_z$$8$$
    }
    $fibers_max$$inline_442$$.push($currentPoints_nCurrentPointZ$$);
    $lengths_min$$inline_443$$.push($length$$22$$)
  }
  $centerX_offset$$34$$ = ($minX_nCurrentPointX$$ + $maxX_nCurrentPointY$$) / 2;
  $centerY_minY$$ = ($centerY_minY$$ + $maxY_points$$) / 2;
  $centerZ_maxZ$$ = ($minZ_scalarArray$$ + $centerZ_maxZ$$) / 2;
  $minZ_scalarArray$$ = [];
  for($i$$171$$ = 0;$i$$171$$ < $JSCompiler_object_inline_n_count_24_offset$$inline_440$$;$i$$171$$++) {
    $maxY_points$$ = $fibers_max$$inline_442$$[$i$$171$$];
    $JSCompiler_object_inline_voxel_size_6_numberOfPoints$$1$$ = $maxY_points$$.count();
    $length$$22$$ = $lengths_min$$inline_443$$[$i$$171$$];
    $i$$inline_444_minLength$$1$$ = Math.min($i$$inline_444_minLength$$1$$, $length$$22$$);
    $maxLength_val$$inline_445$$ = Math.max($maxLength_val$$inline_445$$, $length$$22$$);
    for($cMinX_j$$34$$ = 0;$cMinX_j$$34$$ < $JSCompiler_object_inline_voxel_size_6_numberOfPoints$$1$$ - 1;$cMinX_j$$34$$++) {
      $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$ = $maxY_points$$.get($cMinX_j$$34$$), $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$ = $maxY_points$$.get($cMinX_j$$34$$ + 1), $JSCompiler_StaticMethods_setGlArray$self$$inline_447_modifiedEvent$$7_p$$20$$.add($JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$[0], $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$[1], $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$[2]), 
      $JSCompiler_StaticMethods_setGlArray$self$$inline_447_modifiedEvent$$7_p$$20$$.add($JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[0], $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[1], $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[2]), $minX_nCurrentPointX$$ = $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$[0] - $centerX_offset$$34$$, $maxX_nCurrentPointY$$ = $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$[1] - 
      $centerY_minY$$, $currentPoints_nCurrentPointZ$$ = $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$[2] - $centerZ_maxZ$$, $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$ = Math.sqrt($minX_nCurrentPointX$$ * $minX_nCurrentPointX$$ + $maxX_nCurrentPointY$$ * $maxX_nCurrentPointY$$ + $currentPoints_nCurrentPointZ$$ * $currentPoints_nCurrentPointZ$$), $cMinY_nNextPointX_numPoints$$ = $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[0] - $centerX_offset$$34$$, 
      $cMaxY_nNextPointY_x$$73$$ = $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[1] - $centerY_minY$$, $cMinZ_nNextPointZ_y$$45$$ = $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[2] - $centerZ_maxZ$$, $cMaxZ_nNextPointLength_z$$8$$ = Math.sqrt($cMinY_nNextPointX_numPoints$$ * $cMinY_nNextPointX_numPoints$$ + $cMaxY_nNextPointY_x$$73$$ * $cMaxY_nNextPointY_x$$73$$ + $cMinZ_nNextPointZ_y$$45$$ * $cMinZ_nNextPointZ_y$$45$$), $n$$20$$.add($minX_nCurrentPointX$$ / 
      $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$, $maxX_nCurrentPointY$$ / $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$, $currentPoints_nCurrentPointZ$$ / $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$), $n$$20$$.add($cMinY_nNextPointX_numPoints$$ / $cMaxZ_nNextPointLength_z$$8$$, $cMaxY_nNextPointY_x$$73$$ / $cMaxZ_nNextPointLength_z$$8$$, $cMinZ_nNextPointZ_y$$45$$ / $cMaxZ_nNextPointLength_z$$8$$), $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$ = [Math.abs($JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[0] - 
      $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$[0]), Math.abs($JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[1] - $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$[1]), Math.abs($JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[2] - $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$[2])], $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$ = 
      Math.sqrt($JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[0] * $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[0] + $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[1] * $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[1] + $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[2] * $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[2]), $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[0] /= 
      $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$, $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[1] /= $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$, $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[2] /= $JSCompiler_object_inline_n_properties_10_currentPoint$$5_distance$$5_start$$7$$, $c$$9$$.add($JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[0], $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[1], 
      $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[2]), $c$$9$$.add($JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[0], $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[1], $JSCompiler_object_inline_n_scalars_8_diff_end$$5_nextPoint$$1$$[2]), $minZ_scalarArray$$.push($length$$22$$), $minZ_scalarArray$$.push($length$$22$$), $minZ_scalarArray$$.push($length$$22$$), $minZ_scalarArray$$.push($length$$22$$), $minZ_scalarArray$$.push($length$$22$$), 
      $minZ_scalarArray$$.push($length$$22$$)
    }
  }
  $object$$25$$.$setType$("LINES");
  $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$ = new $X$scalars$$;
  $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$.$_min$ = $i$$inline_444_minLength$$1$$;
  $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$.$_max$ = $maxLength_val$$inline_445$$;
  $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$._minThreshold = $i$$inline_444_minLength$$1$$;
  $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$._maxThreshold = $maxLength_val$$inline_445$$;
  $JSCompiler_StaticMethods_setGlArray$self$$inline_447_modifiedEvent$$7_p$$20$$ = $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$;
  $JSCompiler_StaticMethods_setGlArray$self$$inline_447_modifiedEvent$$7_p$$20$$.$_glArray$ = $minZ_scalarArray$$;
  $JSCompiler_StaticMethods_setGlArray$self$$inline_447_modifiedEvent$$7_p$$20$$.$_dirty$ = $JSCompiler_alias_TRUE$$;
  $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$.$_replaceMode$ = $JSCompiler_alias_FALSE$$;
  $object$$25$$.$_scalars$ = $cMaxX_nCurrentPointLength_oldPoint_scalars$$1$$;
  $JSCompiler_StaticMethods_setGlArray$self$$inline_447_modifiedEvent$$7_p$$20$$ = new $X$event$ModifiedEvent$$;
  $JSCompiler_StaticMethods_setGlArray$self$$inline_447_modifiedEvent$$7_p$$20$$.$_object$ = $object$$25$$;
  this.dispatchEvent($JSCompiler_StaticMethods_setGlArray$self$$inline_447_modifiedEvent$$7_p$$20$$)
};
$goog$exportSymbol$$("X.parserTRK", $X$parserTRK$$);
$goog$exportSymbol$$("X.parserTRK.prototype.parse", $X$parserTRK$$.prototype.parse);
function $X$parserLUT$$() {
  $X$parser$$.call(this);
  this._className = "parserLUT"
}
$goog$inherits$$($X$parserLUT$$, $X$parser$$);
$X$parserLUT$$.prototype.parse = function $$X$parserLUT$$$$parse$($object$$26$$, $data$$56_dataAsArray$$2$$, $colorTable$$1_modifiedEvent$$8$$) {
  var $data$$56_dataAsArray$$2$$ = $data$$56_dataAsArray$$2$$.split("\n"), $numberOfLines$$2$$ = $data$$56_dataAsArray$$2$$.length, $i$$172$$;
  for($i$$172$$ = 0;$i$$172$$ < $numberOfLines$$2$$;++$i$$172$$) {
    var $line$$3_lineFields$$2$$ = $data$$56_dataAsArray$$2$$[$i$$172$$], $line$$3_lineFields$$2$$ = $line$$3_lineFields$$2$$.replace(/^\s+|\s+$/g, "");
    "#" != $line$$3_lineFields$$2$$[0] && ($line$$3_lineFields$$2$$ = $line$$3_lineFields$$2$$.split(" "), $line$$3_lineFields$$2$$ = $line$$3_lineFields$$2$$.filter(function($v$$14$$) {
      return"" != $v$$14$$
    }), 6 == $line$$3_lineFields$$2$$.length && ($line$$3_lineFields$$2$$[2] = parseInt($line$$3_lineFields$$2$$[2], 10) / 255, $line$$3_lineFields$$2$$[3] = parseInt($line$$3_lineFields$$2$$[3], 10) / 255, $line$$3_lineFields$$2$$[4] = parseInt($line$$3_lineFields$$2$$[4], 10) / 255, $line$$3_lineFields$$2$$[5] = parseInt($line$$3_lineFields$$2$$[5], 10) / 255, $colorTable$$1_modifiedEvent$$8$$.add(parseInt($line$$3_lineFields$$2$$[0], 10), $line$$3_lineFields$$2$$[1], $line$$3_lineFields$$2$$[2], 
    $line$$3_lineFields$$2$$[3], $line$$3_lineFields$$2$$[4], $line$$3_lineFields$$2$$[5], 10)))
  }
  $colorTable$$1_modifiedEvent$$8$$ = new $X$event$ModifiedEvent$$;
  $colorTable$$1_modifiedEvent$$8$$.$_object$ = $object$$26$$;
  this.dispatchEvent($colorTable$$1_modifiedEvent$$8$$)
};
$goog$exportSymbol$$("X.parserLUT", $X$parserLUT$$);
$goog$exportSymbol$$("X.parserLUT.prototype.parse", $X$parserLUT$$.prototype.parse);
function $X$loader$$() {
  $X$base$$.call(this);
  this._className = "loader";
  this.$_jobs_$ = $JSCompiler_alias_NULL$$;
  this.$_progress_$ = 0
}
$goog$inherits$$($X$loader$$, $X$base$$);
function $JSCompiler_StaticMethods_jobs_$$($JSCompiler_StaticMethods_jobs_$self$$) {
  $goog$isDefAndNotNull$$($JSCompiler_StaticMethods_jobs_$self$$.$_jobs_$) || ($JSCompiler_StaticMethods_jobs_$self$$.$_jobs_$ = new $goog$structs$Map$$);
  return $JSCompiler_StaticMethods_jobs_$self$$.$_jobs_$
}
function $JSCompiler_StaticMethods_completed$$($JSCompiler_StaticMethods_completed$self$$) {
  return!$goog$isDefAndNotNull$$($JSCompiler_StaticMethods_completed$self$$.$_jobs_$) ? $JSCompiler_alias_TRUE$$ : !$JSCompiler_StaticMethods_completed$self$$.$_jobs_$.$containsValue$($JSCompiler_alias_FALSE$$)
}
$JSCompiler_prototypeAlias$$ = $X$loader$$.prototype;
$JSCompiler_prototypeAlias$$.$loadTextureCompleted$ = function $$JSCompiler_prototypeAlias$$$$loadTextureCompleted$$($object$$28$$) {
  $JSCompiler_StaticMethods_addProgress$$(this, 1.7);
  setTimeout(function() {
    $JSCompiler_StaticMethods_setClean$$($object$$28$$.$_texture$.file());
    $object$$28$$.$modified$();
    $JSCompiler_StaticMethods_jobs_$$(this).set($object$$28$$.id(), $JSCompiler_alias_TRUE$$)
  }.bind(this), 100)
};
function $JSCompiler_StaticMethods_loadFile$$($JSCompiler_StaticMethods_loadFile$self$$, $object$$31$$) {
  $goog$isDefAndNotNull$$($object$$31$$.file()) || $JSCompiler_alias_THROW$$(Error("Internal error during file loading."));
  var $JSCompiler_StaticMethods_containsKey$self$$inline_454_filepath$$3$$ = $JSCompiler_StaticMethods_jobs_$$($JSCompiler_StaticMethods_loadFile$self$$), $fileExtension_key$$inline_455_request$$2$$ = $object$$31$$.id();
  $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_containsKey$self$$inline_454_filepath$$3$$.$map_$, $fileExtension_key$$inline_455_request$$2$$) || ($object$$31$$.$_points$.clear(), $object$$31$$.$_normals$.clear(), $JSCompiler_StaticMethods_containsKey$self$$inline_454_filepath$$3$$ = $object$$31$$.file().path(), $fileExtension_key$$inline_455_request$$2$$ = $JSCompiler_StaticMethods_containsKey$self$$inline_454_filepath$$3$$.split(".").pop(), $fileExtension_key$$inline_455_request$$2$$ = 
  $fileExtension_key$$inline_455_request$$2$$.toUpperCase(), $fileExtension_key$$inline_455_request$$2$$ == $X$loader$extensions$TRK$$ || $fileExtension_key$$inline_455_request$$2$$ == $X$loader$extensions$STL$$ || $fileExtension_key$$inline_455_request$$2$$ == $X$loader$extensions$FSM$$ || $fileExtension_key$$inline_455_request$$2$$ == $X$loader$extensions$VTK$$ || $fileExtension_key$$inline_455_request$$2$$ == $X$loader$extensions$NRRD$$ || $fileExtension_key$$inline_455_request$$2$$ == $X$loader$extensions$MGH$$ || 
  $fileExtension_key$$inline_455_request$$2$$ == $X$loader$extensions$MGZ$$ || $JSCompiler_alias_THROW$$(Error("The " + $fileExtension_key$$inline_455_request$$2$$ + " file format is not supported.")), $fileExtension_key$$inline_455_request$$2$$ = new XMLHttpRequest, $goog$events$listen$$($fileExtension_key$$inline_455_request$$2$$, "abort", $JSCompiler_StaticMethods_loadFile$self$$.$loadFileFailed$.bind($JSCompiler_StaticMethods_loadFile$self$$, $fileExtension_key$$inline_455_request$$2$$, $object$$31$$)), 
  $goog$events$listen$$($fileExtension_key$$inline_455_request$$2$$, "error", $JSCompiler_StaticMethods_loadFile$self$$.$loadFileFailed$.bind($JSCompiler_StaticMethods_loadFile$self$$, $fileExtension_key$$inline_455_request$$2$$, $object$$31$$)), $goog$events$listen$$($fileExtension_key$$inline_455_request$$2$$, "load", $JSCompiler_StaticMethods_loadFile$self$$.$loadFileCompleted$.bind($JSCompiler_StaticMethods_loadFile$self$$, $fileExtension_key$$inline_455_request$$2$$, $object$$31$$)), $fileExtension_key$$inline_455_request$$2$$.open("GET", 
  $JSCompiler_StaticMethods_containsKey$self$$inline_454_filepath$$3$$, $JSCompiler_alias_TRUE$$), $fileExtension_key$$inline_455_request$$2$$.overrideMimeType("text/plain; charset=x-user-defined"), $fileExtension_key$$inline_455_request$$2$$.setRequestHeader("Content-Type", "text/plain"), $fileExtension_key$$inline_455_request$$2$$.send($JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_jobs_$$($JSCompiler_StaticMethods_loadFile$self$$).set($object$$31$$.id(), $JSCompiler_alias_FALSE$$))
}
function $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_addProgress$self$$, $value$$86$$) {
  $JSCompiler_StaticMethods_addProgress$self$$.$_progress_$ += $value$$86$$ / $JSCompiler_StaticMethods_jobs_$$($JSCompiler_StaticMethods_addProgress$self$$).$getCount$() / 3;
  1 < $JSCompiler_StaticMethods_addProgress$self$$.$_progress_$ && ($JSCompiler_StaticMethods_addProgress$self$$.$_progress_$ = 1);
  var $progressEvent$$2$$ = new $X$event$ProgressEvent$$;
  $progressEvent$$2$$.$_value$ = $JSCompiler_StaticMethods_addProgress$self$$.$_progress_$;
  $JSCompiler_StaticMethods_addProgress$self$$.dispatchEvent($progressEvent$$2$$)
}
$JSCompiler_prototypeAlias$$.$loadFileFailed$ = function $$JSCompiler_prototypeAlias$$$$loadFileFailed$$() {
  $JSCompiler_alias_THROW$$(Error("Could not get the file."))
};
$JSCompiler_prototypeAlias$$.$loadColorTableCompleted$ = function $$JSCompiler_prototypeAlias$$$$loadColorTableCompleted$$($request$$4$$, $object$$33$$) {
  setTimeout(function() {
    var $lutParser$$ = new $X$parserLUT$$;
    $goog$events$listenOnce$$($lutParser$$, $X$event$events$MODIFIED$$, this.$parseColorTableCompleted$.bind(this));
    $lutParser$$.parse($object$$33$$, $request$$4$$.response, $object$$33$$.$_colorTable$)
  }.bind(this), 100)
};
$JSCompiler_prototypeAlias$$.$loadScalarsCompleted$ = function $$JSCompiler_prototypeAlias$$$$loadScalarsCompleted$$($request$$5$$, $object$$34$$) {
  setTimeout(function() {
    if("crv" == $object$$34$$.$_scalars$.file().path().split(".").pop().toLowerCase()) {
      var $crvParser$$ = new $X$parserCRV$$;
      $goog$events$listenOnce$$($crvParser$$, $X$event$events$MODIFIED$$, this.$parseScalarsCompleted$.bind(this));
      $crvParser$$.parse($object$$34$$, $request$$5$$.response)
    }else {
      $JSCompiler_alias_THROW$$(Error("Only .CRV files supported."))
    }
  }.bind(this), 100)
};
$JSCompiler_prototypeAlias$$.$loadFileCompleted$ = function $$JSCompiler_prototypeAlias$$$$loadFileCompleted$$($request$$6$$, $object$$35$$) {
  $JSCompiler_StaticMethods_addProgress$$(this, 1);
  setTimeout(function() {
    var $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$ = $object$$35$$.file().path().split(".").pop().toLowerCase();
    if("stl" == $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$) {
      $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$ = new $X$parserSTL$$, $goog$events$listenOnce$$($fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$, $X$event$events$MODIFIED$$, this.$parseFileCompleted$.bind(this)), $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$.parse($object$$35$$, $request$$6$$.response)
    }else {
      if("vtk" == $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$) {
        $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$ = new $X$parserVTK$$, $goog$events$listenOnce$$($fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$, $X$event$events$MODIFIED$$, this.$parseFileCompleted$.bind(this)), $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$.parse($object$$35$$, $request$$6$$.response)
      }else {
        if("trk" == $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$) {
          $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$ = new $X$parserTRK$$, $goog$events$listenOnce$$($fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$, $X$event$events$MODIFIED$$, this.$parseFileCompleted$.bind(this)), $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$.parse($object$$35$$, $request$$6$$.response)
        }else {
          if("fsm" == $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$) {
            $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$ = new $X$parserFSM$$, $goog$events$listenOnce$$($fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$, $X$event$events$MODIFIED$$, this.$parseFileCompleted$.bind(this)), $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$.parse($object$$35$$, $request$$6$$.response)
          }else {
            if("nrrd" == $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$) {
              $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$ = new $X$parserNRRD$$, $goog$events$listenOnce$$($fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$, $X$event$events$MODIFIED$$, this.$parseFileCompleted$.bind(this)), $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$.parse($object$$35$$, $request$$6$$.response)
            }else {
              if("mgh" == $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$ || "mgz" == $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$) {
                var $mgzParser$$ = new $X$parserMGZ$$;
                $goog$events$listenOnce$$($mgzParser$$, $X$event$events$MODIFIED$$, this.$parseFileCompleted$.bind(this));
                $mgzParser$$.parse($object$$35$$, $request$$6$$.response, "mgz" == $fileExtension$$2_fsmParser_nrrdParser_stlParser_trkParser_vtkParser$$)
              }
            }
          }
        }
      }
    }
  }.bind(this), 100)
};
$JSCompiler_prototypeAlias$$.$parseFileCompleted$ = function $$JSCompiler_prototypeAlias$$$$parseFileCompleted$$($event$$22$$) {
  $JSCompiler_StaticMethods_addProgress$$(this, 1);
  setTimeout(function() {
    var $object$$36$$ = $event$$22$$.$_object$;
    $JSCompiler_StaticMethods_setClean$$($object$$36$$.file());
    $object$$36$$.$modified$();
    $JSCompiler_StaticMethods_jobs_$$(this).set($object$$36$$.id(), $JSCompiler_alias_TRUE$$)
  }.bind(this), 100)
};
$JSCompiler_prototypeAlias$$.$parseScalarsCompleted$ = function $$JSCompiler_prototypeAlias$$$$parseScalarsCompleted$$($event$$23$$) {
  setTimeout(function() {
    var $object$$37$$ = $event$$23$$.$_object$;
    $JSCompiler_StaticMethods_setClean$$($object$$37$$.$_scalars$.file());
    $object$$37$$.$modified$();
    $JSCompiler_StaticMethods_jobs_$$(this).set($object$$37$$.$_scalars$.id(), $JSCompiler_alias_TRUE$$)
  }.bind(this), 100)
};
$JSCompiler_prototypeAlias$$.$parseColorTableCompleted$ = function $$JSCompiler_prototypeAlias$$$$parseColorTableCompleted$$($event$$24$$) {
  setTimeout(function() {
    var $object$$38$$ = $event$$24$$.$_object$;
    $JSCompiler_StaticMethods_setClean$$($object$$38$$.$_colorTable$.file());
    $object$$38$$.$modified$();
    $JSCompiler_StaticMethods_jobs_$$(this).set($object$$38$$.$_colorTable$.id(), $JSCompiler_alias_TRUE$$)
  }.bind(this), 100)
};
var $X$loader$extensions$STL$$ = "STL", $X$loader$extensions$VTK$$ = "VTK", $X$loader$extensions$TRK$$ = "TRK", $X$loader$extensions$FSM$$ = "FSM", $X$loader$extensions$NRRD$$ = "NRRD", $X$loader$extensions$MGH$$ = "MGH", $X$loader$extensions$MGZ$$ = "MGZ";
function $goog$ui$IdGenerator$$() {
}
(function($ctor$$) {
  $ctor$$.$getInstance$ = function $$ctor$$$$getInstance$$() {
    return $ctor$$.$instance_$ || ($ctor$$.$instance_$ = new $ctor$$)
  }
})($goog$ui$IdGenerator$$);
$goog$ui$IdGenerator$$.prototype.$nextId_$ = 0;
$goog$ui$IdGenerator$$.$getInstance$();
function $goog$ui$Component$$($opt_domHelper$$1$$) {
  this.$dom_$ = $opt_domHelper$$1$$ || $goog$dom$getDomHelper$$()
}
$goog$inherits$$($goog$ui$Component$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$Component$$.prototype;
$JSCompiler_prototypeAlias$$.$idGenerator_$ = $goog$ui$IdGenerator$$.$getInstance$();
$JSCompiler_prototypeAlias$$.$id_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$inDocument_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$parent_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$children_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$childIndex_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$wasDecorated_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$setParentEventTarget$ = function $$JSCompiler_prototypeAlias$$$$setParentEventTarget$$($parent$$25$$) {
  this.$parent_$ && this.$parent_$ != $parent$$25$$ && $JSCompiler_alias_THROW$$(Error("Method not supported"));
  $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$25$$)
};
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = this.$dom_$.createElement("div")
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($opt_parentElement$$) {
  this.$render_$($opt_parentElement$$)
};
$JSCompiler_prototypeAlias$$.$render_$ = function $$JSCompiler_prototypeAlias$$$$render_$$($opt_parentElement$$1$$, $opt_beforeNode$$) {
  this.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  this.$element_$ || this.$createDom$();
  $opt_parentElement$$1$$ ? $opt_parentElement$$1$$.insertBefore(this.$element_$, $opt_beforeNode$$ || $JSCompiler_alias_NULL$$) : this.$dom_$.$document_$.body.appendChild(this.$element_$);
  (!this.$parent_$ || this.$parent_$.$inDocument_$) && this.$enterDocument$()
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  this.$inDocument_$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$8$$) {
    !$child$$8$$.$inDocument_$ && $child$$8$$.$getElement$() && $child$$8$$.$enterDocument$()
  })
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$9$$) {
    $child$$9$$.$inDocument_$ && $child$$9$$.$exitDocument$()
  });
  this.$googUiComponentHandler_$ && this.$googUiComponentHandler_$.$removeAll$();
  this.$inDocument_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$Component$$.$superClass_$.$disposeInternal$.call(this);
  this.$inDocument_$ && this.$exitDocument$();
  this.$googUiComponentHandler_$ && (this.$googUiComponentHandler_$.$dispose$(), delete this.$googUiComponentHandler_$);
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$10$$) {
    $child$$10$$.$dispose$()
  });
  !this.$wasDecorated_$ && this.$element_$ && $goog$dom$removeNode$$(this.$element_$);
  this.$parent_$ = this.$element_$ = this.$childIndex_$ = this.$children_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return!!this.$children_$ && 0 != this.$children_$.length
};
function $JSCompiler_StaticMethods_forEachChild$$($JSCompiler_StaticMethods_forEachChild$self$$, $f$$46$$) {
  $JSCompiler_StaticMethods_forEachChild$self$$.$children_$ && $goog$array$forEach$$($JSCompiler_StaticMethods_forEachChild$self$$.$children_$, $f$$46$$, $JSCompiler_alias_VOID$$)
}
$JSCompiler_prototypeAlias$$.removeChild = function $$JSCompiler_prototypeAlias$$$removeChild$($child$$15$$, $opt_unrender$$) {
  if($child$$15$$) {
    var $JSCompiler_StaticMethods_setParent$self$$inline_461_id$$10$$ = $goog$isString$$($child$$15$$) ? $child$$15$$ : $child$$15$$.$id_$ || ($child$$15$$.$id_$ = ":" + ($child$$15$$.$idGenerator_$.$nextId_$++).toString(36)), $child$$15$$ = this.$childIndex_$ && $JSCompiler_StaticMethods_setParent$self$$inline_461_id$$10$$ ? ($JSCompiler_StaticMethods_setParent$self$$inline_461_id$$10$$ in this.$childIndex_$ ? this.$childIndex_$[$JSCompiler_StaticMethods_setParent$self$$inline_461_id$$10$$] : $JSCompiler_alias_VOID$$) || 
    $JSCompiler_alias_NULL$$ : $JSCompiler_alias_NULL$$;
    if($JSCompiler_StaticMethods_setParent$self$$inline_461_id$$10$$ && $child$$15$$) {
      var $obj$$inline_458$$ = this.$childIndex_$;
      $JSCompiler_StaticMethods_setParent$self$$inline_461_id$$10$$ in $obj$$inline_458$$ && delete $obj$$inline_458$$[$JSCompiler_StaticMethods_setParent$self$$inline_461_id$$10$$];
      $goog$array$remove$$(this.$children_$, $child$$15$$);
      $opt_unrender$$ && ($child$$15$$.$exitDocument$(), $child$$15$$.$element_$ && $goog$dom$removeNode$$($child$$15$$.$element_$));
      $JSCompiler_StaticMethods_setParent$self$$inline_461_id$$10$$ = $child$$15$$;
      $JSCompiler_StaticMethods_setParent$self$$inline_461_id$$10$$ == $JSCompiler_alias_NULL$$ && $JSCompiler_alias_THROW$$(Error("Unable to set parent component"));
      $JSCompiler_StaticMethods_setParent$self$$inline_461_id$$10$$.$parent_$ = $JSCompiler_alias_NULL$$;
      $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call($JSCompiler_StaticMethods_setParent$self$$inline_461_id$$10$$, $JSCompiler_alias_NULL$$)
    }
  }
  $child$$15$$ || $JSCompiler_alias_THROW$$(Error("Child is not in parent component"));
  return $child$$15$$
};
function $goog$ui$RangeModel$$() {
}
$goog$inherits$$($goog$ui$RangeModel$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$RangeModel$$.prototype;
$JSCompiler_prototypeAlias$$.$value_$ = 0;
$JSCompiler_prototypeAlias$$.$minimum_$ = 0;
$JSCompiler_prototypeAlias$$.$maximum_$ = 100;
$JSCompiler_prototypeAlias$$.$extent_$ = 0;
$JSCompiler_prototypeAlias$$.$step_$ = 1;
$JSCompiler_prototypeAlias$$.$isChanging_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$mute_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($value$$87$$) {
  $value$$87$$ = $JSCompiler_StaticMethods_roundToStepWithMin$$(this, $value$$87$$);
  this.$value_$ != $value$$87$$ && (this.$value_$ = $value$$87$$ + this.$extent_$ > this.$maximum_$ ? this.$maximum_$ - this.$extent_$ : $value$$87$$ < this.$minimum_$ ? this.$minimum_$ : $value$$87$$, !this.$isChanging_$ && !this.$mute_$ && this.dispatchEvent("change"))
};
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$() {
  return $JSCompiler_StaticMethods_roundToStepWithMin$$(this, this.$value_$)
};
$JSCompiler_prototypeAlias$$.$getMinimum$ = function $$JSCompiler_prototypeAlias$$$$getMinimum$$() {
  return $JSCompiler_StaticMethods_roundToStepWithMin$$(this, this.$minimum_$)
};
$JSCompiler_prototypeAlias$$.$getMaximum$ = function $$JSCompiler_prototypeAlias$$$$getMaximum$$() {
  return $JSCompiler_StaticMethods_roundToStepWithMin$$(this, this.$maximum_$)
};
function $JSCompiler_StaticMethods_roundToStepWithMin$$($JSCompiler_StaticMethods_roundToStepWithMin$self$$, $value$$88$$) {
  return $JSCompiler_StaticMethods_roundToStepWithMin$self$$.$step_$ == $JSCompiler_alias_NULL$$ ? $value$$88$$ : $JSCompiler_StaticMethods_roundToStepWithMin$self$$.$minimum_$ + Math.round(($value$$88$$ - $JSCompiler_StaticMethods_roundToStepWithMin$self$$.$minimum_$) / $JSCompiler_StaticMethods_roundToStepWithMin$self$$.$step_$) * $JSCompiler_StaticMethods_roundToStepWithMin$self$$.$step_$
}
;function $goog$ui$ProgressBar$$($opt_domHelper$$2$$) {
  this.$dom_$ = $opt_domHelper$$2$$ || $goog$dom$getDomHelper$$();
  this.$rangeModel_$ = new $goog$ui$RangeModel$$;
  $goog$events$listen$$(this.$rangeModel_$, "change", this.$handleChange_$, $JSCompiler_alias_FALSE$$, this)
}
$goog$inherits$$($goog$ui$ProgressBar$$, $goog$ui$Component$$);
var $goog$ui$ProgressBar$ORIENTATION_TO_CSS_NAME_$$ = {vertical:"progress-bar-vertical", horizontal:"progress-bar-horizontal"};
$JSCompiler_prototypeAlias$$ = $goog$ui$ProgressBar$$.prototype;
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$thumbElement_$ = this.$getDomHelper$().$createDom$("div", "progress-bar-thumb");
  var $cs$$ = $goog$ui$ProgressBar$ORIENTATION_TO_CSS_NAME_$$[this.$orientation_$];
  this.$element_$ = this.$getDomHelper$().$createDom$("div", $cs$$, this.$thumbElement_$);
  $JSCompiler_StaticMethods_setValueState_$$(this);
  this.$getElement$().setAttribute("aria-valuemin", this.$getMinimum$());
  this.$getElement$().setAttribute("aria-valuemax", this.$getMaximum$())
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$ProgressBar$$.$superClass_$.$enterDocument$.call(this);
  $goog$userAgent$IE$$ && 7 > $goog$userAgent$VERSION$$ && $goog$events$listen$$(this.$getElement$(), "resize", this.$updateUi_$, $JSCompiler_alias_FALSE$$, this);
  this.$updateUi_$();
  var $element$$inline_473$$ = this.$getElement$();
  $element$$inline_473$$.setAttribute("role", "progressbar");
  $element$$inline_473$$.$roleName$ = "progressbar";
  this.$getElement$().setAttribute("aria-live", "polite")
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $goog$ui$ProgressBar$$.$superClass_$.$exitDocument$.call(this);
  $JSCompiler_StaticMethods_detachEvents_$$(this)
};
function $JSCompiler_StaticMethods_detachEvents_$$($JSCompiler_StaticMethods_detachEvents_$self$$) {
  $goog$userAgent$IE$$ && 7 > $goog$userAgent$VERSION$$ && $goog$events$unlisten$$($JSCompiler_StaticMethods_detachEvents_$self$$.$getElement$(), "resize", $JSCompiler_StaticMethods_detachEvents_$self$$.$updateUi_$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_detachEvents_$self$$)
}
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$() {
  return this.$rangeModel_$.$getValue$()
};
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($v$$15$$) {
  this.$rangeModel_$.$setValue$($v$$15$$);
  this.$getElement$() && $JSCompiler_StaticMethods_setValueState_$$(this)
};
function $JSCompiler_StaticMethods_setValueState_$$($JSCompiler_StaticMethods_setValueState_$self$$) {
  var $value$$inline_658$$ = $JSCompiler_StaticMethods_setValueState_$self$$.$getValue$();
  $JSCompiler_StaticMethods_setValueState_$self$$.$getElement$().setAttribute("aria-valuenow", $value$$inline_658$$)
}
$JSCompiler_prototypeAlias$$.$getMinimum$ = function $$JSCompiler_prototypeAlias$$$$getMinimum$$() {
  return this.$rangeModel_$.$getMinimum$()
};
$JSCompiler_prototypeAlias$$.$getMaximum$ = function $$JSCompiler_prototypeAlias$$$$getMaximum$$() {
  return this.$rangeModel_$.$getMaximum$()
};
$JSCompiler_prototypeAlias$$.$orientation_$ = "horizontal";
$JSCompiler_prototypeAlias$$.$handleChange_$ = function $$JSCompiler_prototypeAlias$$$$handleChange_$$() {
  this.$updateUi_$();
  this.dispatchEvent("change")
};
$JSCompiler_prototypeAlias$$.$updateUi_$ = function $$JSCompiler_prototypeAlias$$$$updateUi_$$() {
  if(this.$thumbElement_$) {
    var $bottom$$6_min$$10_ratio$$ = this.$getMinimum$(), $h$$8_max$$10_size$$18$$ = this.$getMaximum$(), $bottom$$6_min$$10_ratio$$ = (this.$getValue$() - $bottom$$6_min$$10_ratio$$) / ($h$$8_max$$10_size$$18$$ - $bottom$$6_min$$10_ratio$$), $h$$8_max$$10_size$$18$$ = Math.round(100 * $bottom$$6_min$$10_ratio$$);
    "vertical" == this.$orientation_$ ? $goog$userAgent$IE$$ && 7 > $goog$userAgent$VERSION$$ ? (this.$thumbElement_$.style.top = 0, this.$thumbElement_$.style.height = "100%", $h$$8_max$$10_size$$18$$ = this.$thumbElement_$.offsetHeight, $bottom$$6_min$$10_ratio$$ = Math.round($bottom$$6_min$$10_ratio$$ * $h$$8_max$$10_size$$18$$), this.$thumbElement_$.style.top = $h$$8_max$$10_size$$18$$ - $bottom$$6_min$$10_ratio$$ + "px", this.$thumbElement_$.style.height = $bottom$$6_min$$10_ratio$$ + "px") : 
    (this.$thumbElement_$.style.top = 100 - $h$$8_max$$10_size$$18$$ + "%", this.$thumbElement_$.style.height = $h$$8_max$$10_size$$18$$ + "%") : this.$thumbElement_$.style.width = $h$$8_max$$10_size$$18$$ + "%"
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $JSCompiler_StaticMethods_detachEvents_$$(this);
  $goog$ui$ProgressBar$$.$superClass_$.$disposeInternal$.call(this);
  this.$thumbElement_$ = $JSCompiler_alias_NULL$$;
  this.$rangeModel_$.$dispose$()
};
function $X$progressbar$$($parent$$26$$, $initialvalue$$) {
  $goog$isDefAndNotNull$$($parent$$26$$) || $JSCompiler_alias_THROW$$(Error("No valid parent element."));
  $goog$isDefAndNotNull$$($initialvalue$$) || $JSCompiler_alias_THROW$$(Error("Invalid initial value."));
  $goog$ui$ProgressBar$$.call(this);
  this._className = "progressbar";
  this.$_parent$ = $parent$$26$$;
  this.$_doneProgressBar$ = this.$_style$ = $JSCompiler_alias_NULL$$;
  this.$_css$ = [];
  this.$_css$ = [".progress-bar-horizontal {\n  position: relative;\n  border: 1px solid #949dad;\n  background: white;\n  padding: 1px;\n  overflow: hidden;\n  margin: 2px;\n  width: 100px;\n  height: 5px;\n}", ".progress-bar-thumb {\n  position: relative;\n  background: #F62217;\n  overflow: hidden;\n  width: 0%;\n  height: 100%;\n}", ".progress-bar-thumb-done {\n  background: #57E964;\n}"];
  this.$setValue$($initialvalue$$);
  this.$init_$()
}
$goog$inherits$$($X$progressbar$$, $goog$ui$ProgressBar$$);
$X$progressbar$$.prototype.$init_$ = function $$X$progressbar$$$$$init_$$() {
  if("static" == this.$_parent$.style.position || "" == this.$_parent$.style.position) {
    this.$_parent$.style.position = "relative"
  }
  var $head$$2_pbElement$$ = document.getElementsByTagName("head")[0], $style$$15$$ = $goog$dom$createDom$$("style");
  $style$$15$$.type = "text/css";
  $style$$15$$.media = "screen";
  var $css$$1$$ = document.createTextNode(this.$_css$[0]), $css2$$1$$ = document.createTextNode(this.$_css$[1]), $css3$$1$$ = document.createTextNode(this.$_css$[2]);
  $head$$2_pbElement$$.appendChild($style$$15$$);
  $style$$15$$.appendChild($css$$1$$);
  $style$$15$$.appendChild($css2$$1$$);
  $style$$15$$.appendChild($css3$$1$$);
  this.$_style$ = $style$$15$$;
  this.$render$(this.$_parent$);
  $head$$2_pbElement$$ = this.$getElement$();
  $head$$2_pbElement$$.style.position = "absolute";
  $head$$2_pbElement$$.style.top = (this.$_parent$.clientHeight - 5) / 2;
  $head$$2_pbElement$$.style.left = (this.$_parent$.clientWidth - 100) / 2
};
function $JSCompiler_StaticMethods_done$$($JSCompiler_StaticMethods_done$self$$) {
  var $top$$7$$ = $JSCompiler_StaticMethods_done$self$$.$getElement$().style.top, $left$$11$$ = $JSCompiler_StaticMethods_done$self$$.$getElement$().style.left;
  $goog$dom$removeNode$$($JSCompiler_StaticMethods_done$self$$.$getElement$());
  var $pb$$ = new $X$progressbar$$($JSCompiler_StaticMethods_done$self$$.$_parent$, 100), $pbElement$$1$$ = $pb$$.$getElement$();
  $pbElement$$1$$.style.position = "absolute";
  $pbElement$$1$$.style.top = $top$$7$$;
  $pbElement$$1$$.style.left = $left$$11$$;
  ($pbElement$$1$$.firstElementChild != $JSCompiler_alias_VOID$$ ? $pbElement$$1$$.firstElementChild : $goog$dom$getNextElementNode_$$($pbElement$$1$$.firstChild)).classList.add("progress-bar-thumb-done");
  $JSCompiler_StaticMethods_done$self$$.$_doneProgressBar$ = $pb$$
}
$X$progressbar$$.prototype.$kill$ = function $$X$progressbar$$$$$kill$$() {
  this.$_style$ && $goog$dom$removeNode$$(this.$_style$);
  this.$getElement$() && $goog$dom$removeNode$$(this.$getElement$());
  this.$_doneProgressBar$ && $goog$dom$removeNode$$(this.$_doneProgressBar$.$getElement$());
  this.$_doneProgressBar$ = this.$_style$ = $JSCompiler_alias_NULL$$
};
function $X$slice$$($slice$$) {
  $X$object$$.call(this);
  this._className = "slice";
  this.$_center$ = [0, 0, 0];
  this.$_front$ = [0, 0, 1];
  this.$_up$ = [0, 1, 0];
  this.$_height$ = this.$_width$ = 10;
  this.$_textureCoordinateMap$ = [0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0];
  this.$_labelMap$ = this.$_volume$ = $JSCompiler_alias_NULL$$;
  this.$_borders$ = $JSCompiler_alias_TRUE$$;
  this.$_borderColor$ = [1, 1, 1];
  this.$_hideChildren$ = $JSCompiler_alias_TRUE$$;
  $goog$isDefAndNotNull$$($slice$$) && this.$copy_$($slice$$)
}
$goog$inherits$$($X$slice$$, $X$object$$);
$X$slice$$.prototype.$copy_$ = function $$X$slice$$$$$copy_$$($slice$$1$$) {
  this.$_center$ = $slice$$1$$.$_center$.slice();
  this.$_front$ = $slice$$1$$.$_front$.slice();
  this.$_up$ = $slice$$1$$.$_up$.slice();
  this.$_width$ = $slice$$1$$.$_width$;
  this.$_height$ = $slice$$1$$.$_height$;
  this.$_volume$ = $slice$$1$$.$_volume$;
  this.$_labelMap$ = $slice$$1$$.$_labelMap$;
  this.$_borders$ = $slice$$1$$.$_borders$;
  this.$_borderColor$ = $slice$$1$$.$_borderColor$;
  this.$_hideChildren$ = $slice$$1$$.$_hideChildren$;
  $X$slice$$.$superClass_$.$copy_$.call(this, $slice$$1$$)
};
$X$slice$$.prototype.$setup$ = function $$X$slice$$$$$setup$$($center$$, $front$$3$$, $up$$, $width$$16$$, $height$$14$$, $_borderColor_borders$$, $borderColor$$) {
  (!$goog$isDefAndNotNull$$($center$$) || !($center$$ instanceof Array) || 3 != $center$$.length) && $JSCompiler_alias_THROW$$(Error("Invalid center."));
  (!$goog$isDefAndNotNull$$($front$$3$$) || !($front$$3$$ instanceof Array) || 3 != $front$$3$$.length) && $JSCompiler_alias_THROW$$(Error("Invalid front direction."));
  (!$goog$isDefAndNotNull$$($up$$) || !($up$$ instanceof Array) || 3 != $up$$.length) && $JSCompiler_alias_THROW$$(Error("Invalid up direction."));
  $goog$isNumber$$($width$$16$$) || $JSCompiler_alias_THROW$$(Error("Invalid width."));
  $goog$isNumber$$($height$$14$$) || $JSCompiler_alias_THROW$$(Error("Invalid height."));
  var $_borders$$ = $JSCompiler_alias_FALSE$$;
  $goog$isDefAndNotNull$$($_borderColor_borders$$) && ($_borders$$ = $_borderColor_borders$$);
  $_borderColor_borders$$ = [1, 1, 1];
  $goog$isDefAndNotNull$$($borderColor$$) && ($_borderColor_borders$$ = $borderColor$$);
  this.$_center$ = $center$$;
  this.$_front$ = $front$$3$$;
  this.$_up$ = $up$$;
  this.$_width$ = $width$$16$$;
  this.$_height$ = $height$$14$$;
  this.$_borders$ = $_borders$$;
  this.$_borderColor$ = $_borderColor_borders$$;
  this.$create_$()
};
$X$slice$$.prototype.$create_$ = function $$X$slice$$$$$create_$$() {
  this.$_points$.clear();
  var $borders$$1_frontVector$$ = new $goog$math$Vec3$$(this.$_front$[0], this.$_front$[1], this.$_front$[2]), $point4_upVector$$ = new $goog$math$Vec3$$(this.$_up$[0], this.$_up$[1], this.$_up$[2]), $rightVector$$ = $goog$math$Vec3$cross$$($point4_upVector$$, $borders$$1_frontVector$$), $centerVector_point5$$ = new $goog$math$Vec3$$(this.$_center$[0], this.$_center$[1], this.$_center$[2]), $sizeVector$$ = new $goog$math$Vec3$$(1, 1, 1);
  1 == $borders$$1_frontVector$$.x ? ($sizeVector$$ = new $goog$math$Vec3$$(this.$_center$[0], this.$_height$ / 2, this.$_width$ / 2), this.$_textureCoordinateMap$ = [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0]) : 1 == $borders$$1_frontVector$$.y ? ($sizeVector$$ = new $goog$math$Vec3$$(this.$_width$ / 2, this.$_center$[1], this.$_height$ / 2), this.$_textureCoordinateMap$ = [0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1]) : 1 == $borders$$1_frontVector$$.$z$ && ($sizeVector$$ = new $goog$math$Vec3$$(this.$_width$ / 
  2, this.$_height$ / 2, this.$_center$[2]));
  var $point0$$ = $goog$math$Vec3$sum$$($rightVector$$.$clone$().$invert$(), $point4_upVector$$.$clone$().$invert$()), $point0$$ = new $goog$math$Vec3$$($point0$$.x * $sizeVector$$.x, $point0$$.y * $sizeVector$$.y, $point0$$.$z$ * $sizeVector$$.$z$);
  $point0$$.add($centerVector_point5$$);
  var $point1$$1$$ = $goog$math$Vec3$sum$$($rightVector$$.$clone$().$invert$(), $point4_upVector$$), $point1$$1$$ = new $goog$math$Vec3$$($point1$$1$$.x * $sizeVector$$.x, $point1$$1$$.y * $sizeVector$$.y, $point1$$1$$.$z$ * $sizeVector$$.$z$);
  $point1$$1$$.add($centerVector_point5$$);
  var $point2$$1$$ = $goog$math$Vec3$sum$$($rightVector$$, $point4_upVector$$.$clone$().$invert$()), $point2$$1$$ = new $goog$math$Vec3$$($point2$$1$$.x * $sizeVector$$.x, $point2$$1$$.y * $sizeVector$$.y, $point2$$1$$.$z$ * $sizeVector$$.$z$);
  $point2$$1$$.add($centerVector_point5$$);
  var $point3$$1$$ = $point2$$1$$, $point4_upVector$$ = $goog$math$Vec3$sum$$($rightVector$$, $point4_upVector$$), $point4_upVector$$ = new $goog$math$Vec3$$($point4_upVector$$.x * $sizeVector$$.x, $point4_upVector$$.y * $sizeVector$$.y, $point4_upVector$$.$z$ * $sizeVector$$.$z$);
  $point4_upVector$$.add($centerVector_point5$$);
  $centerVector_point5$$ = $point1$$1$$;
  this.$_points$.add($point0$$.x, $point0$$.y, $point0$$.$z$);
  this.$_points$.add($point1$$1$$.x, $point1$$1$$.y, $point1$$1$$.$z$);
  this.$_points$.add($point2$$1$$.x, $point2$$1$$.y, $point2$$1$$.$z$);
  this.$_points$.add($point3$$1$$.x, $point3$$1$$.y, $point3$$1$$.$z$);
  this.$_points$.add($point4_upVector$$.x, $point4_upVector$$.y, $point4_upVector$$.$z$);
  this.$_points$.add($centerVector_point5$$.x, $centerVector_point5$$.y, $centerVector_point5$$.$z$);
  this.$_normals$.add($borders$$1_frontVector$$.x, $borders$$1_frontVector$$.y, $borders$$1_frontVector$$.$z$);
  this.$_normals$.add($borders$$1_frontVector$$.x, $borders$$1_frontVector$$.y, $borders$$1_frontVector$$.$z$);
  this.$_normals$.add($borders$$1_frontVector$$.x, $borders$$1_frontVector$$.y, $borders$$1_frontVector$$.$z$);
  this.$_normals$.add($borders$$1_frontVector$$.x, $borders$$1_frontVector$$.y, $borders$$1_frontVector$$.$z$);
  this.$_normals$.add($borders$$1_frontVector$$.x, $borders$$1_frontVector$$.y, $borders$$1_frontVector$$.$z$);
  this.$_normals$.add($borders$$1_frontVector$$.x, $borders$$1_frontVector$$.y, $borders$$1_frontVector$$.$z$);
  this.$_borders$ && ($borders$$1_frontVector$$ = new $X$object$$, $borders$$1_frontVector$$.$_points$.add($point0$$.x, $point0$$.y, $point0$$.$z$), $borders$$1_frontVector$$.$_points$.add($point1$$1$$.x, $point1$$1$$.y, $point1$$1$$.$z$), $borders$$1_frontVector$$.$_points$.add($point1$$1$$.x, $point1$$1$$.y, $point1$$1$$.$z$), $borders$$1_frontVector$$.$_points$.add($point4_upVector$$.x, $point4_upVector$$.y, $point4_upVector$$.$z$), $borders$$1_frontVector$$.$_points$.add($point4_upVector$$.x, 
  $point4_upVector$$.y, $point4_upVector$$.$z$), $borders$$1_frontVector$$.$_points$.add($point2$$1$$.x, $point2$$1$$.y, $point2$$1$$.$z$), $borders$$1_frontVector$$.$_points$.add($point2$$1$$.x, $point2$$1$$.y, $point2$$1$$.$z$), $borders$$1_frontVector$$.$_points$.add($point0$$.x, $point0$$.y, $point0$$.$z$), $borders$$1_frontVector$$.$_normals$.add(0, 0, 0), $borders$$1_frontVector$$.$_normals$.add(0, 0, 0), $borders$$1_frontVector$$.$_normals$.add(0, 0, 0), $borders$$1_frontVector$$.$_normals$.add(0, 
  0, 0), $borders$$1_frontVector$$.$_normals$.add(0, 0, 0), $borders$$1_frontVector$$.$_normals$.add(0, 0, 0), $borders$$1_frontVector$$.$_normals$.add(0, 0, 0), $borders$$1_frontVector$$.$_normals$.add(0, 0, 0), $borders$$1_frontVector$$.$setColor$(this.$_borderColor$[0], this.$_borderColor$[1], this.$_borderColor$[2]), $borders$$1_frontVector$$.$setType$("LINES"), $borders$$1_frontVector$$.$setLineWidth$(2), this.children().push($borders$$1_frontVector$$))
};
$X$slice$$.prototype.$labelMap$ = $JSCompiler_get$$("$_labelMap$");
$goog$exportSymbol$$("X.slice", $X$slice$$);
$goog$exportSymbol$$("X.slice.prototype.setup", $X$slice$$.prototype.$setup$);
function $X$volume$$($volume$$) {
  $X$object$$.call(this);
  this._className = "volume";
  this.$_center$ = [0, 0, 0];
  this.$_dimensions$ = [10, 10, 10];
  this.$_spacing$ = [1, 1, 1];
  this.$_indexZold$ = this._indexZ = this.$_indexYold$ = this._indexY = this.$_indexXold$ = this._indexX = 0;
  this.$_slicesX$ = new $X$object$$;
  this.$_slicesY$ = new $X$object$$;
  this.$_slicesZ$ = new $X$object$$;
  this._lowerThreshold = 0;
  this._upperThreshold = 1E3;
  this.$_scalarRange$ = [0, 1E3];
  this.$_volumeRenderingOld$ = this._volumeRendering = $JSCompiler_alias_FALSE$$;
  this.$_volumeRenderingDirection$ = 0;
  this.$_labelMap$ = $JSCompiler_alias_NULL$$;
  this.$_borders$ = $JSCompiler_alias_TRUE$$;
  $goog$isDefAndNotNull$$($volume$$) && this.$copy_$($volume$$)
}
$goog$inherits$$($X$volume$$, $X$object$$);
$JSCompiler_prototypeAlias$$ = $X$volume$$.prototype;
$JSCompiler_prototypeAlias$$.$copy_$ = function $$JSCompiler_prototypeAlias$$$$copy_$$($volume$$1$$) {
  this.$_center$ = $volume$$1$$.$_center$.slice();
  this.$_dimensions$ = $volume$$1$$.$_dimensions$.slice();
  this.$_spacing$ = $volume$$1$$.$_spacing$.slice();
  this._indexX = $volume$$1$$._indexX;
  this.$_indexXold$ = $volume$$1$$.$_indexXold$;
  this._indexY = $volume$$1$$._indexY;
  this.$_indexYold$ = $volume$$1$$.$_indexYold$;
  this._indexZ = $volume$$1$$._indexZ;
  this.$_indexZold$ = $volume$$1$$.$_indexZold$;
  this.$_slicesX$ = new $X$object$$($volume$$1$$.$_slicesX$);
  this.$_slicesY$ = new $X$object$$($volume$$1$$.$_slicesY$);
  this.$_slicesZ$ = new $X$object$$($volume$$1$$.$_slicesZ$);
  this._lowerThreshold = $volume$$1$$._lowerThreshold;
  this._upperThreshold = $volume$$1$$._upperThreshold;
  this.$_scalarRange$ = $volume$$1$$.$_scalarRange$.slice();
  this._volumeRendering = $volume$$1$$._volumeRendering;
  this.$_volumeRenderingOld$ = $volume$$1$$.$_volumeRenderingOld$;
  this.$_volumeRenderingDirection$ = $volume$$1$$.$_volumeRenderingDirection$;
  this.$_labelMap$ = $volume$$1$$.$_labelMap$;
  this.$_borders$ = $volume$$1$$.$_borders$;
  $X$volume$$.$superClass_$.$copy_$.call(this, $volume$$1$$)
};
$JSCompiler_prototypeAlias$$.$create_$ = function $$JSCompiler_prototypeAlias$$$$create_$$() {
  this.children().length = 0;
  this.children().push(this.$_slicesX$);
  this.children().push(this.$_slicesY$);
  this.children().push(this.$_slicesZ$);
  for(var $xyz$$ = 0, $xyz$$ = 0;3 > $xyz$$;$xyz$$++) {
    for(var $halfDimension$$ = (this.$_dimensions$[$xyz$$] - 1) / 2, $_indexCenter$$ = $halfDimension$$, $i$$173$$ = 0, $i$$173$$ = 0;$i$$173$$ < this.$_dimensions$[$xyz$$];$i$$173$$++) {
      var $_center__position$$ = -$halfDimension$$ * this.$_spacing$[$xyz$$] + $i$$173$$ * this.$_spacing$[$xyz$$], $_center__position$$ = [[this.$_center$[0] + $_center__position$$, this.$_center$[1], this.$_center$[2]], [this.$_center$[0], this.$_center$[1] + $_center__position$$, this.$_center$[2]], [this.$_center$[0], this.$_center$[1], this.$_center$[2] + $_center__position$$]], $slices$$1$$ = this.children()[$xyz$$].children(), $width$$17$$ = 0, $height$$15$$ = 0, $borderColor$$1$$ = [1, 1, 
      1], $borders$$2$$ = this.$_borders$;
      0 == $xyz$$ ? ($width$$17$$ = this.$_dimensions$[2] * this.$_spacing$[2] - this.$_spacing$[2], $height$$15$$ = this.$_dimensions$[1] * this.$_spacing$[1] - this.$_spacing$[1], $borderColor$$1$$ = [1, 1, 0]) : 1 == $xyz$$ ? ($width$$17$$ = this.$_dimensions$[0] * this.$_spacing$[0] - this.$_spacing$[0], $height$$15$$ = this.$_dimensions$[2] * this.$_spacing$[2] - this.$_spacing$[2], $borderColor$$1$$ = [1, 0, 0]) : 2 == $xyz$$ && ($width$$17$$ = this.$_dimensions$[0] * this.$_spacing$[0] - this.$_spacing$[0], 
      $height$$15$$ = this.$_dimensions$[1] * this.$_spacing$[1] - this.$_spacing$[1], $borderColor$$1$$ = [0, 1, 0]);
      $goog$isDefAndNotNull$$(this.$_volume$) && ($borders$$2$$ = $JSCompiler_alias_FALSE$$);
      var $_slice$$ = new $X$slice$$;
      $_slice$$.$setup$($_center__position$$[$xyz$$], [[1, 0, 0], [0, 1, 0], [0, 0, 1]][$xyz$$], [[0, 1, 0], [0, 0, -1], [0, 1, 0]][$xyz$$], $width$$17$$, $height$$15$$, $borders$$2$$, $borderColor$$1$$);
      $_slice$$.$_volume$ = this;
      $_slice$$.$_hideChildren$ = $JSCompiler_alias_FALSE$$;
      $_slice$$.$setVisible$($i$$173$$ == Math.floor($_indexCenter$$));
      $_slice$$.$_hideChildren$ = $JSCompiler_alias_TRUE$$;
      $slices$$1$$.push($_slice$$)
    }
    0 == $xyz$$ ? this.$_indexXold$ = this._indexX = $_indexCenter$$ : 1 == $xyz$$ ? this.$_indexYold$ = this._indexY = $_indexCenter$$ : 2 == $xyz$$ && (this.$_indexZold$ = this._indexZ = $_indexCenter$$)
  }
  this.$_dirty$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$modified$ = function $$JSCompiler_prototypeAlias$$$$modified$$() {
  if(0 < this.children().length) {
    if(this._volumeRendering != this.$_volumeRenderingOld$ && (this.$_dirty$ = $JSCompiler_alias_TRUE$$, this.$_volumeRenderingOld$ = this._volumeRendering), this._volumeRendering) {
      var $_sliceX__sliceY__sliceZ_xyz$$inline_488$$ = this.children()[0].children()[parseInt(this._indexX, 10)];
      $_sliceX__sliceY__sliceZ_xyz$$inline_488$$.$_hideChildren$ = $JSCompiler_alias_FALSE$$;
      $_sliceX__sliceY__sliceZ_xyz$$inline_488$$.$setVisible$($JSCompiler_alias_FALSE$$);
      $_sliceX__sliceY__sliceZ_xyz$$inline_488$$.$_hideChildren$ = $JSCompiler_alias_TRUE$$;
      $_sliceX__sliceY__sliceZ_xyz$$inline_488$$ = this.children()[1].children()[parseInt(this._indexY, 10)];
      $_sliceX__sliceY__sliceZ_xyz$$inline_488$$.$_hideChildren$ = $JSCompiler_alias_FALSE$$;
      $_sliceX__sliceY__sliceZ_xyz$$inline_488$$.$setVisible$($JSCompiler_alias_FALSE$$);
      $_sliceX__sliceY__sliceZ_xyz$$inline_488$$.$_hideChildren$ = $JSCompiler_alias_TRUE$$;
      $_sliceX__sliceY__sliceZ_xyz$$inline_488$$ = this.children()[2].children()[parseInt(this._indexZ, 10)];
      $_sliceX__sliceY__sliceZ_xyz$$inline_488$$.$_hideChildren$ = $JSCompiler_alias_FALSE$$;
      $_sliceX__sliceY__sliceZ_xyz$$inline_488$$.$setVisible$($JSCompiler_alias_FALSE$$);
      $_sliceX__sliceY__sliceZ_xyz$$inline_488$$.$_hideChildren$ = $JSCompiler_alias_TRUE$$;
      $JSCompiler_StaticMethods_volumeRendering_$$(this, this.$_volumeRenderingDirection$)
    }else {
      this.children()[this.$_volumeRenderingDirection$].$setVisible$($JSCompiler_alias_FALSE$$);
      for($_sliceX__sliceY__sliceZ_xyz$$inline_488$$ = $_sliceX__sliceY__sliceZ_xyz$$inline_488$$ = 0;3 > $_sliceX__sliceY__sliceZ_xyz$$inline_488$$;$_sliceX__sliceY__sliceZ_xyz$$inline_488$$++) {
        var $_child$$inline_489__currentSlice$$inline_493$$ = this.children()[$_sliceX__sliceY__sliceZ_xyz$$inline_488$$], $currentIndex$$inline_490$$ = 0, $_oldSlice$$inline_492_oldIndex$$inline_491$$ = 0;
        0 == $_sliceX__sliceY__sliceZ_xyz$$inline_488$$ ? ($currentIndex$$inline_490$$ = this._indexX, $_oldSlice$$inline_492_oldIndex$$inline_491$$ = this.$_indexXold$, this.$_indexXold$ = this._indexX) : 1 == $_sliceX__sliceY__sliceZ_xyz$$inline_488$$ ? ($currentIndex$$inline_490$$ = this._indexY, $_oldSlice$$inline_492_oldIndex$$inline_491$$ = this.$_indexYold$, this.$_indexYold$ = this._indexY) : 2 == $_sliceX__sliceY__sliceZ_xyz$$inline_488$$ && ($currentIndex$$inline_490$$ = this._indexZ, $_oldSlice$$inline_492_oldIndex$$inline_491$$ = 
        this.$_indexZold$, this.$_indexZold$ = this._indexZ);
        $_oldSlice$$inline_492_oldIndex$$inline_491$$ = $_child$$inline_489__currentSlice$$inline_493$$.children()[parseInt($_oldSlice$$inline_492_oldIndex$$inline_491$$, 10)];
        $_oldSlice$$inline_492_oldIndex$$inline_491$$.$_hideChildren$ = $JSCompiler_alias_FALSE$$;
        $_oldSlice$$inline_492_oldIndex$$inline_491$$.$setVisible$($JSCompiler_alias_FALSE$$);
        $_oldSlice$$inline_492_oldIndex$$inline_491$$.$_hideChildren$ = $JSCompiler_alias_TRUE$$;
        $_child$$inline_489__currentSlice$$inline_493$$ = $_child$$inline_489__currentSlice$$inline_493$$.children()[parseInt($currentIndex$$inline_490$$, 10)];
        $_child$$inline_489__currentSlice$$inline_493$$.$_hideChildren$ = $JSCompiler_alias_FALSE$$;
        $_child$$inline_489__currentSlice$$inline_493$$.$setVisible$($JSCompiler_alias_TRUE$$);
        $_child$$inline_489__currentSlice$$inline_493$$.$_hideChildren$ = $JSCompiler_alias_TRUE$$
      }
    }
  }
  $X$volume$$.$superClass_$.$modified$.call(this)
};
$JSCompiler_prototypeAlias$$.$dimensions$ = $JSCompiler_get$$("$_dimensions$");
$JSCompiler_prototypeAlias$$.$scalarRange$ = $JSCompiler_get$$("$_scalarRange$");
$JSCompiler_prototypeAlias$$.$threshold$ = function $$JSCompiler_prototypeAlias$$$$threshold$$($lower$$, $upper$$) {
  (!$goog$isDefAndNotNull$$($lower$$) || !$goog$isNumber$$($lower$$) || !$goog$isDefAndNotNull$$($upper$$) || !$goog$isNumber$$($upper$$) || $lower$$ > $upper$$ || $lower$$ < this.$_scalarRange$[0] || $upper$$ > this.$_scalarRange$[1]) && $JSCompiler_alias_THROW$$(Error("Invalid threshold range."));
  this._lowerThreshold = $lower$$;
  this._upperThreshold = $upper$$
};
$JSCompiler_prototypeAlias$$.$setVolumeRendering$ = $JSCompiler_set$$("_volumeRendering");
$JSCompiler_prototypeAlias$$.$setVisible$ = $JSCompiler_set$$("_visible");
$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($center$$1$$) {
  (!$goog$isDefAndNotNull$$($center$$1$$) || !($center$$1$$ instanceof Array) || 3 != $center$$1$$.length) && $JSCompiler_alias_THROW$$(Error("Invalid center."));
  this.$_center$ = $center$$1$$
};
function $JSCompiler_StaticMethods_volumeRendering_$$($JSCompiler_StaticMethods_volumeRendering_$self$$, $direction$$4$$) {
  if(!(!$JSCompiler_StaticMethods_volumeRendering_$self$$.$_dirty$ && !$JSCompiler_StaticMethods_volumeRendering_$self$$._volumeRendering || !$JSCompiler_StaticMethods_volumeRendering_$self$$.$_dirty$ && $direction$$4$$ == $JSCompiler_StaticMethods_volumeRendering_$self$$.$_volumeRenderingDirection$)) {
    var $_child$$2$$ = $JSCompiler_StaticMethods_volumeRendering_$self$$.children()[$JSCompiler_StaticMethods_volumeRendering_$self$$.$_volumeRenderingDirection$];
    $_child$$2$$.$setVisible$($JSCompiler_alias_FALSE$$);
    $_child$$2$$ = $JSCompiler_StaticMethods_volumeRendering_$self$$.children()[$direction$$4$$];
    $_child$$2$$.$setVisible$($JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods_volumeRendering_$self$$.$_volumeRenderingDirection$ = $direction$$4$$
  }
}
$JSCompiler_prototypeAlias$$.$labelMap$ = function $$JSCompiler_prototypeAlias$$$$labelMap$$() {
  this.$_labelMap$ || (this.$_labelMap$ = new $X$labelMap$$(this));
  return this.$_labelMap$
};
$JSCompiler_prototypeAlias$$.$borders$ = $JSCompiler_get$$("$_borders$");
$JSCompiler_prototypeAlias$$.$setBorders$ = $JSCompiler_set$$("$_borders$");
$goog$exportSymbol$$("X.volume", $X$volume$$);
$goog$exportSymbol$$("X.volume.prototype.dimensions", $X$volume$$.prototype.$dimensions$);
$goog$exportSymbol$$("X.volume.prototype.scalarRange", $X$volume$$.prototype.$scalarRange$);
$goog$exportSymbol$$("X.volume.prototype.setVisible", $X$volume$$.prototype.$setVisible$);
$goog$exportSymbol$$("X.volume.prototype.setCenter", $X$volume$$.prototype.$setCenter$);
$goog$exportSymbol$$("X.volume.prototype.setVolumeRendering", $X$volume$$.prototype.$setVolumeRendering$);
$goog$exportSymbol$$("X.volume.prototype.threshold", $X$volume$$.prototype.$threshold$);
$goog$exportSymbol$$("X.volume.prototype.modified", $X$volume$$.prototype.$modified$);
$goog$exportSymbol$$("X.volume.prototype.labelMap", $X$volume$$.prototype.$labelMap$);
$goog$exportSymbol$$("X.volume.prototype.borders", $X$volume$$.prototype.$borders$);
$goog$exportSymbol$$("X.volume.prototype.setBorders", $X$volume$$.prototype.$setBorders$);
function $X$labelMap$$($volume$$2$$) {
  $X$volume$$.call(this);
  this._className = "labelMap";
  this.$_volume$ = $volume$$2$$
}
$goog$inherits$$($X$labelMap$$, $X$volume$$);
$X$labelMap$$.prototype.$modified$ = function $$X$labelMap$$$$$modified$$() {
  var $modifiedEvent$$9$$ = new $X$event$ModifiedEvent$$;
  $modifiedEvent$$9$$.$_object$ = this;
  this.dispatchEvent($modifiedEvent$$9$$);
  this.$_volume$.$modified$()
};
$goog$exportSymbol$$("X.labelMap", $X$labelMap$$);
function $X$camera$$($width$$18$$, $height$$16$$) {
  (!$goog$isNumber$$($width$$18$$) || !$goog$isNumber$$($height$$16$$)) && $JSCompiler_alias_THROW$$(Error("A camera needs valid width and height values."));
  $X$base$$.call(this);
  this._className = "camera";
  this.$_fieldOfView$ = 45;
  this.$_position$ = new $goog$math$Vec3$$(0, 0, 100);
  this.$_focus$ = new $goog$math$Vec3$$(0, 0, 0);
  this.$_up$ = new $goog$math$Vec3$$(0, 1, 0);
  var $JSCompiler_temp_const$$33$$ = Float32Array, $JSCompiler_inline_result$$495_aspectRatio$$inline_498$$;
  $JSCompiler_inline_result$$495_aspectRatio$$inline_498$$ = $width$$18$$ / $height$$16$$;
  var $ymax$$inline_499$$ = 1 * Math.tan(this.$_fieldOfView$ * Math.PI / 360), $ymin$$inline_500$$ = -$ymax$$inline_499$$;
  $JSCompiler_inline_result$$495_aspectRatio$$inline_498$$ = new $X$matrix$$([[2 / ($ymax$$inline_499$$ * $JSCompiler_inline_result$$495_aspectRatio$$inline_498$$ - $ymin$$inline_500$$ * $JSCompiler_inline_result$$495_aspectRatio$$inline_498$$), 0, ($ymax$$inline_499$$ * $JSCompiler_inline_result$$495_aspectRatio$$inline_498$$ + $ymin$$inline_500$$ * $JSCompiler_inline_result$$495_aspectRatio$$inline_498$$) / ($ymax$$inline_499$$ * $JSCompiler_inline_result$$495_aspectRatio$$inline_498$$ - $ymin$$inline_500$$ * 
  $JSCompiler_inline_result$$495_aspectRatio$$inline_498$$), 0], [0, 2 / ($ymax$$inline_499$$ - $ymin$$inline_500$$), ($ymax$$inline_499$$ + $ymin$$inline_500$$) / ($ymax$$inline_499$$ - $ymin$$inline_500$$), 0], [0, 0, -10001 / 9999, -2.000200020002], [0, 0, -1, 0]]);
  this.$_perspective$ = new $JSCompiler_temp_const$$33$$($JSCompiler_inline_result$$495_aspectRatio$$inline_498$$.$flatten$());
  this.$_view$ = $JSCompiler_StaticMethods_lookAt_$$(this, this.$_position$, this.$_focus$);
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$())
}
$goog$inherits$$($X$camera$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$camera$$.prototype;
$JSCompiler_prototypeAlias$$.$onZoom_$ = function $$JSCompiler_prototypeAlias$$$$onZoom_$$($event$$25$$) {
  $event$$25$$ instanceof $X$event$ZoomEvent$$ || $JSCompiler_alias_THROW$$(Error("Received no valid zoom event."));
  $event$$25$$.$_in$ ? this.$zoomIn$($event$$25$$.$_fast$) : this.$zoomOut$($event$$25$$.$_fast$)
};
$JSCompiler_prototypeAlias$$.$onPan_$ = function $$JSCompiler_prototypeAlias$$$$onPan_$$($event$$26$$) {
  $event$$26$$ instanceof $X$event$PanEvent$$ || $JSCompiler_alias_THROW$$(Error("Received no valid pan event."));
  this.$pan$($event$$26$$.$_distance$)
};
$JSCompiler_prototypeAlias$$.$onRotate_$ = function $$JSCompiler_prototypeAlias$$$$onRotate_$$($event$$27$$) {
  $event$$27$$ instanceof $X$event$RotateEvent$$ || $JSCompiler_alias_THROW$$(Error("Received no valid rotate event."));
  this.rotate($event$$27$$.$_distance$)
};
$JSCompiler_prototypeAlias$$.view = $JSCompiler_get$$("$_view$");
$JSCompiler_prototypeAlias$$.$setView$ = function $$JSCompiler_prototypeAlias$$$$setView$$($view$$3$$) {
  (!$goog$isDefAndNotNull$$($view$$3$$) || !($view$$3$$ instanceof $X$matrix$$)) && $JSCompiler_alias_THROW$$(Error("Invalid view matrix."));
  this.$_view$ = $view$$3$$;
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$())
};
$JSCompiler_prototypeAlias$$.position = $JSCompiler_get$$("$_position$");
$JSCompiler_prototypeAlias$$.$setPosition$ = function $$JSCompiler_prototypeAlias$$$$setPosition$$($x$$74$$, $y$$46$$, $z$$9$$) {
  (!$goog$isNumber$$($x$$74$$) || !$goog$isNumber$$($y$$46$$) || !$goog$isNumber$$($z$$9$$)) && $JSCompiler_alias_THROW$$(Error("The position was invalid."));
  this.$_position$ = new $goog$math$Vec3$$($x$$74$$, $y$$46$$, $z$$9$$);
  this.reset()
};
$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  this.$_view$ = $JSCompiler_StaticMethods_lookAt_$$(this, this.$_position$, this.$_focus$);
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$())
};
$JSCompiler_prototypeAlias$$.focus = $JSCompiler_get$$("$_focus$");
$JSCompiler_prototypeAlias$$.$setFocus$ = function $$JSCompiler_prototypeAlias$$$$setFocus$$($x$$75$$, $y$$47$$, $z$$10$$) {
  (!$goog$isNumber$$($x$$75$$) || !$goog$isNumber$$($y$$47$$) || !$goog$isNumber$$($z$$10$$)) && $JSCompiler_alias_THROW$$(Error("The focus was invalid."));
  this.$_focus$ = new $goog$math$Vec3$$($x$$75$$, $y$$47$$, $z$$10$$);
  this.reset()
};
$JSCompiler_prototypeAlias$$.$up$ = $JSCompiler_get$$("$_up$");
$JSCompiler_prototypeAlias$$.$setUp$ = function $$JSCompiler_prototypeAlias$$$$setUp$$($x$$76$$, $y$$48$$, $z$$11$$) {
  (!$goog$isNumber$$($x$$76$$) || !$goog$isNumber$$($y$$48$$) || !$goog$isNumber$$($z$$11$$)) && $JSCompiler_alias_THROW$$(Error("The up-vector was invalid."));
  this.$_up$ = new $goog$math$Vec3$$($x$$76$$, $y$$48$$, $z$$11$$);
  this.reset()
};
$JSCompiler_prototypeAlias$$.$pan$ = function $$JSCompiler_prototypeAlias$$$$pan$$($distance$$6_distance3d_panMatrix$$) {
  $distance$$6_distance3d_panMatrix$$ instanceof $goog$math$Vec2$$ || $JSCompiler_alias_THROW$$(Error("Invalid distance vector for pan operation."));
  $distance$$6_distance3d_panMatrix$$ = new $goog$math$Vec3$$(-$distance$$6_distance3d_panMatrix$$.x, $distance$$6_distance3d_panMatrix$$.y, 0);
  $distance$$6_distance3d_panMatrix$$ = $X$matrix$createIdentityMatrix$$(4).translate($distance$$6_distance3d_panMatrix$$);
  this.$_view$ = new $X$matrix$$($distance$$6_distance3d_panMatrix$$.multiply(this.$_view$));
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$());
  this.dispatchEvent(new $X$event$RenderEvent$$)
};
$JSCompiler_prototypeAlias$$.rotate = function $$JSCompiler_prototypeAlias$$$rotate$($angleY_distance$$7_rotateY$$) {
  $angleY_distance$$7_rotateY$$ instanceof Array && 2 == $angleY_distance$$7_rotateY$$.length ? $angleY_distance$$7_rotateY$$ = new $goog$math$Vec2$$($angleY_distance$$7_rotateY$$[0], $angleY_distance$$7_rotateY$$[1]) : $angleY_distance$$7_rotateY$$ instanceof $goog$math$Vec2$$ || $JSCompiler_alias_THROW$$(Error("Invalid distance vector for rotate operation."));
  var $angleX_rotateX$$ = -$angleY_distance$$7_rotateY$$.x / 5 * Math.PI / 180, $angleY_distance$$7_rotateY$$ = -$angleY_distance$$7_rotateY$$.y / 5 * Math.PI / 180, $identity$$2$$ = $X$matrix$createIdentityMatrix$$(4), $xAxisVector$$ = new $goog$math$Vec3$$(parseFloat(this.$_view$.$getValueAt$(0, 0)), parseFloat(this.$_view$.$getValueAt$(0, 1)), parseFloat(this.$_view$.$getValueAt$(0, 2))), $angleX_rotateX$$ = $identity$$2$$.rotate($angleX_rotateX$$, new $goog$math$Vec3$$(parseFloat(this.$_view$.$getValueAt$(1, 
  0)), parseFloat(this.$_view$.$getValueAt$(1, 1)), parseFloat(this.$_view$.$getValueAt$(1, 2)))), $angleY_distance$$7_rotateY$$ = $identity$$2$$.rotate($angleY_distance$$7_rotateY$$, $xAxisVector$$);
  this.$_view$ = new $X$matrix$$(this.$_view$.multiply($angleY_distance$$7_rotateY$$.multiply($angleX_rotateX$$)));
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$());
  this.dispatchEvent(new $X$event$RenderEvent$$)
};
$JSCompiler_prototypeAlias$$.$zoomIn$ = function $$JSCompiler_prototypeAlias$$$$zoomIn$$($fast_zoomMatrix_zoomVector$$) {
  var $zoomStep$$ = 20;
  $goog$isDefAndNotNull$$($fast_zoomMatrix_zoomVector$$) && !$fast_zoomMatrix_zoomVector$$ && ($zoomStep$$ = 1);
  $fast_zoomMatrix_zoomVector$$ = new $goog$math$Vec3$$(0, 0, $zoomStep$$);
  $fast_zoomMatrix_zoomVector$$ = $X$matrix$createIdentityMatrix$$(4).translate($fast_zoomMatrix_zoomVector$$);
  this.$_view$ = new $X$matrix$$($fast_zoomMatrix_zoomVector$$.multiply(this.$_view$));
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$());
  this.dispatchEvent(new $X$event$RenderEvent$$)
};
$JSCompiler_prototypeAlias$$.$zoomOut$ = function $$JSCompiler_prototypeAlias$$$$zoomOut$$($fast$$1_zoomMatrix$$1_zoomVector$$1$$) {
  var $zoomStep$$1$$ = 30;
  $goog$isDefAndNotNull$$($fast$$1_zoomMatrix$$1_zoomVector$$1$$) && !$fast$$1_zoomMatrix$$1_zoomVector$$1$$ && ($zoomStep$$1$$ = 1);
  $fast$$1_zoomMatrix$$1_zoomVector$$1$$ = new $goog$math$Vec3$$(0, 0, -$zoomStep$$1$$);
  $fast$$1_zoomMatrix$$1_zoomVector$$1$$ = $X$matrix$createIdentityMatrix$$(4).translate($fast$$1_zoomMatrix$$1_zoomVector$$1$$);
  this.$_view$ = new $X$matrix$$($fast$$1_zoomMatrix$$1_zoomVector$$1$$.multiply(this.$_view$));
  this.$_glView$ = new Float32Array(this.$_view$.$flatten$());
  this.dispatchEvent(new $X$event$RenderEvent$$)
};
function $JSCompiler_StaticMethods_lookAt_$$($JSCompiler_StaticMethods_lookAt_$self_yVector$$, $cameraPosition_invertedCameraPosition$$, $targetPoint_zVector$$) {
  (!($cameraPosition_invertedCameraPosition$$ instanceof $goog$math$Vec3$$) || !($targetPoint_zVector$$ instanceof $goog$math$Vec3$$)) && $JSCompiler_alias_THROW$$(Error("3D vectors required for calculating the view."));
  var $matrix$$5$$ = $X$matrix$createIdentityMatrix$$(4), $targetPoint_zVector$$ = new $goog$math$Vec3$$($cameraPosition_invertedCameraPosition$$.x - $targetPoint_zVector$$.x, $cameraPosition_invertedCameraPosition$$.y - $targetPoint_zVector$$.y, $cameraPosition_invertedCameraPosition$$.$z$ - $targetPoint_zVector$$.$z$), $targetPoint_zVector$$ = $targetPoint_zVector$$.normalize(), $JSCompiler_StaticMethods_lookAt_$self_yVector$$ = $JSCompiler_StaticMethods_lookAt_$self_yVector$$.$_up$.$clone$();
  $JSCompiler_StaticMethods_lookAt_$self_yVector$$.$equals$($targetPoint_zVector$$) && ($JSCompiler_StaticMethods_lookAt_$self_yVector$$.$z$ += 1.0E-6);
  var $xVector$$ = $goog$math$Vec3$cross$$($JSCompiler_StaticMethods_lookAt_$self_yVector$$, $targetPoint_zVector$$), $JSCompiler_StaticMethods_lookAt_$self_yVector$$ = $goog$math$Vec3$cross$$($targetPoint_zVector$$, $xVector$$), $xVector$$ = $xVector$$.normalize(), $JSCompiler_StaticMethods_lookAt_$self_yVector$$ = $JSCompiler_StaticMethods_lookAt_$self_yVector$$.normalize();
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 0, 0, $xVector$$.x);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 0, 1, $xVector$$.y);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 0, 2, $xVector$$.$z$);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 0, 3, 0);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 1, 0, $JSCompiler_StaticMethods_lookAt_$self_yVector$$.x);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 1, 1, $JSCompiler_StaticMethods_lookAt_$self_yVector$$.y);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 1, 2, $JSCompiler_StaticMethods_lookAt_$self_yVector$$.$z$);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 1, 3, 0);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 2, 0, $targetPoint_zVector$$.x);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 2, 1, $targetPoint_zVector$$.y);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 2, 2, $targetPoint_zVector$$.$z$);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 2, 3, 0);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 3, 0, 0);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 3, 1, 0);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 3, 2, 0);
  $JSCompiler_StaticMethods_setValueAt$$($matrix$$5$$, 3, 3, 1);
  $cameraPosition_invertedCameraPosition$$ = $cameraPosition_invertedCameraPosition$$.$clone$();
  return $matrix$$5$$.translate($cameraPosition_invertedCameraPosition$$.$invert$())
}
$goog$exportSymbol$$("X.camera", $X$camera$$);
$goog$exportSymbol$$("X.camera.prototype.view", $X$camera$$.prototype.view);
$goog$exportSymbol$$("X.camera.prototype.setView", $X$camera$$.prototype.$setView$);
$goog$exportSymbol$$("X.camera.prototype.position", $X$camera$$.prototype.position);
$goog$exportSymbol$$("X.camera.prototype.setPosition", $X$camera$$.prototype.$setPosition$);
$goog$exportSymbol$$("X.camera.prototype.focus", $X$camera$$.prototype.focus);
$goog$exportSymbol$$("X.camera.prototype.setFocus", $X$camera$$.prototype.$setFocus$);
$goog$exportSymbol$$("X.camera.prototype.up", $X$camera$$.prototype.$up$);
$goog$exportSymbol$$("X.camera.prototype.setUp", $X$camera$$.prototype.$setUp$);
$goog$exportSymbol$$("X.camera.prototype.pan", $X$camera$$.prototype.$pan$);
$goog$exportSymbol$$("X.camera.prototype.rotate", $X$camera$$.prototype.rotate);
$goog$exportSymbol$$("X.camera.prototype.zoomIn", $X$camera$$.prototype.$zoomIn$);
$goog$exportSymbol$$("X.camera.prototype.zoomOut", $X$camera$$.prototype.$zoomOut$);
function $X$renderer$$($_container_container$$1$$) {
  $goog$isDefAndNotNull$$($_container_container$$1$$) || $JSCompiler_alias_THROW$$(Error("An ID to a valid container (<div>..) is required."));
  $_container_container$$1$$ = $goog$dom$getElement$$($_container_container$$1$$);
  (!($goog$isObject$$($_container_container$$1$$) && 1 == $_container_container$$1$$.nodeType) || 0 == $_container_container$$1$$.clientWidth || 0 == $_container_container$$1$$.clientHeight) && $JSCompiler_alias_THROW$$(Error("Could not find the given container or it has an undefined size."));
  $X$base$$.call(this);
  this._className = "renderer";
  this.$_container$ = $_container_container$$1$$;
  this.$_width$ = this.$_container$.clientWidth;
  this.$_height$ = this.$_container$.clientHeight;
  this.$_interactor$ = this.$_camera$ = this.$_shaderProgram$ = this.$_shaders$ = this.$_gl$ = this.$_canvas$ = $JSCompiler_alias_NULL$$;
  this.$_objects$ = new $X$array$$($X$object$OPACITY_COMPARATOR$$);
  this.$_topLevelObjects$ = [];
  this.$_maxZ$ = this.$_minZ$ = this.$_maxY$ = this.$_minY$ = this.$_maxX$ = this.$_minX$ = $JSCompiler_alias_NULL$$;
  this.$_center$ = [0, 0, 0];
  this.$_pickFrameBuffer$ = $JSCompiler_alias_NULL$$;
  this.$_attributePointers$ = new $goog$structs$Map$$;
  this.$_uniformLocations$ = new $goog$structs$Map$$;
  this.$_vertexBuffers$ = new $goog$structs$Map$$;
  this.$_normalBuffers$ = new $goog$structs$Map$$;
  this.$_colorBuffers$ = new $goog$structs$Map$$;
  this.$_scalarBuffers$ = new $goog$structs$Map$$;
  this.$_texturePositionBuffers$ = new $goog$structs$Map$$;
  this.$_textures$ = new $goog$structs$Map$$;
  this.$_progressBar$ = this.$_loader$ = $JSCompiler_alias_NULL$$;
  this._initialLoadingCompleted = this.$_locked$ = $JSCompiler_alias_FALSE$$;
  this.config = {PROGRESSBAR_ENABLED:$JSCompiler_alias_TRUE$$, PICKING_ENABLED:$JSCompiler_alias_TRUE$$, ORDERING_ENABLED:$JSCompiler_alias_TRUE$$, STATISTICS_ENABLED:$JSCompiler_alias_FALSE$$};
  window.console.log("XTK Release 4 -- 04/12/12 -- http://www.goXTK.com")
}
$goog$inherits$$($X$renderer$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$renderer$$.prototype;
$JSCompiler_prototypeAlias$$.width = $JSCompiler_get$$("$_width$");
$JSCompiler_prototypeAlias$$.height = $JSCompiler_get$$("$_height$");
$JSCompiler_prototypeAlias$$.canvas = function $$JSCompiler_prototypeAlias$$$canvas$() {
  $goog$isDefAndNotNull$$(this.$_canvas$) || (this.$_canvas$ = $goog$dom$createDom$$("canvas"));
  return this.$_canvas$
};
$JSCompiler_prototypeAlias$$.$container$ = $JSCompiler_get$$("$_container$");
$JSCompiler_prototypeAlias$$.$camera$ = $JSCompiler_get$$("$_camera$");
$JSCompiler_prototypeAlias$$.$interactor$ = $JSCompiler_get$$("$_interactor$");
function $JSCompiler_StaticMethods_loader$$($JSCompiler_StaticMethods_loader$self$$) {
  $goog$isDefAndNotNull$$($JSCompiler_StaticMethods_loader$self$$.$_loader$) || ($JSCompiler_StaticMethods_loader$self$$.$_loader$ = new $X$loader$$, $goog$events$listen$$($JSCompiler_StaticMethods_loader$$($JSCompiler_StaticMethods_loader$self$$), $X$event$events$PROGRESS$$, $JSCompiler_StaticMethods_loader$self$$.$onProgress$.bind($JSCompiler_StaticMethods_loader$self$$)));
  return $JSCompiler_StaticMethods_loader$self$$.$_loader$
}
$JSCompiler_prototypeAlias$$.$onProgress$ = function $$JSCompiler_prototypeAlias$$$$onProgress$$($event$$28$$) {
  this.$_progressBar$ && this.$_progressBar$.$setValue$(100 * $event$$28$$.$_value$)
};
$JSCompiler_prototypeAlias$$.$onModified$ = function $$JSCompiler_prototypeAlias$$$$onModified$$($event$$29$$) {
  $goog$isDefAndNotNull$$($event$$29$$) && $event$$29$$ instanceof $X$event$ModifiedEvent$$ && this.$update_$($event$$29$$.$_object$)
};
$JSCompiler_prototypeAlias$$.$onHover$ = function $$JSCompiler_prototypeAlias$$$$onHover$$($event$$30_y$$inline_504$$) {
  if($goog$isDefAndNotNull$$($event$$30_y$$inline_504$$) && $event$$30_y$$inline_504$$ instanceof $X$event$HoverEvent$$) {
    var $x$$inline_503$$ = $event$$30_y$$inline_504$$.$_x$, $event$$30_y$$inline_504$$ = $event$$30_y$$inline_504$$.$_y$, $caption$$inline_506_object$$inline_505$$ = this.get(this.$pick$($x$$inline_503$$, $event$$30_y$$inline_504$$));
    if($caption$$inline_506_object$$inline_505$$ && ($caption$$inline_506_object$$inline_505$$ = $caption$$inline_506_object$$inline_505$$.caption())) {
      (new $X$caption$$(this.$container$(), this.$container$().offsetLeft + $x$$inline_503$$ + 10, this.$container$().offsetTop + $event$$30_y$$inline_504$$ + 10, this.$_interactor$)).$getElement$().innerHTML = $caption$$inline_506_object$$inline_505$$
    }
  }
};
$JSCompiler_prototypeAlias$$.$resetBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$resetBoundingBox$$() {
  this.$_maxZ$ = this.$_minZ$ = this.$_maxY$ = this.$_minY$ = this.$_maxX$ = this.$_minX$ = $JSCompiler_alias_NULL$$;
  this.$_center$ = [0, 0, 0]
};
function $JSCompiler_StaticMethods_hideProgressBar_$$($JSCompiler_StaticMethods_hideProgressBar_$self$$) {
  $JSCompiler_StaticMethods_hideProgressBar_$self$$.config.PROGRESSBAR_ENABLED && $JSCompiler_StaticMethods_hideProgressBar_$self$$.$_progressBar$ && !$JSCompiler_StaticMethods_hideProgressBar_$self$$.$_readyCheckTimer2$ && ($JSCompiler_StaticMethods_done$$($JSCompiler_StaticMethods_hideProgressBar_$self$$.$_progressBar$), $JSCompiler_StaticMethods_hideProgressBar_$self$$.$_readyCheckTimer2$ = $goog$Timer$callOnce$$(function() {
    this.$_readyCheckTimer2$ = $JSCompiler_alias_NULL$$;
    this.$_progressBar$ && (this.$_progressBar$.$kill$(), this.$_progressBar$ = $JSCompiler_alias_NULL$$);
    this.$render$()
  }.bind($JSCompiler_StaticMethods_hideProgressBar_$self$$), 700))
}
$JSCompiler_prototypeAlias$$.$resetViewAndRender$ = function $$JSCompiler_prototypeAlias$$$$resetViewAndRender$$() {
  this.$_camera$.reset();
  this.$render_$($JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$init$ = function $$JSCompiler_prototypeAlias$$$$init$$() {
  var $canvas$$ = this.canvas();
  $canvas$$.width = this.width();
  $canvas$$.height = this.height();
  this.$container$().appendChild($canvas$$);
  try {
    var $gl$$ = $canvas$$.getContext("experimental-webgl");
    $gl$$ || $JSCompiler_alias_THROW$$(Error())
  }catch($e$$49$$) {
    this.$container$().innerHTML = '<h3 style="color:red;font-family:sans-serif;">Oooops..</h3><p style="color:red;font-family:sans-serif;">Sorry, WebGL is <strong>not supported</strong> on this machine! See <a href="http://crash.goXTK.com" target="_blank">http://crash.goXTK.com</a> for requirements..</p>', $JSCompiler_alias_THROW$$(Error('Sorry, WebGL is <strong>not supported</strong> on this machine! See <a href="http://crash.goXTK.com" target="_blank">http://crash.goXTK.com</a> for requirements..'))
  }
  try {
    if($gl$$.viewport(0, 0, this.width(), this.height()), $gl$$.clearColor(0, 0, 0, 0), $gl$$.enable($gl$$.BLEND), $gl$$.blendEquation($gl$$.FUNC_ADD), $gl$$.blendFunc($gl$$.SRC_ALPHA, $gl$$.ONE_MINUS_SRC_ALPHA), $gl$$.enable($gl$$.DEPTH_TEST), $gl$$.depthFunc($gl$$.LEQUAL), $gl$$.clear($gl$$.COLOR_BUFFER_BIT | $gl$$.DEPTH_BUFFER_BIT), this.config.PICKING_ENABLED) {
      var $interactor$$2_pickFrameBuffer$$ = $gl$$.createFramebuffer(), $camera_pickRenderBuffer$$ = $gl$$.createRenderbuffer(), $pickTexture$$ = $gl$$.createTexture();
      $gl$$.bindTexture($gl$$.TEXTURE_2D, $pickTexture$$);
      $gl$$.texImage2D($gl$$.TEXTURE_2D, 0, $gl$$.RGB, this.width(), this.height(), 0, $gl$$.RGB, $gl$$.UNSIGNED_BYTE, $JSCompiler_alias_NULL$$);
      $gl$$.bindFramebuffer($gl$$.FRAMEBUFFER, $interactor$$2_pickFrameBuffer$$);
      $gl$$.bindRenderbuffer($gl$$.RENDERBUFFER, $camera_pickRenderBuffer$$);
      $gl$$.renderbufferStorage($gl$$.RENDERBUFFER, $gl$$.DEPTH_COMPONENT16, this.width(), this.height());
      $gl$$.bindRenderbuffer($gl$$.RENDERBUFFER, $JSCompiler_alias_NULL$$);
      $gl$$.framebufferTexture2D($gl$$.FRAMEBUFFER, $gl$$.COLOR_ATTACHMENT0, $gl$$.TEXTURE_2D, $pickTexture$$, 0);
      $gl$$.framebufferRenderbuffer($gl$$.FRAMEBUFFER, $gl$$.DEPTH_ATTACHMENT, $gl$$.RENDERBUFFER, $camera_pickRenderBuffer$$);
      $gl$$.bindFramebuffer($gl$$.FRAMEBUFFER, $JSCompiler_alias_NULL$$);
      this.$_pickFrameBuffer$ = $interactor$$2_pickFrameBuffer$$
    }
  }catch($e$$50$$) {
    $JSCompiler_alias_THROW$$(Error("Exception while accessing GL Context!\n" + $e$$50$$))
  }
  $interactor$$2_pickFrameBuffer$$ = new $X$interactor$$($canvas$$);
  $interactor$$2_pickFrameBuffer$$.$init$();
  $goog$events$listen$$($interactor$$2_pickFrameBuffer$$, $X$event$events$RESETVIEW$$, this.$resetViewAndRender$.bind(this));
  $goog$events$listen$$($interactor$$2_pickFrameBuffer$$, $X$event$events$HOVER$$, this.$onHover$.bind(this));
  $camera_pickRenderBuffer$$ = new $X$camera$$(this.width(), this.height());
  (!$goog$isDefAndNotNull$$($interactor$$2_pickFrameBuffer$$) || !($interactor$$2_pickFrameBuffer$$ instanceof $X$interactor$$)) && $JSCompiler_alias_THROW$$(Error("Could not observe the interactor."));
  $goog$events$listen$$($interactor$$2_pickFrameBuffer$$, $X$event$events$PAN$$, $camera_pickRenderBuffer$$.$onPan_$.bind($camera_pickRenderBuffer$$));
  $goog$events$listen$$($interactor$$2_pickFrameBuffer$$, $X$event$events$ROTATE$$, $camera_pickRenderBuffer$$.$onRotate_$.bind($camera_pickRenderBuffer$$));
  $goog$events$listen$$($interactor$$2_pickFrameBuffer$$, $X$event$events$ZOOM$$, $camera_pickRenderBuffer$$.$onZoom_$.bind($camera_pickRenderBuffer$$));
  $goog$events$listen$$($camera_pickRenderBuffer$$, $X$event$events$RENDER$$, this.$render_$.bind(this, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$));
  this.$_canvas$ = $canvas$$;
  this.$_gl$ = $gl$$;
  this.$_camera$ = $camera_pickRenderBuffer$$;
  this.$_interactor$ = $interactor$$2_pickFrameBuffer$$;
  $JSCompiler_StaticMethods_addShaders$$(this)
};
function $JSCompiler_StaticMethods_addShaders$$($JSCompiler_StaticMethods_addShaders$self$$) {
  var $shaders$$ = new $X$shaders$$;
  (!$goog$isDefAndNotNull$$($JSCompiler_StaticMethods_addShaders$self$$.$_canvas$) || !$goog$isDefAndNotNull$$($JSCompiler_StaticMethods_addShaders$self$$.$_gl$) || !$goog$isDefAndNotNull$$($JSCompiler_StaticMethods_addShaders$self$$.$_camera$)) && $JSCompiler_alias_THROW$$(Error("Renderer was not initialized properly."));
  (!$goog$isDefAndNotNull$$($shaders$$) || !($shaders$$ instanceof $X$shaders$$)) && $JSCompiler_alias_THROW$$(Error("Could not add shaders."));
  $JSCompiler_StaticMethods_validate$$($shaders$$);
  var $glFragmentShader$$ = $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.createShader($JSCompiler_StaticMethods_addShaders$self$$.$_gl$.FRAGMENT_SHADER), $glVertexShader$$ = $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.createShader($JSCompiler_StaticMethods_addShaders$self$$.$_gl$.VERTEX_SHADER);
  $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.shaderSource($glFragmentShader$$, $shaders$$.$_fragmentshaderSource$);
  $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.shaderSource($glVertexShader$$, $shaders$$.$_vertexshaderSource$);
  $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.compileShader($glFragmentShader$$);
  $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.compileShader($glVertexShader$$);
  $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.getShaderParameter($glFragmentShader$$, $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.COMPILE_STATUS) || $JSCompiler_alias_THROW$$(Error("Fragement Shader compilation failed!\n" + $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.getShaderInfoLog($glFragmentShader$$)));
  $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.getShaderParameter($glVertexShader$$, $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.COMPILE_STATUS) || $JSCompiler_alias_THROW$$(Error("Vertex Shader compilation failed!\n" + $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.getShaderInfoLog($glVertexShader$$)));
  var $shaderProgram$$ = $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.createProgram();
  $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.attachShader($shaderProgram$$, $glVertexShader$$);
  $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.attachShader($shaderProgram$$, $glFragmentShader$$);
  $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.linkProgram($shaderProgram$$);
  $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.getProgramParameter($shaderProgram$$, $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.LINK_STATUS) || $JSCompiler_alias_THROW$$(Error("Could not create shader program!\n" + $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.getShaderInfoLog($glFragmentShader$$) + "\n" + $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.getShaderInfoLog($glVertexShader$$) + "\n" + $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.getProgramInfoLog($shaderProgram$$)));
  $JSCompiler_StaticMethods_addShaders$self$$.$_gl$.useProgram($shaderProgram$$);
  $JSCompiler_StaticMethods_addShaders$self$$.$_shaderProgram$ = $shaderProgram$$;
  Object.keys($X$shaders$attributes$$).forEach(function($a$$63$$) {
    $a$$63$$ = eval("X.shaders.attributes." + $a$$63$$);
    this.$_attributePointers$.set($a$$63$$, this.$_gl$.getAttribLocation(this.$_shaderProgram$, $a$$63$$));
    this.$_gl$.enableVertexAttribArray(this.$_attributePointers$.get($a$$63$$))
  }.bind($JSCompiler_StaticMethods_addShaders$self$$));
  Object.keys($X$shaders$uniforms$$).forEach(function($u$$2$$) {
    $u$$2$$ = eval("X.shaders.uniforms." + $u$$2$$);
    this.$_uniformLocations$.set($u$$2$$, this.$_gl$.getUniformLocation(this.$_shaderProgram$, $u$$2$$))
  }.bind($JSCompiler_StaticMethods_addShaders$self$$));
  $JSCompiler_StaticMethods_addShaders$self$$.$_shaders$ = $shaders$$
}
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($object$$40$$) {
  this.$_topLevelObjects$.push($object$$40$$);
  this.$update_$($object$$40$$)
};
$JSCompiler_prototypeAlias$$.$update_$ = function $$JSCompiler_prototypeAlias$$$$update_$$($object$$41$$) {
  (!$goog$isDefAndNotNull$$(this.$_canvas$) || !$goog$isDefAndNotNull$$(this.$_gl$) || !$goog$isDefAndNotNull$$(this.$_camera$)) && $JSCompiler_alias_THROW$$(Error("Renderer was not initialized properly."));
  $goog$isDefAndNotNull$$($object$$41$$) || (window.console.log($object$$41$$), $JSCompiler_alias_THROW$$(Error("Illegal object.")));
  var $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ = $JSCompiler_alias_FALSE$$;
  this.get($object$$41$$._id) && ($JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ = $JSCompiler_alias_TRUE$$);
  $goog$events$hasListener$$($object$$41$$) || $goog$events$listen$$($object$$41$$, $X$event$events$MODIFIED$$, this.$onModified$.bind(this));
  var $filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$ = $object$$41$$._id, $glScalarBuffer_points$$1$$ = $object$$41$$.$_points$, $colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$ = $object$$41$$.$_normals$, $colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$ = $object$$41$$.$_colors$, $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$ = $object$$41$$.$_texture$, $children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$ = 
  $object$$41$$.$_file$, $glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$ = $object$$41$$.$_transform$, $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$ = $object$$41$$.$_colorTable$, $c$$11_glTexture_glTexturePositionBuffer_labelMap$$ = $object$$41$$.$_labelMap$, $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$ = $object$$41$$.$_scalars$;
  if($goog$isDefAndNotNull$$($c$$11_glTexture_glTexturePositionBuffer_labelMap$$) && $goog$isDefAndNotNull$$($c$$11_glTexture_glTexturePositionBuffer_labelMap$$.$_file$) && $c$$11_glTexture_glTexturePositionBuffer_labelMap$$.$_file$.$_dirty$) {
    this.$update_$($c$$11_glTexture_glTexturePositionBuffer_labelMap$$)
  }else {
    if($goog$isDefAndNotNull$$($colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$) && $goog$isDefAndNotNull$$($colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$.$_file$) && $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$.$_file$.$_dirty$) {
      $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ = $JSCompiler_StaticMethods_loader$$(this), $goog$isDefAndNotNull$$($object$$41$$.$_colorTable$) || $JSCompiler_alias_THROW$$(Error("Internal error during file loading.")), $filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$ = $object$$41$$.$_colorTable$.file().path(), $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$ = 
      new XMLHttpRequest, $goog$events$listen$$($currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, "abort", $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$.$loadFileFailed$.bind($JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$, 
      $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, $object$$41$$)), $goog$events$listen$$($currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, "error", $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$.$loadFileFailed$.bind($JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$, 
      $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, $object$$41$$)), $goog$events$listen$$($currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, "load", $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$.$loadColorTableCompleted$.bind($JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$, 
      $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, $object$$41$$)), $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.open("GET", $filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$, $JSCompiler_alias_TRUE$$), $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.overrideMimeType("text/plain; charset=x-user-defined"), $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.setRequestHeader("Content-Type", 
      "text/plain"), $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.send($JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_jobs_$$($JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$).set($object$$41$$.$_colorTable$.id(), $JSCompiler_alias_FALSE$$)
    }else {
      if($goog$isDefAndNotNull$$($glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$) && $goog$isDefAndNotNull$$($glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$_file$) && $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$_file$.$_dirty$) {
        $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ = $JSCompiler_StaticMethods_loader$$(this), $goog$isDefAndNotNull$$($object$$41$$.$_texture$) || $JSCompiler_alias_THROW$$(Error("Internal error during texture loading.")), $filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$ = new Image, $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$ = 
        $object$$41$$.$_texture$.file().path(), $filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$.src = $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, $object$$41$$.$_texture$.$_image$ = $filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$, $goog$events$listenOnce$$($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$, "load", $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$.$loadTextureCompleted$.bind($JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$, 
        $object$$41$$)), $JSCompiler_StaticMethods_jobs_$$($JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$).set($object$$41$$.id(), $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$, 
        0.3)
      }else {
        if($goog$isDefAndNotNull$$($children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$) && $children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$.$_dirty$) {
          $JSCompiler_StaticMethods_loadFile$$($JSCompiler_StaticMethods_loader$$(this), $object$$41$$)
        }else {
          if($goog$isDefAndNotNull$$($currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$) && $goog$isDefAndNotNull$$($currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.$_file$) && $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.$_file$.$_dirty$) {
            $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ = $JSCompiler_StaticMethods_loader$$(this), $goog$isDefAndNotNull$$($object$$41$$.$_scalars$) || $JSCompiler_alias_THROW$$(Error("Internal error during file loading.")), $filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$ = $object$$41$$.$_scalars$.file().path(), $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$ = 
            new XMLHttpRequest, $goog$events$listen$$($currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, "abort", $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$.$loadFileFailed$.bind($JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$, 
            $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, $object$$41$$)), $goog$events$listen$$($currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, "error", $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$.$loadFileFailed$.bind($JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$, 
            $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, $object$$41$$)), $goog$events$listen$$($currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, "load", $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$.$loadScalarsCompleted$.bind($JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$, 
            $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$, $object$$41$$)), $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.open("GET", $filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$, $JSCompiler_alias_TRUE$$), $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.overrideMimeType("text/plain; charset=x-user-defined"), $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.setRequestHeader("Content-Type", 
            "text/plain"), $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.send($JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_jobs_$$($JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$).set($object$$41$$.$_scalars$.id(), $JSCompiler_alias_FALSE$$)
          }else {
            if($object$$41$$.$_dirty$ && 0 < $object$$41$$.children().length) {
              $children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$ = $object$$41$$.children();
              $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$ = $children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$.length;
              for($c$$11_glTexture_glTexturePositionBuffer_labelMap$$ = $c$$11_glTexture_glTexturePositionBuffer_labelMap$$ = 0;$c$$11_glTexture_glTexturePositionBuffer_labelMap$$ < $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$;$c$$11_glTexture_glTexturePositionBuffer_labelMap$$++) {
                this.$update_$($children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$[$c$$11_glTexture_glTexturePositionBuffer_labelMap$$])
              }
            }
            if(0 == $glScalarBuffer_points$$1$$.count()) {
              $JSCompiler_StaticMethods_setClean$$($object$$41$$)
            }else {
              for($children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$ = 0;this.$_locked$;) {
                $children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$++, window.console.log("Possible thread lock avoided: " + $children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$)
              }
              this.$_locked$ = $JSCompiler_alias_TRUE$$;
              $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$ = $object$$41$$ instanceof $X$slice$$ && $object$$41$$.$_volume$ instanceof $X$labelMap$$;
              $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ && $goog$isDefAndNotNull$$($glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$) && $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$_dirty$ && ($children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$ = this.$_texturePositionBuffers$.get($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$), 
              $goog$isDefAndNotNull$$($children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$) && this.$_gl$.isBuffer($children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$.$_glBuffer$) && this.$_gl$.deleteBuffer($children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$.$_glBuffer$));
              $children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$ = $JSCompiler_alias_NULL$$;
              $goog$isDefAndNotNull$$($glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$) && (!$JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ || $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$_dirty$ ? ($children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$ = $object$$41$$.$_textureCoordinateMap$, 
              $goog$isDefAndNotNull$$($children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$) || $JSCompiler_alias_THROW$$(Error("Can not add an object and texture without valid coordinate mapping! Set the textureCoordinateMap!")), $c$$11_glTexture_glTexturePositionBuffer_labelMap$$ = this.$_gl$.createTexture(), $c$$11_glTexture_glTexturePositionBuffer_labelMap$$.$image$ = $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$_image$, this.$_textures$.set($glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$._id, 
              $c$$11_glTexture_glTexturePositionBuffer_labelMap$$), this.$_gl$.bindTexture(this.$_gl$.TEXTURE_2D, $c$$11_glTexture_glTexturePositionBuffer_labelMap$$), $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$_rawData$ ? (this.$_gl$.texImage2D(this.$_gl$.TEXTURE_2D, 0, this.$_gl$.RGBA, $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$_rawDataWidth$, $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$_rawDataHeight$, 0, this.$_gl$.RGBA, this.$_gl$.UNSIGNED_BYTE, 
              $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$_rawData$), this.$_gl$.texParameteri(this.$_gl$.TEXTURE_2D, this.$_gl$.TEXTURE_WRAP_S, this.$_gl$.CLAMP_TO_EDGE), this.$_gl$.texParameteri(this.$_gl$.TEXTURE_2D, this.$_gl$.TEXTURE_WRAP_T, this.$_gl$.CLAMP_TO_EDGE), this.$_gl$.pixelStorei(this.$_gl$.UNPACK_FLIP_Y_WEBGL, $JSCompiler_alias_TRUE$$)) : (this.$_gl$.texImage2D(this.$_gl$.TEXTURE_2D, 0, this.$_gl$.RGBA, this.$_gl$.RGBA, this.$_gl$.UNSIGNED_BYTE, $c$$11_glTexture_glTexturePositionBuffer_labelMap$$.$image$), 
              this.$_gl$.pixelStorei(this.$_gl$.UNPACK_FLIP_Y_WEBGL, $JSCompiler_alias_FALSE$$)), $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$ ? (this.$_gl$.texParameteri(this.$_gl$.TEXTURE_2D, this.$_gl$.TEXTURE_MAG_FILTER, this.$_gl$.NEAREST), this.$_gl$.texParameteri(this.$_gl$.TEXTURE_2D, this.$_gl$.TEXTURE_MIN_FILTER, this.$_gl$.NEAREST)) : (this.$_gl$.texParameteri(this.$_gl$.TEXTURE_2D, this.$_gl$.TEXTURE_MAG_FILTER, this.$_gl$.LINEAR), this.$_gl$.texParameteri(this.$_gl$.TEXTURE_2D, 
              this.$_gl$.TEXTURE_MIN_FILTER, this.$_gl$.LINEAR)), this.$_gl$.bindTexture(this.$_gl$.TEXTURE_2D, $JSCompiler_alias_NULL$$), $c$$11_glTexture_glTexturePositionBuffer_labelMap$$ = this.$_gl$.createBuffer(), this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $c$$11_glTexture_glTexturePositionBuffer_labelMap$$), this.$_gl$.bufferData(this.$_gl$.ARRAY_BUFFER, new Float32Array($children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$), this.$_gl$.STATIC_DRAW), 
              $children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$ = new $X$buffer$$($c$$11_glTexture_glTexturePositionBuffer_labelMap$$, $children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$.length, 2), $JSCompiler_StaticMethods_setClean$$($glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$)) : $children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$ = 
              this.$_texturePositionBuffers$.get($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$));
              $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_loader$$(this), 0.1);
              if($colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$) {
                this.$_locked$ = $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_loader$$(this), 0.9)
              }else {
                if($glScalarBuffer_points$$1$$.$_dirty$ || $glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$.$_dirty$) {
                  $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$ = $glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$.$_matrix$;
                  $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$ = $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$.$multiplyByVector$(new $goog$math$Vec3$$($glScalarBuffer_points$$1$$.$_minA$, $glScalarBuffer_points$$1$$.$_minB$, $glScalarBuffer_points$$1$$.$_minC$));
                  $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$ = $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$.$multiplyByVector$(new $goog$math$Vec3$$($glScalarBuffer_points$$1$$.$_maxA$, $glScalarBuffer_points$$1$$.$_maxB$, $glScalarBuffer_points$$1$$.$_maxC$));
                  if(this.$_minX$ === $JSCompiler_alias_NULL$$ || $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.x < this.$_minX$) {
                    this.$_minX$ = $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.x
                  }
                  if(this.$_maxX$ === $JSCompiler_alias_NULL$$ || $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$.x > this.$_maxX$) {
                    this.$_maxX$ = $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$.x
                  }
                  if(this.$_minY$ === $JSCompiler_alias_NULL$$ || $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.y < this.$_minY$) {
                    this.$_minY$ = $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.y
                  }
                  if(this.$_maxY$ === $JSCompiler_alias_NULL$$ || $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$.y > this.$_maxY$) {
                    this.$_maxY$ = $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$.y
                  }
                  if(this.$_minZ$ === $JSCompiler_alias_NULL$$ || $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$z$ < this.$_minZ$) {
                    this.$_minZ$ = $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$z$
                  }
                  if(this.$_maxZ$ === $JSCompiler_alias_NULL$$ || $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$.$z$ > this.$_maxZ$) {
                    this.$_maxZ$ = $colorTable$$2_isLabelMap_numberOfChildren$$3_tMax_transformationMatrix$$1$$.$z$
                  }
                  this.$_center$ = [(this.$_minX$ + this.$_maxX$) / 2, (this.$_minY$ + this.$_maxY$) / 2, (this.$_minZ$ + this.$_maxZ$) / 2];
                  $JSCompiler_StaticMethods_setClean$$($glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$)
                }
                $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ && $glScalarBuffer_points$$1$$.$_dirty$ && ($glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$ = this.$_vertexBuffers$.get($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$), $goog$isDefAndNotNull$$($glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$) && this.$_gl$.isBuffer($glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$.$_glBuffer$) && 
                this.$_gl$.deleteBuffer($glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$.$_glBuffer$));
                $glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$ = $JSCompiler_alias_NULL$$;
                !$JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ || $glScalarBuffer_points$$1$$.$_dirty$ ? ($glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$ = this.$_gl$.createBuffer(), this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$), this.$_gl$.bufferData(this.$_gl$.ARRAY_BUFFER, new Float32Array($glScalarBuffer_points$$1$$.all()), 
                this.$_gl$.STATIC_DRAW), $glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$ = new $X$buffer$$($glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$, $glScalarBuffer_points$$1$$.count(), 3), $JSCompiler_StaticMethods_setClean$$($glScalarBuffer_points$$1$$)) : $glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$ = this.$_vertexBuffers$.get($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$);
                $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_loader$$(this), 0.3);
                $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ && $colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$.$_dirty$ && ($glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$ = this.$_vertexBuffers$.get($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$), $goog$isDefAndNotNull$$($glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$) && 
                this.$_gl$.isBuffer($glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$_glBuffer$) && this.$_gl$.deleteBuffer($glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$.$_glBuffer$));
                $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$ = $JSCompiler_alias_NULL$$;
                !$JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ || $colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$.$_dirty$ ? ($glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$ = this.$_gl$.createBuffer(), this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$), this.$_gl$.bufferData(this.$_gl$.ARRAY_BUFFER, 
                new Float32Array($colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$.all()), this.$_gl$.STATIC_DRAW), $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$ = new $X$buffer$$($glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$, $colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$.count(), 3), $JSCompiler_StaticMethods_setClean$$($colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$)) : $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$ = this.$_normalBuffers$.get($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$);
                $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_loader$$(this), 0.3);
                $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ && $colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$.$_dirty$ && ($colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$ = this.$_colorBuffers$.get($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$), $goog$isDefAndNotNull$$($colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$) && this.$_gl$.isBuffer($colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$.$_glBuffer$) && 
                this.$_gl$.deleteBuffer($colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$.$_glBuffer$));
                $colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$ = $JSCompiler_alias_NULL$$;
                0 < $colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$.length() && (!$JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ || $colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$.$_dirty$ ? ($colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$.length() != $glScalarBuffer_points$$1$$.length() && $JSCompiler_alias_THROW$$(Error("Mismatch between points and point colors.")), 
                $colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$ = this.$_gl$.createBuffer(), this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$), this.$_gl$.bufferData(this.$_gl$.ARRAY_BUFFER, new Float32Array($colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$.all()), this.$_gl$.STATIC_DRAW), $colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$ = new $X$buffer$$($colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$, $colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$.count(), 
                3), $JSCompiler_StaticMethods_setClean$$($colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$)) : $colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$ = this.$_colorBuffers$.get($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$));
                $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_loader$$(this), 0.2);
                $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ && $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$ && $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.$_dirty$ && ($colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$ = this.$_scalarBuffers$.get($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$), 
                $goog$isDefAndNotNull$$($colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$) && this.$_gl$.isBuffer($colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$.$_glBuffer$) && this.$_gl$.deleteBuffer($colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$.$_glBuffer$));
                $colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$ = $JSCompiler_alias_NULL$$;
                $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$ && ($colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$ = $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.$_glArray$, !$JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ || $currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$.$_dirty$ ? 
                ($colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$.length != $glScalarBuffer_points$$1$$.length() && $JSCompiler_alias_THROW$$(Error("Mismatch between points and scalars.")), $glScalarBuffer_points$$1$$ = this.$_gl$.createBuffer(), this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $glScalarBuffer_points$$1$$), this.$_gl$.bufferData(this.$_gl$.ARRAY_BUFFER, new Float32Array($colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$), this.$_gl$.STATIC_DRAW), $colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$ = 
                new $X$buffer$$($glScalarBuffer_points$$1$$, $colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$.length, 3), $JSCompiler_StaticMethods_setClean$$($currentTextureFilename$$inline_522_request$$inline_517_request$$inline_527_scalars$$2$$)) : $colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$ = this.$_scalarBuffers$.get($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$));
                $JSCompiler_StaticMethods_addProgress$$($JSCompiler_StaticMethods_loader$$(this), 0.1);
                $JSCompiler_StaticMethods_loadColorTable$self$$inline_514_JSCompiler_StaticMethods_loadScalars$self$$inline_524_JSCompiler_StaticMethods_loadTexture$self$$inline_519_existed$$ || this.$_objects$.add($object$$41$$);
                this.$_vertexBuffers$.set($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$, $glVertexBuffer_oldVertexBuffer_transform_vertexBuffer$$);
                this.$_normalBuffers$.set($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$, $glNormalBuffer_normalBuffer_oldNormalBuffer_tMin_texture$$6$$);
                this.$_colorBuffers$.set($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$, $colorBuffer_glColorBuffer_normals$$2_oldColorBuffer$$);
                this.$_texturePositionBuffers$.set($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$, $children$$3_counter$$4_file$$3_oldTexturePositionBuffer_textureCoordinateMap_texturePositionBuffer$$);
                this.$_scalarBuffers$.set($filepath$$inline_516_filepath$$inline_526_id$$12_image$$inline_521$$, $colors$$1_oldScalarBuffer_scalarBuffer_scalarsArray$$);
                $JSCompiler_StaticMethods_setClean$$($object$$41$$);
                this.$_locked$ = $JSCompiler_alias_FALSE$$
              }
            }
          }
        }
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$() {
  (!this.$_canvas$ || !this.$_gl$ || !this.$_camera$) && $JSCompiler_alias_THROW$$(Error("The renderer was not initialized properly."));
  $goog$isDefAndNotNull$$(this.$_readyCheckTimer$) || ($JSCompiler_StaticMethods_completed$$($JSCompiler_StaticMethods_loader$$(this)) ? this.$_progressBar$ ? ($JSCompiler_StaticMethods_hideProgressBar_$$(this), eval("this.onShowtime()"), this._initialLoadingCompleted = $JSCompiler_alias_TRUE$$) : this.$render_$($JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$) : (this.config.PROGRESSBAR_ENABLED && !this.$_progressBar$ && (this.$_progressBar$ = new $X$progressbar$$(this.$container$(), 3)), this.$_readyCheckTimer$ = 
  $goog$Timer$callOnce$$(function() {
    this.$_readyCheckTimer$ = $JSCompiler_alias_NULL$$;
    this.$render$()
  }.bind(this), 100)))
};
$JSCompiler_prototypeAlias$$.$onShowtime$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($id$$13$$) {
  $goog$isDefAndNotNull$$($id$$13$$) || $JSCompiler_alias_THROW$$(Error("Invalid object id."));
  for(var $objects$$ = this.$_objects$.$_array$, $k$$7$$ = 0, $numberOfObjects$$ = $objects$$.length, $k$$7$$ = 0;$k$$7$$ < $numberOfObjects$$;$k$$7$$++) {
    if($objects$$[$k$$7$$]._id == $id$$13$$) {
      return $objects$$[$k$$7$$]
    }
  }
  return $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods_distanceToEye_$$($JSCompiler_StaticMethods_distanceToEye_$self$$, $object$$44$$) {
  var $centroid$$1_distanceFromEye_realCentroidVector$$1$$ = $object$$44$$.$_points$.$_centroid$, $centroid$$1_distanceFromEye_realCentroidVector$$1$$ = $JSCompiler_StaticMethods_distanceToEye_$self$$.$_camera$.$_view$.$multiplyByVector$($object$$44$$.$_transform$.$_matrix$.$multiplyByVector$(new $goog$math$Vec3$$($centroid$$1_distanceFromEye_realCentroidVector$$1$$[0], $centroid$$1_distanceFromEye_realCentroidVector$$1$$[1], $centroid$$1_distanceFromEye_realCentroidVector$$1$$[2]))), $centroid$$1_distanceFromEye_realCentroidVector$$1$$ = 
  $goog$math$Vec3$distance$$($JSCompiler_StaticMethods_distanceToEye_$self$$.$_camera$.$_position$, $centroid$$1_distanceFromEye_realCentroidVector$$1$$);
  return Math.round(1E3 * $centroid$$1_distanceFromEye_realCentroidVector$$1$$) / 1E3
}
$JSCompiler_prototypeAlias$$.$pick$ = function $$JSCompiler_prototypeAlias$$$$pick$$($x$$79$$, $y$$51$$) {
  if(this.config.PICKING_ENABLED) {
    this.$render_$($JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$);
    var $b$$60_data$$57$$ = new Uint8Array(4);
    this.$_gl$.readPixels($x$$79$$, this.$_height$ - $y$$51$$, 1, 1, this.$_gl$.RGBA, this.$_gl$.UNSIGNED_BYTE, $b$$60_data$$57$$);
    var $r$$5$$ = Math.round(10 * ($b$$60_data$$57$$[0] / 255)), $g$$3$$ = Math.round(10 * ($b$$60_data$$57$$[1] / 255)), $b$$60_data$$57$$ = Math.round(10 * ($b$$60_data$$57$$[2] / 255));
    return 100 * $r$$5$$ + 10 * $g$$3$$ + $b$$60_data$$57$$
  }
  return-1
};
$JSCompiler_prototypeAlias$$.$render_$ = function $$JSCompiler_prototypeAlias$$$$render_$$($picking$$, $invoked$$) {
  var $objects$$2_statistics$$ = this.$_objects$.$_array$, $numberOfObjects$$2$$ = $objects$$2_statistics$$.length;
  if(0 != $numberOfObjects$$2$$) {
    $picking$$ ? this.$_gl$.bindFramebuffer(this.$_gl$.FRAMEBUFFER, this.$_pickFrameBuffer$) : this.$_gl$.bindFramebuffer(this.$_gl$.FRAMEBUFFER, $JSCompiler_alias_NULL$$);
    this.$_gl$.viewport(0, 0, this.$_width$, this.$_height$);
    this.$_gl$.clear(this.$_gl$.COLOR_BUFFER_BIT | this.$_gl$.DEPTH_BUFFER_BIT);
    var $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$ = this.$_camera$.$_perspective$, $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$ = this.$_camera$.$_glView$;
    this.$_gl$.uniformMatrix4fv(this.$_uniformLocations$.get("perspective"), $JSCompiler_alias_FALSE$$, $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$);
    this.$_gl$.uniformMatrix4fv(this.$_uniformLocations$.get("view"), $JSCompiler_alias_FALSE$$, $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$);
    $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$ = this.$_center$;
    this.$_gl$.uniform3f(this.$_uniformLocations$.get("center"), parseFloat($aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$[0]), parseFloat($aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$[1]), parseFloat($aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$[2]));
    $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$ = this.$_topLevelObjects$.length;
    for($aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$ = 0;$aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$ < $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$;++$aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$) {
      var $aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$ = this.$_topLevelObjects$[$aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$];
      if($aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$ instanceof $X$volume$$) {
        var $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = new $goog$math$Vec3$$(1, 0, 0), $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = this.$_camera$.view().$multiplyByVector$($centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$), $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$ = 
        $goog$math$Vec3$distance$$(this.$_camera$.$_position$, $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$), $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = new $goog$math$Vec3$$(-1, 0, 0), $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = 
        this.$_camera$.view().$multiplyByVector$($centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$), $_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$ = $goog$math$Vec3$distance$$(this.$_camera$.$_position$, $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$), $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = 
        new $goog$math$Vec3$$(0, 1, 0), $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = this.$_camera$.view().$multiplyByVector$($centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$), $aTexturePosition_distanceFromEyeY$$inline_537_firstSlice$$inline_551$$ = $goog$math$Vec3$distance$$(this.$_camera$.$_position$, $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$), 
        $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = new $goog$math$Vec3$$(0, -1, 0), $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = this.$_camera$.view().$multiplyByVector$($centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$), $aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$ = 
        $goog$math$Vec3$distance$$(this.$_camera$.$_position$, $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$), $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = new $goog$math$Vec3$$(0, 0, 1), $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = 
        this.$_camera$.view().$multiplyByVector$($centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$), $distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$ = $goog$math$Vec3$distance$$(this.$_camera$.$_position$, $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$), $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = 
        new $goog$math$Vec3$$(0, 0, -1), $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = this.$_camera$.view().$multiplyByVector$($centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$), $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = $goog$math$Vec3$distance$$(this.$_camera$.$_position$, 
        $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$), $maxDistance$$inline_541_uObjectColor$$ = Math.max($_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$, $aTexturePosition_distanceFromEyeY$$inline_537_firstSlice$$inline_551$$, $distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$, $_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$, 
        $aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$, $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$);
        $maxDistance$$inline_541_uObjectColor$$ == $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$ || $maxDistance$$inline_541_uObjectColor$$ == $_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$ ? $JSCompiler_StaticMethods_volumeRendering_$$($aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$, 0) : $maxDistance$$inline_541_uObjectColor$$ == $aTexturePosition_distanceFromEyeY$$inline_537_firstSlice$$inline_551$$ || 
        $maxDistance$$inline_541_uObjectColor$$ == $aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$ ? $JSCompiler_StaticMethods_volumeRendering_$$($aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$, 1) : ($maxDistance$$inline_541_uObjectColor$$ == $distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$ || $maxDistance$$inline_541_uObjectColor$$ == $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$) && 
        $JSCompiler_StaticMethods_volumeRendering_$$($aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$, 2)
      }
    }
    if(this.config.ORDERING_ENABLED) {
      $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$ = $JSCompiler_alias_FALSE$$;
      $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$ = this.$_topLevelObjects$;
      $aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$ = $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$.length - 1;
      do {
        if($aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$ = $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$[$aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$], $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$ instanceof $X$volume$$ && $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$._volumeRendering) {
          $_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.$_volumeRenderingDirection$;
          $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.$_slicesX$.children();
          1 == $_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$ ? $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.$_slicesY$.children() : 2 == $_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$ && ($_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$ = 
          $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.$_slicesZ$.children());
          $_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$ = $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$.length;
          $aTexturePosition_distanceFromEyeY$$inline_537_firstSlice$$inline_551$$ = $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$[0];
          $aTexturePosition_distanceFromEyeY$$inline_537_firstSlice$$inline_551$$.$_distance$ = $JSCompiler_StaticMethods_distanceToEye_$$(this, $aTexturePosition_distanceFromEyeY$$inline_537_firstSlice$$inline_551$$);
          $aTexturePosition_distanceFromEyeY$$inline_537_firstSlice$$inline_551$$._opacity = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$._opacity;
          $aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$ = $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$[$_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$ - 1];
          $aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$.$_distance$ = $JSCompiler_StaticMethods_distanceToEye_$$(this, $aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$);
          $aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$._opacity = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$._opacity;
          $aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$ = Math.round(1E3 * (($aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$.$_distance$ - $aTexturePosition_distanceFromEyeY$$inline_537_firstSlice$$inline_551$$.$_distance$) / $_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$)) / 1E3;
          for($distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$ = $distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$ = 1;$distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$ < $_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$ - 1;$distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$++) {
            $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = Math.round(1E3 * ($aTexturePosition_distanceFromEyeY$$inline_537_firstSlice$$inline_551$$.$_distance$ + $distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$ * $aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$)) / 1E3, $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$[$distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$].$_distance$ = 
            $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$, $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$[$distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$]._opacity = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$._opacity
          }
          $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$ = $JSCompiler_alias_TRUE$$
        }
      }while($aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$--);
      $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$ = this.$_objects$.$_array$;
      $aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$ = $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$.length - 1;
      do {
        if($aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$ = $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$[$aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$], $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$._visible && !(1 == $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$._opacity || $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$ instanceof 
        $X$slice$$)) {
          $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.$_distance$ = $JSCompiler_StaticMethods_distanceToEye_$$(this, $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$), $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$ = $JSCompiler_alias_TRUE$$
        }
      }while($aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$--);
      $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$ && this.$_objects$.sort()
    }
    if($objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$ = !$picking$$ && $goog$isDefAndNotNull$$($invoked$$) && $invoked$$ && this.config.STATISTICS_ENABLED) {
      var $verticesCounter$$ = 0, $trianglesCounter$$ = 0, $linesCounter$$ = 0, $pointsCounter$$ = 0
    }
    var $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$ = this.$_attributePointers$, $aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("vertexPosition"), $_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("vertexNormal"), $_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$ = 
    $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("vertexColor"), $aTexturePosition_distanceFromEyeY$$inline_537_firstSlice$$inline_551$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("vertexTexturePos"), $aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("vertexScalar"), $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$ = 
    this.$_uniformLocations$, $distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("usePicking"), $centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("useObjectColor"), $maxDistance$$inline_541_uObjectColor$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("objectColor"), 
    $uUseScalars$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("useScalars"), $uScalarsReplaceMode$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("scalarsReplaceMode"), $uScalarsMin$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("scalarsMin"), $uScalarsMax$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("scalarsMax"), $uScalarsMinColor$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("scalarsMinColor"), 
    $uScalarsMaxColor$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("scalarsMaxColor"), $uScalarsMinThreshold$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("scalarsMinThreshold"), $uScalarsMaxThreshold$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("scalarsMaxThreshold"), $uObjectOpacity$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("objectOpacity"), 
    $uLabelMapOpacity$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("labelMapOpacity"), $uUseTexture$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("useTexture"), $uUseTextureThreshold$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("useTextureThreshold"), $uUseLabelMapTexture$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("useLabelMapTexture"), 
    $uTextureSampler$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("textureSampler"), $uTextureSampler2$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("textureSampler2"), $uVolumeLowerThreshold$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("volumeLowerThreshold"), $uVolumeUpperThreshold$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("volumeUpperThreshold"), 
    $uVolumeScalarMin$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("volumeScalarMin"), $uVolumeScalarMax$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("volumeScalarMax"), $uObjectTransform$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("objectTransform"), $uPointSize$$ = $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$.get("pointSize"), $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$ = 
    $numberOfObjects$$2$$;
    do {
      var $object$$46$$ = $objects$$2_statistics$$[$numberOfObjects$$2$$ - $aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$];
      if($object$$46$$) {
        var $drawMode_labelMapTextureID_pointSize_volume$$4$$ = $JSCompiler_alias_NULL$$;
        $object$$46$$ instanceof $X$slice$$ && $object$$46$$.$_volume$ && ($drawMode_labelMapTextureID_pointSize_volume$$4$$ = $object$$46$$.$_volume$);
        if($object$$46$$._visible && (!$drawMode_labelMapTextureID_pointSize_volume$$4$$ || $drawMode_labelMapTextureID_pointSize_volume$$4$$._visible)) {
          var $id$$14_minColor$$1$$ = $object$$46$$._id, $magicMode$$1_maxColor$$1$$ = $object$$46$$._magicMode, $vertexBuffer$$1$$ = this.$_vertexBuffers$.get($id$$14_minColor$$1$$), $normalBuffer$$1_objectColor_r$$6_useObjectColor$$ = this.$_normalBuffers$.get($id$$14_minColor$$1$$), $colorBuffer$$1_g$$4$$ = this.$_colorBuffers$.get($id$$14_minColor$$1$$), $labelMap$$1_scalarBuffer$$1_scalarRange$$ = this.$_scalarBuffers$.get($id$$14_minColor$$1$$), $texturePositionBuffer$$1$$ = this.$_texturePositionBuffers$.get($id$$14_minColor$$1$$);
          this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $vertexBuffer$$1$$.$_glBuffer$);
          this.$_gl$.vertexAttribPointer($aPosition_i$$inline_557_t$$inline_546_topLevelObject_volume$$inline_532$$, $vertexBuffer$$1$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0);
          this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $normalBuffer$$1_objectColor_r$$6_useObjectColor$$.$_glBuffer$);
          this.$_gl$.vertexAttribPointer($_slices$$inline_549_aNormal_distanceFromEyeX$$inline_535_reSortRequired$$inline_544$$, $normalBuffer$$1_objectColor_r$$6_useObjectColor$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0);
          $picking$$ ? this.$_gl$.uniform1i($distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$, $JSCompiler_alias_TRUE$$) : this.$_gl$.uniform1i($distanceFromEyeZ$$inline_539_s$$inline_554_uUsePicking$$, $JSCompiler_alias_FALSE$$);
          $colorBuffer$$1_g$$4$$ && !$picking$$ && !$magicMode$$1_maxColor$$1$$ ? (this.$_gl$.uniform1i($centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$, $JSCompiler_alias_FALSE$$), this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $colorBuffer$$1_g$$4$$.$_glBuffer$), this.$_gl$.vertexAttribPointer($_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$, $colorBuffer$$1_g$$4$$.$_itemSize$, 
          this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0)) : ($normalBuffer$$1_objectColor_r$$6_useObjectColor$$ = 1, $magicMode$$1_maxColor$$1$$ && !$picking$$ && ($normalBuffer$$1_objectColor_r$$6_useObjectColor$$ = 0), this.$_gl$.uniform1i($centroidVector$$inline_533_currentDistance$$inline_555_distanceFromEyeZ2$$inline_540_realCentroidVector$$inline_534_uUseObjectColor$$, $normalBuffer$$1_objectColor_r$$6_useObjectColor$$), $normalBuffer$$1_objectColor_r$$6_useObjectColor$$ = $object$$46$$._color, 
          $picking$$ && (999 < $id$$14_minColor$$1$$ && $JSCompiler_alias_THROW$$(Error("Id out of bounds.")), $normalBuffer$$1_objectColor_r$$6_useObjectColor$$ = Math.floor(0.01 * $id$$14_minColor$$1$$), $colorBuffer$$1_g$$4$$ = Math.floor(0.1 * $id$$14_minColor$$1$$) - 10 * $normalBuffer$$1_objectColor_r$$6_useObjectColor$$, $normalBuffer$$1_objectColor_r$$6_useObjectColor$$ = [$normalBuffer$$1_objectColor_r$$6_useObjectColor$$ / 10, $colorBuffer$$1_g$$4$$ / 10, ($id$$14_minColor$$1$$ - 100 * 
          $normalBuffer$$1_objectColor_r$$6_useObjectColor$$ - 10 * $colorBuffer$$1_g$$4$$) / 10]), this.$_gl$.uniform3f($maxDistance$$inline_541_uObjectColor$$, parseFloat($normalBuffer$$1_objectColor_r$$6_useObjectColor$$[0]), parseFloat($normalBuffer$$1_objectColor_r$$6_useObjectColor$$[1]), parseFloat($normalBuffer$$1_objectColor_r$$6_useObjectColor$$[2])), this.$_gl$.vertexAttribPointer($_volumeRenderingDirection$$inline_548_aColor_distanceFromEyeX2$$inline_536_numberOfSlices$$inline_550$$, 
          $vertexBuffer$$1$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0));
          $labelMap$$1_scalarBuffer$$1_scalarRange$$ && !$picking$$ && !$magicMode$$1_maxColor$$1$$ ? (this.$_gl$.uniform1i($uUseScalars$$, $JSCompiler_alias_TRUE$$), this.$_gl$.uniform1i($uScalarsReplaceMode$$, $object$$46$$.$_scalars$.$_replaceMode$), $id$$14_minColor$$1$$ = $object$$46$$.$_scalars$._minColor, $magicMode$$1_maxColor$$1$$ = $object$$46$$.$_scalars$._maxColor, this.$_gl$.uniform3f($uScalarsMinColor$$, parseFloat($id$$14_minColor$$1$$[0]), parseFloat($id$$14_minColor$$1$$[1]), parseFloat($id$$14_minColor$$1$$[2])), 
          this.$_gl$.uniform3f($uScalarsMaxColor$$, parseFloat($magicMode$$1_maxColor$$1$$[0]), parseFloat($magicMode$$1_maxColor$$1$$[1]), parseFloat($magicMode$$1_maxColor$$1$$[2])), this.$_gl$.uniform1f($uScalarsMinThreshold$$, parseFloat($object$$46$$.$_scalars$._minThreshold)), this.$_gl$.uniform1f($uScalarsMaxThreshold$$, parseFloat($object$$46$$.$_scalars$._maxThreshold)), this.$_gl$.uniform1f($uScalarsMin$$, parseFloat($object$$46$$.$_scalars$.$_min$)), this.$_gl$.uniform1f($uScalarsMax$$, 
          parseFloat($object$$46$$.$_scalars$.$_max$)), this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $labelMap$$1_scalarBuffer$$1_scalarRange$$.$_glBuffer$), this.$_gl$.vertexAttribPointer($aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$, $labelMap$$1_scalarBuffer$$1_scalarRange$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0)) : (this.$_gl$.uniform1i($uUseScalars$$, $JSCompiler_alias_FALSE$$), this.$_gl$.vertexAttribPointer($aScalar_distanceFromEyeY2$$inline_538_distanceStep$$inline_553_lastSlice$$inline_552$$, 
          $vertexBuffer$$1$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0));
          this.$_gl$.uniform1f($uObjectOpacity$$, parseFloat($object$$46$$._opacity));
          $object$$46$$.$_texture$ && $texturePositionBuffer$$1$$ && !$picking$$ ? (this.$_gl$.uniform1i($uUseTexture$$, $JSCompiler_alias_TRUE$$), this.$_gl$.activeTexture(this.$_gl$.TEXTURE0), this.$_gl$.bindTexture(this.$_gl$.TEXTURE_2D, this.$_textures$.get($object$$46$$.$_texture$._id)), this.$_gl$.uniform1i($uTextureSampler$$, 0), this.$_gl$.bindBuffer(this.$_gl$.ARRAY_BUFFER, $texturePositionBuffer$$1$$.$_glBuffer$), this.$_gl$.vertexAttribPointer($aTexturePosition_distanceFromEyeY$$inline_537_firstSlice$$inline_551$$, 
          $texturePositionBuffer$$1$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0), this.$_gl$.uniform1i($uUseTextureThreshold$$, $JSCompiler_alias_FALSE$$)) : (this.$_gl$.uniform1i($uUseTexture$$, $JSCompiler_alias_FALSE$$), this.$_gl$.vertexAttribPointer($aTexturePosition_distanceFromEyeY$$inline_537_firstSlice$$inline_551$$, $vertexBuffer$$1$$.$_itemSize$, this.$_gl$.FLOAT, $JSCompiler_alias_FALSE$$, 0, 0));
          $drawMode_labelMapTextureID_pointSize_volume$$4$$ && (this.$_gl$.uniform1i($uUseTextureThreshold$$, $JSCompiler_alias_TRUE$$), this.$_gl$.uniform1f($uVolumeLowerThreshold$$, $drawMode_labelMapTextureID_pointSize_volume$$4$$._lowerThreshold), this.$_gl$.uniform1f($uVolumeUpperThreshold$$, $drawMode_labelMapTextureID_pointSize_volume$$4$$._upperThreshold), $labelMap$$1_scalarBuffer$$1_scalarRange$$ = $drawMode_labelMapTextureID_pointSize_volume$$4$$.$_scalarRange$, this.$_gl$.uniform1f($uVolumeScalarMin$$, 
          $labelMap$$1_scalarBuffer$$1_scalarRange$$[0]), this.$_gl$.uniform1f($uVolumeScalarMax$$, $labelMap$$1_scalarBuffer$$1_scalarRange$$[1]), $labelMap$$1_scalarBuffer$$1_scalarRange$$ = $drawMode_labelMapTextureID_pointSize_volume$$4$$.$_labelMap$, this.$_gl$.uniform1i($uUseLabelMapTexture$$, $JSCompiler_alias_FALSE$$), $drawMode_labelMapTextureID_pointSize_volume$$4$$._volumeRendering ? this.$_gl$.uniform1f($uObjectOpacity$$, parseFloat($drawMode_labelMapTextureID_pointSize_volume$$4$$._opacity)) : 
          $labelMap$$1_scalarBuffer$$1_scalarRange$$ && $labelMap$$1_scalarBuffer$$1_scalarRange$$._visible && ($drawMode_labelMapTextureID_pointSize_volume$$4$$ = $object$$46$$.$_labelMap$._id, this.$_gl$.uniform1i($uUseLabelMapTexture$$, $JSCompiler_alias_TRUE$$), this.$_gl$.activeTexture(this.$_gl$.TEXTURE1), this.$_gl$.bindTexture(this.$_gl$.TEXTURE_2D, this.$_textures$.get($drawMode_labelMapTextureID_pointSize_volume$$4$$)), this.$_gl$.uniform1i($uTextureSampler2$$, 1), this.$_gl$.uniform1f($uLabelMapOpacity$$, 
          $labelMap$$1_scalarBuffer$$1_scalarRange$$._opacity)));
          this.$_gl$.uniformMatrix4fv($uObjectTransform$$, $JSCompiler_alias_FALSE$$, $object$$46$$.$_transform$.$_glMatrix$);
          $drawMode_labelMapTextureID_pointSize_volume$$4$$ = 1;
          "POINTS" == $object$$46$$._type && ($drawMode_labelMapTextureID_pointSize_volume$$4$$ = $object$$46$$._pointSize);
          this.$_gl$.uniform1f($uPointSize$$, $drawMode_labelMapTextureID_pointSize_volume$$4$$);
          $drawMode_labelMapTextureID_pointSize_volume$$4$$ = -1;
          $object$$46$$.type() == $X$object$types$TRIANGLES$$ ? ($drawMode_labelMapTextureID_pointSize_volume$$4$$ = this.$_gl$.TRIANGLES, $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$ && ($trianglesCounter$$ += $vertexBuffer$$1$$.$_itemCount$ / 3)) : "LINES" == $object$$46$$.type() ? (this.$_gl$.lineWidth($object$$46$$.lineWidth()), $drawMode_labelMapTextureID_pointSize_volume$$4$$ = this.$_gl$.LINES, $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$ && 
          ($linesCounter$$ += $vertexBuffer$$1$$.$_itemCount$ / 2)) : "POINTS" == $object$$46$$.type() ? ($drawMode_labelMapTextureID_pointSize_volume$$4$$ = this.$_gl$.POINTS, $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$ && ($pointsCounter$$ += $vertexBuffer$$1$$.$_itemCount$)) : "TRIANGLE_STRIPS" == $object$$46$$.type() ? ($drawMode_labelMapTextureID_pointSize_volume$$4$$ = this.$_gl$.TRIANGLE_STRIP, $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$ && 
          ($trianglesCounter$$ += $vertexBuffer$$1$$.$_itemCount$ / 3)) : "POLYGONS" == $object$$46$$.type() && ($drawMode_labelMapTextureID_pointSize_volume$$4$$ = 0 == $vertexBuffer$$1$$.$_itemCount$ % 3 ? this.$_gl$.TRIANGLES : this.$_gl$.TRIANGLE_FAN, $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$ && ($trianglesCounter$$ += $vertexBuffer$$1$$.$_itemCount$ / 3));
          $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$ && ($verticesCounter$$ += $vertexBuffer$$1$$.$_itemCount$);
          this.$_gl$.drawArrays($drawMode_labelMapTextureID_pointSize_volume$$4$$, 0, $vertexBuffer$$1$$.$_itemCount$)
        }
      }
    }while(--$aPointers_center$$2_i$$175_object$$inline_547_perspectiveMatrix_uLocations$$);
    $objects$$inline_556_statisticsEnabled_topLevelObjects$$inline_545_topLevelObjectsLength_viewMatrix$$ && ($objects$$2_statistics$$ = "Objects: " + $numberOfObjects$$2$$ + " | " + ("Vertices: " + $verticesCounter$$ + " | ") + ("Triangles: " + Math.round($trianglesCounter$$) + " | "), $objects$$2_statistics$$ = $objects$$2_statistics$$ + ("Lines: " + $linesCounter$$ + " | ") + ("Points: " + $pointsCounter$$ + " | ") + ("Textures: " + this.$_textures$.$getCount$()), window.console.log($objects$$2_statistics$$))
  }
};
$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  this.$_objects$.clear();
  delete this.$_objects$;
  this.$_topLevelObjects$.length = 0;
  delete this.$_topLevelObjects$;
  this.$_shaders$ = $JSCompiler_alias_NULL$$;
  delete this.$_shaders$;
  this.$_loader$ = $JSCompiler_alias_NULL$$;
  delete this.$_loader$;
  this.$_camera$ = $JSCompiler_alias_NULL$$;
  delete this.$_camera$;
  this.$_interactor$ = $JSCompiler_alias_NULL$$;
  delete this.$_interactor$;
  this.$_gl$.clear(this.$_gl$.COLOR_BUFFER_BIT | this.$_gl$.DEPTH_BUFFER_BIT);
  this.$_gl$ = $JSCompiler_alias_NULL$$;
  delete this.$_gl$;
  $goog$dom$removeNode$$(this.$_canvas$);
  delete this.$_canvas$
};
$goog$exportSymbol$$("X.renderer", $X$renderer$$);
$goog$exportSymbol$$("X.renderer.prototype.width", $X$renderer$$.prototype.width);
$goog$exportSymbol$$("X.renderer.prototype.height", $X$renderer$$.prototype.height);
$goog$exportSymbol$$("X.renderer.prototype.canvas", $X$renderer$$.prototype.canvas);
$goog$exportSymbol$$("X.renderer.prototype.container", $X$renderer$$.prototype.$container$);
$goog$exportSymbol$$("X.renderer.prototype.camera", $X$renderer$$.prototype.$camera$);
$goog$exportSymbol$$("X.renderer.prototype.interactor", $X$renderer$$.prototype.$interactor$);
$goog$exportSymbol$$("X.renderer.prototype.resetBoundingBox", $X$renderer$$.prototype.$resetBoundingBox$);
$goog$exportSymbol$$("X.renderer.prototype.resetViewAndRender", $X$renderer$$.prototype.$resetViewAndRender$);
$goog$exportSymbol$$("X.renderer.prototype.init", $X$renderer$$.prototype.$init$);
$goog$exportSymbol$$("X.renderer.prototype.add", $X$renderer$$.prototype.add);
$goog$exportSymbol$$("X.renderer.prototype.onShowtime", $X$renderer$$.prototype.$onShowtime$);
$goog$exportSymbol$$("X.renderer.prototype.get", $X$renderer$$.prototype.get);
$goog$exportSymbol$$("X.renderer.prototype.pick", $X$renderer$$.prototype.$pick$);
$goog$exportSymbol$$("X.renderer.prototype.render", $X$renderer$$.prototype.$render$);
$goog$exportSymbol$$("X.renderer.prototype.destroy", $X$renderer$$.prototype.$destroy$);
function $CSG$sphere$$($options$$2_stacks$$) {
  function $vertex$$1$$($theta$$1$$, $phi$$1$$) {
    var $theta$$1$$ = $theta$$1$$ * 2 * Math.PI, $phi$$1$$ = $phi$$1$$ * Math.PI, $dir$$ = new $csgVector$$(Math.cos($theta$$1$$) * Math.sin($phi$$1$$), Math.cos($phi$$1$$), Math.sin($theta$$1$$) * Math.sin($phi$$1$$));
    $vertices$$4$$.push(new $csgVertex$$($c$$13$$.$plus$($dir$$.$times$($r$$7$$)), $dir$$))
  }
  this.$polygons_$ = [];
  for(var $options$$2_stacks$$ = $options$$2_stacks$$ || {}, $c$$13$$ = new $csgVector$$($options$$2_stacks$$.$center$ || [0, 0, 0]), $r$$7$$ = $options$$2_stacks$$.$radius$ || 1, $slices$$2$$ = $options$$2_stacks$$.$slices$ || 16, $options$$2_stacks$$ = $options$$2_stacks$$.$stacks$ || 8, $polygons$$7$$ = [], $vertices$$4$$, $i$$176$$ = 0;$i$$176$$ < $slices$$2$$;$i$$176$$++) {
    for(var $j$$35$$ = 0;$j$$35$$ < $options$$2_stacks$$;$j$$35$$++) {
      $vertices$$4$$ = [], $vertex$$1$$($i$$176$$ / $slices$$2$$, $j$$35$$ / $options$$2_stacks$$), 0 < $j$$35$$ && $vertex$$1$$(($i$$176$$ + 1) / $slices$$2$$, $j$$35$$ / $options$$2_stacks$$), $j$$35$$ < $options$$2_stacks$$ - 1 && $vertex$$1$$(($i$$176$$ + 1) / $slices$$2$$, ($j$$35$$ + 1) / $options$$2_stacks$$), $vertex$$1$$($i$$176$$ / $slices$$2$$, ($j$$35$$ + 1) / $options$$2_stacks$$), $polygons$$7$$.push(new $csgPolygon$$($vertices$$4$$))
    }
  }
  return $CSG$fromPolygons$$($polygons$$7$$)
}
$goog$inherits$$($CSG$sphere$$, $CSG$$);
$goog$exportSymbol$$("CSG.sphere", $CSG$sphere$$);
function $X$sphere$$($center$$3$$, $radius$$4$$) {
  (!$goog$isDefAndNotNull$$($center$$3$$) || !($center$$3$$ instanceof Array) || 3 != $center$$3$$.length) && $JSCompiler_alias_THROW$$(Error("Invalid center."));
  $goog$isNumber$$($radius$$4$$) || $JSCompiler_alias_THROW$$(Error("Invalid radius."));
  $X$object$$.call(this);
  this._className = "Sphere";
  this.$_center$ = $center$$3$$;
  this.$_radius$ = $radius$$4$$;
  this.$_slices$ = 32;
  this.$_stacks$ = 16;
  this.$create_$()
}
$goog$inherits$$($X$sphere$$, $X$object$$);
$X$sphere$$.prototype.$create_$ = function $$X$sphere$$$$$create_$$() {
  $JSCompiler_StaticMethods_fromCSG$$(this, new $CSG$sphere$$({$center$:this.$_center$, $radius$:this.$_radius$, $slices$:this.$_slices$, $stacks$:this.$_stacks$}))
};
$goog$exportSymbol$$("X.sphere", $X$sphere$$);
function $CSG$cylinder$$($options$$3_slices$$3$$) {
  function $point$$($pos$$8_stack$$1$$, $angle$$11_out_slice$$2$$, $normal$$3_normalBlend$$) {
    $angle$$11_out_slice$$2$$ = 2 * $angle$$11_out_slice$$2$$ * Math.PI;
    $angle$$11_out_slice$$2$$ = $axisX$$.$times$(Math.cos($angle$$11_out_slice$$2$$)).$plus$($axisY$$.$times$(Math.sin($angle$$11_out_slice$$2$$)));
    $pos$$8_stack$$1$$ = $s$$28$$.$plus$($ray$$.$times$($pos$$8_stack$$1$$)).$plus$($angle$$11_out_slice$$2$$.$times$($r$$8$$));
    $normal$$3_normalBlend$$ = $angle$$11_out_slice$$2$$.$times$(1 - Math.abs($normal$$3_normalBlend$$)).$plus$($axisZ$$.$times$($normal$$3_normalBlend$$));
    return new $csgVertex$$($pos$$8_stack$$1$$, $normal$$3_normalBlend$$)
  }
  this.$polygons_$ = [];
  for(var $options$$3_slices$$3$$ = $options$$3_slices$$3$$ || {}, $s$$28$$ = new $csgVector$$($options$$3_slices$$3$$.start || [0, -1, 0]), $e$$51_end$$6$$ = new $csgVector$$($options$$3_slices$$3$$.end || [0, 1, 0]), $ray$$ = $e$$51_end$$6$$.$minus$($s$$28$$), $r$$8$$ = $options$$3_slices$$3$$.$radius$ || 1, $options$$3_slices$$3$$ = $options$$3_slices$$3$$.$slices$ || 16, $axisZ$$ = $ray$$.$unit$(), $isY_start$$8$$ = 0.5 < Math.abs($axisZ$$.y()), $axisX$$ = (new $csgVector$$($isY_start$$8$$, !$isY_start$$8$$, 
  0)).$cross$($axisZ$$).$unit$(), $axisY$$ = $axisX$$.$cross$($axisZ$$).$unit$(), $isY_start$$8$$ = new $csgVertex$$($s$$28$$, $axisZ$$.$negated$()), $e$$51_end$$6$$ = new $csgVertex$$($e$$51_end$$6$$, $axisZ$$.$unit$()), $polygons$$8$$ = [], $i$$177$$ = 0;$i$$177$$ < $options$$3_slices$$3$$;$i$$177$$++) {
    var $t0$$ = $i$$177$$ / $options$$3_slices$$3$$, $t1$$ = ($i$$177$$ + 1) / $options$$3_slices$$3$$;
    $polygons$$8$$.push(new $csgPolygon$$([$isY_start$$8$$, $point$$(0, $t0$$, -1), $point$$(0, $t1$$, -1)]));
    $polygons$$8$$.push(new $csgPolygon$$([$point$$(0, $t1$$, 0), $point$$(0, $t0$$, 0), $point$$(1, $t0$$, 0), $point$$(1, $t1$$, 0)]));
    $polygons$$8$$.push(new $csgPolygon$$([$e$$51_end$$6$$, $point$$(1, $t1$$, 1), $point$$(1, $t0$$, 1)]))
  }
  return $CSG$fromPolygons$$($polygons$$8$$)
}
$goog$inherits$$($CSG$cylinder$$, $CSG$$);
$goog$exportSymbol$$("CSG.cylinder", $CSG$cylinder$$);
function $X$cylinder$$($start$$9$$, $end$$7$$, $radius$$5$$) {
  (!$goog$isDefAndNotNull$$($start$$9$$) || !($start$$9$$ instanceof Array) || 3 != $start$$9$$.length) && $JSCompiler_alias_THROW$$(Error("Invalid start position."));
  (!$goog$isDefAndNotNull$$($end$$7$$) || !($end$$7$$ instanceof Array) || 3 != $end$$7$$.length) && $JSCompiler_alias_THROW$$(Error("Invalid end position."));
  $goog$isNumber$$($radius$$5$$) || $JSCompiler_alias_THROW$$(Error("Invalid radius."));
  $X$object$$.call(this);
  this._className = "cylinder";
  this.$_start$ = $start$$9$$;
  this.$_end$ = $end$$7$$;
  this.$_radius$ = $radius$$5$$;
  this.$_slices$ = 32;
  this.$create_$()
}
$goog$inherits$$($X$cylinder$$, $X$object$$);
$X$cylinder$$.prototype.$create_$ = function $$X$cylinder$$$$$create_$$() {
  $JSCompiler_StaticMethods_fromCSG$$(this, new $CSG$cylinder$$({start:this.$_start$, end:this.$_end$, $radius$:this.$_radius$, $slices$:this.$_slices$}))
};
$goog$exportSymbol$$("X.cylinder", $X$cylinder$$);
function $CSG$cube$$($options$$4$$) {
  this.$polygons_$ = [];
  var $options$$4$$ = $options$$4$$ || {}, $c$$14$$ = new $csgVector$$($options$$4$$.$center$ || [0, 0, 0]), $r$$9$$ = !$options$$4$$.$radius$ ? [1, 1, 1] : $options$$4$$.$radius$.length ? $options$$4$$.$radius$ : [$options$$4$$.$radius$, $options$$4$$.$radius$, $options$$4$$.$radius$];
  return $CSG$fromPolygons$$([[[0, 4, 6, 2], [-1, 0, 0]], [[1, 3, 7, 5], [1, 0, 0]], [[0, 1, 5, 4], [0, -1, 0]], [[2, 6, 7, 3], [0, 1, 0]], [[0, 2, 3, 1], [0, 0, -1]], [[4, 5, 7, 6], [0, 0, 1]]].map(function($info$$1$$) {
    return new $csgPolygon$$($info$$1$$[0].map(function($i$$178_pos$$9$$) {
      $i$$178_pos$$9$$ = new $csgVector$$($c$$14$$.x() + $r$$9$$[0] * (2 * !!($i$$178_pos$$9$$ & 1) - 1), $c$$14$$.y() + $r$$9$$[1] * (2 * !!($i$$178_pos$$9$$ & 2) - 1), $c$$14$$.$z$() + $r$$9$$[2] * (2 * !!($i$$178_pos$$9$$ & 4) - 1));
      return new $csgVertex$$($i$$178_pos$$9$$, new $csgVector$$($info$$1$$[1]))
    }))
  }))
}
$goog$inherits$$($CSG$cube$$, $CSG$$);
$goog$exportSymbol$$("CSG.cube", $CSG$cube$$);
function $X$cube$$($center$$4$$, $radiusX$$, $radiusY$$, $radiusZ$$) {
  (!$goog$isDefAndNotNull$$($center$$4$$) || !($center$$4$$ instanceof Array) || 3 != $center$$4$$.length) && $JSCompiler_alias_THROW$$(Error("Invalid center."));
  (!$goog$isNumber$$($radiusX$$) || !$goog$isNumber$$($radiusY$$) || !$goog$isNumber$$($radiusZ$$)) && $JSCompiler_alias_THROW$$(Error("Invalid radii."));
  $X$object$$.call(this);
  this._className = "cube";
  this.$_center$ = $center$$4$$;
  this.$_radiusX$ = $radiusX$$;
  this.$_radiusY$ = $radiusY$$;
  this.$_radiusZ$ = $radiusZ$$;
  this.$_textureCoordinateMap$ = [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0];
  this.$create_$()
}
$goog$inherits$$($X$cube$$, $X$object$$);
$X$cube$$.prototype.$create_$ = function $$X$cube$$$$$create_$$() {
  $JSCompiler_StaticMethods_fromCSG$$(this, new $CSG$cube$$({$center$:this.$_center$, $radius$:[this.$_radiusX$, this.$_radiusY$, this.$_radiusZ$]}))
};
$goog$exportSymbol$$("X.cube", $X$cube$$);
function $X$renderer2D$$($_container$$1_container$$2$$) {
  $goog$isDefAndNotNull$$($_container$$1_container$$2$$) || $JSCompiler_alias_THROW$$(Error("An ID to a valid container (<div>..) is required."));
  $_container$$1_container$$2$$ = $goog$dom$getElement$$($_container$$1_container$$2$$);
  (!($goog$isObject$$($_container$$1_container$$2$$) && 1 == $_container$$1_container$$2$$.nodeType) || 0 == $_container$$1_container$$2$$.clientWidth || 0 == $_container$$1_container$$2$$.clientHeight) && $JSCompiler_alias_THROW$$(Error("Could not find the given container or it has an undefined size."));
  $X$base$$.call(this);
  this._className = "renderer2D";
  this.container = $_container$$1_container$$2$$;
  this.width = this.container.clientWidth;
  this.height = this.container.clientHeight;
  this.canvas = $JSCompiler_alias_NULL$$;
  this.$_objects$ = new $X$array$$($X$object$OPACITY_COMPARATOR$$);
  this.$_topLevelObjects$ = [];
  this.$_loader$ = $JSCompiler_alias_NULL$$;
  this.initialLoadingCompleted = $JSCompiler_alias_FALSE$$;
  this.$_context$ = this.$_progressBar$ = $JSCompiler_alias_NULL$$;
  window.window.console.log("XTK Release 4 -- 04/12/12 -- http://www.goXTK.com")
}
$goog$inherits$$($X$renderer2D$$, $X$base$$);
$JSCompiler_prototypeAlias$$ = $X$renderer2D$$.prototype;
$JSCompiler_prototypeAlias$$.$onModified$ = function $$JSCompiler_prototypeAlias$$$$onModified$$($event$$31$$) {
  $goog$isDefAndNotNull$$($event$$31$$) && $event$$31$$ instanceof $X$event$ModifiedEvent$$ && this.$update_$($event$$31$$.$_object$)
};
$JSCompiler_prototypeAlias$$.$init$ = function $$JSCompiler_prototypeAlias$$$$init$$() {
  var $canvas$$1$$ = $goog$dom$createDom$$("canvas");
  $canvas$$1$$.width = this.width;
  $canvas$$1$$.height = this.height;
  this.container.appendChild($canvas$$1$$);
  try {
    var $context$$ = $canvas$$1$$.getContext("2d");
    $context$$ || $JSCompiler_alias_THROW$$(Error())
  }catch($e$$52$$) {
    this.$container$().innerHTML = '<h3 style="color:red;font-family:sans-serif;">Oooops..</h3><p style="color:red;font-family:sans-serif;">Sorry, Canvas is <strong>not supported</strong> on this machine! See <a href="http://crash.goXTK.com" target="_blank">http://crash.goXTK.com</a> for requirements..</p>', $JSCompiler_alias_THROW$$(Error('Sorry, Canvas is <strong>not supported</strong> on this machine! See <a href="http://crash.goXTK.com" target="_blank">http://crash.goXTK.com</a> for requirements..'))
  }
  this.$_loader$ = new $X$loader$$;
  this.canvas = $canvas$$1$$;
  this.$_context$ = $context$$
};
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($object$$47$$) {
  this.$_topLevelObjects$.push($object$$47$$);
  this.$update_$($object$$47$$)
};
$JSCompiler_prototypeAlias$$.$update_$ = function $$JSCompiler_prototypeAlias$$$$update_$$($object$$48$$) {
  (!$goog$isDefAndNotNull$$(this.canvas) || !$goog$isDefAndNotNull$$(this.$_context$)) && $JSCompiler_alias_THROW$$(Error("Renderer was not initialized properly."));
  $goog$isDefAndNotNull$$($object$$48$$) || (window.window.console.log($object$$48$$), $JSCompiler_alias_THROW$$(Error("Illegal object.")));
  $goog$events$hasListener$$($object$$48$$) || $goog$events$listen$$($object$$48$$, $X$event$events$MODIFIED$$, this.$onModified$.bind(this));
  window.console.log("updating..");
  var $file$$4$$ = $object$$48$$.$_file$;
  $goog$isDefAndNotNull$$($file$$4$$) && $file$$4$$.$_dirty$ ? $JSCompiler_StaticMethods_loadFile$$(this.$_loader$, $object$$48$$) : window.console.log("updating done", $object$$48$$)
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$() {
  var $_pixels$$ = this.$_context$.getImageData(0, 0, this.width, this.height), $children_$$ = this.$_topLevelObjects$[0].$_slicesX$.children(), $x$$80$$ = 0;
  setInterval(function() {
    $x$$80$$++;
    $x$$80$$ >= $children_$$.length && ($x$$80$$ = 0);
    for(var $_newPixels$$ = $children_$$[$x$$80$$].$_texture$.$_rawData$, $index__$$ = 0;$index__$$ < $_pixels$$.data.length;$index__$$++) {
      $_pixels$$.data[$index__$$] = $_newPixels$$[$index__$$]
    }
    this.$_context$.putImageData($_pixels$$, 0, 0)
  }.bind(this), 10)
};
$goog$exportSymbol$$("X.renderer2D", $X$renderer2D$$);
$goog$exportSymbol$$("X.renderer2D.prototype.init", $X$renderer2D$$.prototype.$init$);
$goog$exportSymbol$$("X.renderer2D.prototype.add", $X$renderer2D$$.prototype.add);
$goog$exportSymbol$$("X.renderer2D.prototype.render", $X$renderer2D$$.prototype.$render$);

