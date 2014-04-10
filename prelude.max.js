(function(){
  var toString$ = {}.toString, slice$ = [].slice;
  define(function(){
    var Func, List, Num, Obj, Str, id, isType, replicate, prelude;
    Func = function(){
      var apply, curry, flip, fix, over;
      apply = curry$(function(f, list){
        return f.apply(null, list);
      });
      curry = function(f){
        return curry$(f);
      };
      flip = curry$(function(f, x, y){
        return f(y, x);
      });
      fix = function(f){
        return function(g){
          return function(){
            return f(g(g)).apply(null, arguments);
          };
        }(function(g){
          return function(){
            return f(g(g)).apply(null, arguments);
          };
        });
      };
      over = curry$(function(f, g, x, y){
        return f(g(x), g(y));
      });
      return {
        curry: curry,
        flip: flip,
        fix: fix,
        apply: apply,
        over: over
      };
    }();
    List = function(){
      var each, map, compact, filter, reject, partition, find, head, first, tail, last, initial, empty, reverse, unique, uniqueBy, fold, foldl, fold1, foldl1, foldr, foldr1, unfoldr, concat, concatMap, flatten, difference, intersection, union, countBy, groupBy, andList, orList, any, all, sort, sortWith, sortBy, sum, product, mean, average, maximum, minimum, maximumBy, minimumBy, scan, scanl, scan1, scanl1, scanr, scanr1, slice, take, drop, splitAt, takeWhile, dropWhile, span, breakList, zip, zipWith, zipAll, zipAllWith, at, elemIndex, elemIndices, findIndex, findIndices;
      each = curry$(function(f, xs){
        var i$, len$, x;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          f(x);
        }
        return xs;
      });
      map = curry$(function(f, xs){
        var i$, len$, x, results$ = [];
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          results$.push(f(x));
        }
        return results$;
      });
      compact = function(xs){
        var i$, len$, x, results$ = [];
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          if (x) {
            results$.push(x);
          }
        }
        return results$;
      };
      filter = curry$(function(f, xs){
        var i$, len$, x, results$ = [];
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          if (f(x)) {
            results$.push(x);
          }
        }
        return results$;
      });
      reject = curry$(function(f, xs){
        var i$, len$, x, results$ = [];
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          if (!f(x)) {
            results$.push(x);
          }
        }
        return results$;
      });
      partition = curry$(function(f, xs){
        var passed, failed, i$, len$, x;
        passed = [];
        failed = [];
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          (f(x) ? passed : failed).push(x);
        }
        return [passed, failed];
      });
      find = curry$(function(f, xs){
        var i$, len$, x;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          if (f(x)) {
            return x;
          }
        }
      });
      head = first = function(xs){
        return xs[0];
      };
      tail = function(xs){
        if (!xs.length) {
          return;
        }
        return xs.slice(1);
      };
      last = function(xs){
        return xs[xs.length - 1];
      };
      initial = function(xs){
        if (!xs.length) {
          return;
        }
        return xs.slice(0, -1);
      };
      empty = function(xs){
        return !xs.length;
      };
      reverse = function(xs){
        return xs.concat().reverse();
      };
      unique = function(xs){
        var result, i$, len$, x;
        result = [];
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          if (!in$(x, result)) {
            result.push(x);
          }
        }
        return result;
      };
      uniqueBy = curry$(function(f, xs){
        var seen, i$, len$, x, val, results$ = [];
        seen = [];
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          val = f(x);
          if (in$(val, seen)) {
            continue;
          }
          seen.push(val);
          results$.push(x);
        }
        return results$;
      });
      fold = foldl = curry$(function(f, memo, xs){
        var i$, len$, x;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          memo = f(memo, x);
        }
        return memo;
      });
      fold1 = foldl1 = curry$(function(f, xs){
        return fold(f, xs[0], xs.slice(1));
      });
      foldr = curry$(function(f, memo, xs){
        var i$, x;
        for (i$ = xs.length - 1; i$ >= 0; --i$) {
          x = xs[i$];
          memo = f(x, memo);
        }
        return memo;
      });
      foldr1 = curry$(function(f, xs){
        return foldr(f, xs[xs.length - 1], xs.slice(0, -1));
      });
      unfoldr = curry$(function(f, b){
        var result, x, that;
        result = [];
        x = b;
        while ((that = f(x)) != null) {
          result.push(that[0]);
          x = that[1];
        }
        return result;
      });
      concat = function(xss){
        return [].concat.apply([], xss);
      };
      concatMap = curry$(function(f, xs){
        var x;
        return [].concat.apply([], (function(){
          var i$, ref$, len$, results$ = [];
          for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
            x = ref$[i$];
            results$.push(f(x));
          }
          return results$;
        }()));
      });
      flatten = function(xs){
        var x;
        return [].concat.apply([], (function(){
          var i$, ref$, len$, results$ = [];
          for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
            x = ref$[i$];
            if (toString$.call(x).slice(8, -1) === 'Array') {
              results$.push(flatten(x));
            } else {
              results$.push(x);
            }
          }
          return results$;
        }()));
      };
      difference = function(xs){
        var yss, results, i$, len$, x, j$, len1$, ys;
        yss = slice$.call(arguments, 1);
        results = [];
        outer: for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          for (j$ = 0, len1$ = yss.length; j$ < len1$; ++j$) {
            ys = yss[j$];
            if (in$(x, ys)) {
              continue outer;
            }
          }
          results.push(x);
        }
        return results;
      };
      intersection = function(xs){
        var yss, results, i$, len$, x, j$, len1$, ys;
        yss = slice$.call(arguments, 1);
        results = [];
        outer: for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          for (j$ = 0, len1$ = yss.length; j$ < len1$; ++j$) {
            ys = yss[j$];
            if (!in$(x, ys)) {
              continue outer;
            }
          }
          results.push(x);
        }
        return results;
      };
      union = function(){
        var xss, results, i$, len$, xs, j$, len1$, x;
        xss = slice$.call(arguments);
        results = [];
        for (i$ = 0, len$ = xss.length; i$ < len$; ++i$) {
          xs = xss[i$];
          for (j$ = 0, len1$ = xs.length; j$ < len1$; ++j$) {
            x = xs[j$];
            if (!in$(x, results)) {
              results.push(x);
            }
          }
        }
        return results;
      };
      countBy = curry$(function(f, xs){
        var results, i$, len$, x, key;
        results = {};
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          key = f(x);
          if (key in results) {
            results[key] += 1;
          } else {
            results[key] = 1;
          }
        }
        return results;
      });
      groupBy = curry$(function(f, xs){
        var results, i$, len$, x, key;
        results = {};
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          key = f(x);
          if (key in results) {
            results[key].push(x);
          } else {
            results[key] = [x];
          }
        }
        return results;
      });
      andList = function(xs){
        var i$, len$, x;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          if (!x) {
            return false;
          }
        }
        return true;
      };
      orList = function(xs){
        var i$, len$, x;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          if (x) {
            return true;
          }
        }
        return false;
      };
      any = curry$(function(f, xs){
        var i$, len$, x;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          if (f(x)) {
            return true;
          }
        }
        return false;
      });
      all = curry$(function(f, xs){
        var i$, len$, x;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          if (!f(x)) {
            return false;
          }
        }
        return true;
      });
      sort = function(xs){
        return xs.concat().sort(function(x, y){
          if (x > y) {
            return 1;
          } else if (x < y) {
            return -1;
          } else {
            return 0;
          }
        });
      };
      sortWith = curry$(function(f, xs){
        return xs.concat().sort(f);
      });
      sortBy = curry$(function(f, xs){
        return xs.concat().sort(function(x, y){
          if (f(x) > f(y)) {
            return 1;
          } else if (f(x) < f(y)) {
            return -1;
          } else {
            return 0;
          }
        });
      });
      sum = function(xs){
        var result, i$, len$, x;
        result = 0;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          result += x;
        }
        return result;
      };
      product = function(xs){
        var result, i$, len$, x;
        result = 1;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          result *= x;
        }
        return result;
      };
      mean = average = function(xs){
        var sum, i$, len$, x;
        sum = 0;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          x = xs[i$];
          sum += x;
        }
        return sum / xs.length;
      };
      maximum = function(xs){
        var max, i$, ref$, len$, x;
        max = xs[0];
        for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
          x = ref$[i$];
          if (x > max) {
            max = x;
          }
        }
        return max;
      };
      minimum = function(xs){
        var min, i$, ref$, len$, x;
        min = xs[0];
        for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
          x = ref$[i$];
          if (x < min) {
            min = x;
          }
        }
        return min;
      };
      maximumBy = curry$(function(f, xs){
        var max, i$, ref$, len$, x;
        max = xs[0];
        for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
          x = ref$[i$];
          if (f(x) > f(max)) {
            max = x;
          }
        }
        return max;
      });
      minimumBy = curry$(function(f, xs){
        var min, i$, ref$, len$, x;
        min = xs[0];
        for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
          x = ref$[i$];
          if (f(x) < f(min)) {
            min = x;
          }
        }
        return min;
      });
      scan = scanl = curry$(function(f, memo, xs){
        var last, x;
        last = memo;
        return [memo].concat((function(){
          var i$, ref$, len$, results$ = [];
          for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
            x = ref$[i$];
            results$.push(last = f(last, x));
          }
          return results$;
        }()));
      });
      scan1 = scanl1 = curry$(function(f, xs){
        if (!xs.length) {
          return;
        }
        return scan(f, xs[0], xs.slice(1));
      });
      scanr = curry$(function(f, memo, xs){
        xs = xs.concat().reverse();
        return scan(f, memo, xs).reverse();
      });
      scanr1 = curry$(function(f, xs){
        if (!xs.length) {
          return;
        }
        xs = xs.concat().reverse();
        return scan(f, xs[0], xs.slice(1)).reverse();
      });
      slice = curry$(function(x, y, xs){
        return xs.slice(x, y);
      });
      take = curry$(function(n, xs){
        if (n <= 0) {
          return xs.slice(0, 0);
        } else {
          return xs.slice(0, n);
        }
      });
      drop = curry$(function(n, xs){
        if (n <= 0) {
          return xs;
        } else {
          return xs.slice(n);
        }
      });
      splitAt = curry$(function(n, xs){
        return [take(n, xs), drop(n, xs)];
      });
      takeWhile = curry$(function(p, xs){
        var len, i;
        len = xs.length;
        if (!len) {
          return xs;
        }
        i = 0;
        while (i < len && p(xs[i])) {
          i += 1;
        }
        return xs.slice(0, i);
      });
      dropWhile = curry$(function(p, xs){
        var len, i;
        len = xs.length;
        if (!len) {
          return xs;
        }
        i = 0;
        while (i < len && p(xs[i])) {
          i += 1;
        }
        return xs.slice(i);
      });
      span = curry$(function(p, xs){
        return [takeWhile(p, xs), dropWhile(p, xs)];
      });
      breakList = curry$(function(p, xs){
        return span(function(){
          return not$(p.apply(this, arguments));
        }, xs);
      });
      zip = curry$(function(xs, ys){
        var result, len, i$, len$, i, x;
        result = [];
        len = ys.length;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          i = i$;
          x = xs[i$];
          if (i === len) {
            break;
          }
          result.push([x, ys[i]]);
        }
        return result;
      });
      zipWith = curry$(function(f, xs, ys){
        var result, len, i$, len$, i, x;
        result = [];
        len = ys.length;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          i = i$;
          x = xs[i$];
          if (i === len) {
            break;
          }
          result.push(f(x, ys[i]));
        }
        return result;
      });
      zipAll = function(){
        var xss, minLength, i$, len$, xs, ref$, i, lresult$, j$, results$ = [];
        xss = slice$.call(arguments);
        minLength = 9e9;
        for (i$ = 0, len$ = xss.length; i$ < len$; ++i$) {
          xs = xss[i$];
          minLength <= (ref$ = xs.length) || (minLength = ref$);
        }
        for (i$ = 0; i$ < minLength; ++i$) {
          i = i$;
          lresult$ = [];
          for (j$ = 0, len$ = xss.length; j$ < len$; ++j$) {
            xs = xss[j$];
            lresult$.push(xs[i]);
          }
          results$.push(lresult$);
        }
        return results$;
      };
      zipAllWith = function(f){
        var xss, minLength, i$, len$, xs, ref$, i, results$ = [];
        xss = slice$.call(arguments, 1);
        minLength = 9e9;
        for (i$ = 0, len$ = xss.length; i$ < len$; ++i$) {
          xs = xss[i$];
          minLength <= (ref$ = xs.length) || (minLength = ref$);
        }
        for (i$ = 0; i$ < minLength; ++i$) {
          i = i$;
          results$.push(f.apply(null, (fn$())));
        }
        return results$;
        function fn$(){
          var i$, ref$, len$, results$ = [];
          for (i$ = 0, len$ = (ref$ = xss).length; i$ < len$; ++i$) {
            xs = ref$[i$];
            results$.push(xs[i]);
          }
          return results$;
        }
      };
      at = curry$(function(n, xs){
        if (n < 0) {
          return xs[xs.length + n];
        } else {
          return xs[n];
        }
      });
      elemIndex = curry$(function(el, xs){
        var i$, len$, i, x;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          i = i$;
          x = xs[i$];
          if (x === el) {
            return i;
          }
        }
      });
      elemIndices = curry$(function(el, xs){
        var i$, len$, i, x, results$ = [];
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          i = i$;
          x = xs[i$];
          if (x === el) {
            results$.push(i);
          }
        }
        return results$;
      });
      findIndex = curry$(function(f, xs){
        var i$, len$, i, x;
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          i = i$;
          x = xs[i$];
          if (f(x)) {
            return i;
          }
        }
      });
      findIndices = curry$(function(f, xs){
        var i$, len$, i, x, results$ = [];
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
          i = i$;
          x = xs[i$];
          if (f(x)) {
            results$.push(i);
          }
        }
        return results$;
      });
      return {
        each: each,
        map: map,
        filter: filter,
        compact: compact,
        reject: reject,
        partition: partition,
        find: find,
        head: head,
        first: first,
        tail: tail,
        last: last,
        initial: initial,
        empty: empty,
        reverse: reverse,
        difference: difference,
        intersection: intersection,
        union: union,
        countBy: countBy,
        groupBy: groupBy,
        fold: fold,
        fold1: fold1,
        foldl: foldl,
        foldl1: foldl1,
        foldr: foldr,
        foldr1: foldr1,
        unfoldr: unfoldr,
        andList: andList,
        orList: orList,
        any: any,
        all: all,
        unique: unique,
        uniqueBy: uniqueBy,
        sort: sort,
        sortWith: sortWith,
        sortBy: sortBy,
        sum: sum,
        product: product,
        mean: mean,
        average: average,
        concat: concat,
        concatMap: concatMap,
        flatten: flatten,
        maximum: maximum,
        minimum: minimum,
        maximumBy: maximumBy,
        minimumBy: minimumBy,
        scan: scan,
        scan1: scan1,
        scanl: scanl,
        scanl1: scanl1,
        scanr: scanr,
        scanr1: scanr1,
        slice: slice,
        take: take,
        drop: drop,
        splitAt: splitAt,
        takeWhile: takeWhile,
        dropWhile: dropWhile,
        span: span,
        breakList: breakList,
        zip: zip,
        zipWith: zipWith,
        zipAll: zipAll,
        zipAllWith: zipAllWith,
        at: at,
        elemIndex: elemIndex,
        elemIndices: elemIndices,
        findIndex: findIndex,
        findIndices: findIndices
      };
    }();
    Num = function(){
      var max, min, negate, abs, signum, quot, rem, div, mod, recip, pi, tau, exp, sqrt, ln, pow, sin, tan, cos, asin, acos, atan, atan2, truncate, round, ceiling, floor, isItNaN, even, odd, gcd, lcm;
      max = curry$(function(x$, y$){
        return x$ > y$ ? x$ : y$;
      });
      min = curry$(function(x$, y$){
        return x$ < y$ ? x$ : y$;
      });
      negate = function(x){
        return -x;
      };
      abs = Math.abs;
      signum = function(x){
        if (x < 0) {
          return -1;
        } else if (x > 0) {
          return 1;
        } else {
          return 0;
        }
      };
      quot = curry$(function(x, y){
        return ~~(x / y);
      });
      rem = curry$(function(x$, y$){
        return x$ % y$;
      });
      div = curry$(function(x, y){
        return Math.floor(x / y);
      });
      mod = curry$(function(x$, y$){
        var ref$;
        return ((x$) % (ref$ = y$) + ref$) % ref$;
      });
      recip = (function(it){
        return 1 / it;
      });
      pi = Math.PI;
      tau = pi * 2;
      exp = Math.exp;
      sqrt = Math.sqrt;
      ln = Math.log;
      pow = curry$(function(x$, y$){
        return Math.pow(x$, y$);
      });
      sin = Math.sin;
      tan = Math.tan;
      cos = Math.cos;
      asin = Math.asin;
      acos = Math.acos;
      atan = Math.atan;
      atan2 = curry$(function(x, y){
        return Math.atan2(x, y);
      });
      truncate = function(x){
        return ~~x;
      };
      round = Math.round;
      ceiling = Math.ceil;
      floor = Math.floor;
      isItNaN = function(x){
        return x !== x;
      };
      even = function(x){
        return x % 2 === 0;
      };
      odd = function(x){
        return x % 2 !== 0;
      };
      gcd = curry$(function(x, y){
        var z;
        x = Math.abs(x);
        y = Math.abs(y);
        while (y !== 0) {
          z = x % y;
          x = y;
          y = z;
        }
        return x;
      });
      lcm = curry$(function(x, y){
        return Math.abs(Math.floor(x / gcd(x, y) * y));
      });
      return {
        max: max,
        min: min,
        negate: negate,
        abs: abs,
        signum: signum,
        quot: quot,
        rem: rem,
        div: div,
        mod: mod,
        recip: recip,
        pi: pi,
        tau: tau,
        exp: exp,
        sqrt: sqrt,
        ln: ln,
        pow: pow,
        sin: sin,
        tan: tan,
        cos: cos,
        acos: acos,
        asin: asin,
        atan: atan,
        atan2: atan2,
        truncate: truncate,
        round: round,
        ceiling: ceiling,
        floor: floor,
        isItNaN: isItNaN,
        even: even,
        odd: odd,
        gcd: gcd,
        lcm: lcm
      };
    }();
    Obj = function(){
      var values, keys, pairsToObj, objToPairs, listsToObj, objToLists, empty, each, map, compact, filter, reject, partition, find;
      values = function(object){
        var i$, x, results$ = [];
        for (i$ in object) {
          x = object[i$];
          results$.push(x);
        }
        return results$;
      };
      keys = function(object){
        var x, results$ = [];
        for (x in object) {
          results$.push(x);
        }
        return results$;
      };
      pairsToObj = function(object){
        var i$, len$, x, results$ = {};
        for (i$ = 0, len$ = object.length; i$ < len$; ++i$) {
          x = object[i$];
          results$[x[0]] = x[1];
        }
        return results$;
      };
      objToPairs = function(object){
        var key, value, results$ = [];
        for (key in object) {
          value = object[key];
          results$.push([key, value]);
        }
        return results$;
      };
      listsToObj = curry$(function(keys, values){
        var i$, len$, i, key, results$ = {};
        for (i$ = 0, len$ = keys.length; i$ < len$; ++i$) {
          i = i$;
          key = keys[i$];
          results$[key] = values[i];
        }
        return results$;
      });
      objToLists = function(object){
        var keys, values, key, value;
        keys = [];
        values = [];
        for (key in object) {
          value = object[key];
          keys.push(key);
          values.push(value);
        }
        return [keys, values];
      };
      empty = function(object){
        var x;
        for (x in object) {
          return false;
        }
        return true;
      };
      each = curry$(function(f, object){
        var k, x;
        for (k in object) {
          x = object[k];
          f(x, k);
        }
        return object;
      });
      map = curry$(function(f, object){
        var k, x, results$ = {};
        for (k in object) {
          x = object[k];
          results$[k] = f(x, k);
        }
        return results$;
      });
      compact = function(object){
        var k, x, results$ = {};
        for (k in object) {
          x = object[k];
if (x) {
            results$[k] = x;
          }
        }
        return results$;
      };
      filter = curry$(function(f, object){
        var k, x, results$ = {};
        for (k in object) {
          x = object[k];
if (f(x, k)) {
            results$[k] = x;
          }
        }
        return results$;
      });
      reject = curry$(function(f, object){
        var k, x, results$ = {};
        for (k in object) {
          x = object[k];
if (!f(x, k)) {
            results$[k] = x;
          }
        }
        return results$;
      });
      partition = curry$(function(f, object){
        var passed, failed, k, x;
        passed = {};
        failed = {};
        for (k in object) {
          x = object[k];
          (f(x, k) ? passed : failed)[k] = x;
        }
        return [passed, failed];
      });
      find = curry$(function(f, object){
        var i$, x;
        for (i$ in object) {
          x = object[i$];
          if (f(x)) {
            return x;
          }
        }
      });
      return {
        values: values,
        keys: keys,
        pairsToObj: pairsToObj,
        objToPairs: objToPairs,
        listsToObj: listsToObj,
        objToLists: objToLists,
        empty: empty,
        each: each,
        map: map,
        filter: filter,
        compact: compact,
        reject: reject,
        partition: partition,
        find: find
      };
    }();
    Str = function(){
      var split, join, lines, unlines, words, unwords, chars, unchars, reverse, repeat, capitalize, camelize, dasherize;
      split = curry$(function(sep, str){
        return str.split(sep);
      });
      join = curry$(function(sep, xs){
        return xs.join(sep);
      });
      lines = function(str){
        if (!str.length) {
          return [];
        }
        return str.split('\n');
      };
      unlines = function(it){
        return it.join('\n');
      };
      words = function(str){
        if (!str.length) {
          return [];
        }
        return str.split(/[ ]+/);
      };
      unwords = function(it){
        return it.join(' ');
      };
      chars = function(it){
        return it.split('');
      };
      unchars = function(it){
        return it.join('');
      };
      reverse = function(str){
        return str.split('').reverse().join('');
      };
      repeat = curry$(function(n, str){
        var result, i$;
        result = '';
        for (i$ = 0; i$ < n; ++i$) {
          result += str;
        }
        return result;
      });
      capitalize = function(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      camelize = function(it){
        return it.replace(/[-_]+(.)?/g, function(arg$, c){
          return (c != null ? c : '').toUpperCase();
        });
      };
      dasherize = function(str){
        return str.replace(/([^-A-Z])([A-Z]+)/g, function(arg$, lower, upper){
          return lower + "-" + (upper.length > 1
            ? upper
            : upper.toLowerCase());
        }).replace(/^([A-Z]+)/, function(arg$, upper){
          if (upper.length > 1) {
            return upper + "-";
          } else {
            return upper.toLowerCase();
          }
        });
      };
      return {
        split: split,
        join: join,
        lines: lines,
        unlines: unlines,
        words: words,
        unwords: unwords,
        chars: chars,
        unchars: unchars,
        reverse: reverse,
        repeat: repeat,
        capitalize: capitalize,
        camelize: camelize,
        dasherize: dasherize
      };
    }();
    id = function(x){
      return x;
    };
    isType = curry$(function(type, x){
      return toString$.call(x).slice(8, -1) === type;
    });
    replicate = curry$(function(n, x){
      var i$, results$ = [];
      for (i$ = 0; i$ < n; ++i$) {
        results$.push(x);
      }
      return results$;
    });
    Str.empty = List.empty;
    Str.slice = List.slice;
    Str.take = List.take;
    Str.drop = List.drop;
    Str.splitAt = List.splitAt;
    Str.takeWhile = List.takeWhile;
    Str.dropWhile = List.dropWhile;
    Str.span = List.span;
    Str.breakStr = List.breakList;
    prelude = {
      Func: Func,
      List: List,
      Obj: Obj,
      Str: Str,
      Num: Num,
      id: id,
      isType: isType,
      replicate: replicate
    };
    prelude.each = List.each;
    prelude.map = List.map;
    prelude.filter = List.filter;
    prelude.compact = List.compact;
    prelude.reject = List.reject;
    prelude.partition = List.partition;
    prelude.find = List.find;
    prelude.head = List.head;
    prelude.first = List.first;
    prelude.tail = List.tail;
    prelude.last = List.last;
    prelude.initial = List.initial;
    prelude.empty = List.empty;
    prelude.reverse = List.reverse;
    prelude.difference = List.difference;
    prelude.intersection = List.intersection;
    prelude.union = List.union;
    prelude.countBy = List.countBy;
    prelude.groupBy = List.groupBy;
    prelude.fold = List.fold;
    prelude.foldl = List.foldl;
    prelude.fold1 = List.fold1;
    prelude.foldl1 = List.foldl1;
    prelude.foldr = List.foldr;
    prelude.foldr1 = List.foldr1;
    prelude.unfoldr = List.unfoldr;
    prelude.andList = List.andList;
    prelude.orList = List.orList;
    prelude.any = List.any;
    prelude.all = List.all;
    prelude.unique = List.unique;
    prelude.uniqueBy = List.uniqueBy;
    prelude.sort = List.sort;
    prelude.sortWith = List.sortWith;
    prelude.sortBy = List.sortBy;
    prelude.sum = List.sum;
    prelude.product = List.product;
    prelude.mean = List.mean;
    prelude.average = List.average;
    prelude.concat = List.concat;
    prelude.concatMap = List.concatMap;
    prelude.flatten = List.flatten;
    prelude.maximum = List.maximum;
    prelude.minimum = List.minimum;
    prelude.maximumBy = List.maximumBy;
    prelude.minimumBy = List.minimumBy;
    prelude.scan = List.scan;
    prelude.scanl = List.scanl;
    prelude.scan1 = List.scan1;
    prelude.scanl1 = List.scanl1;
    prelude.scanr = List.scanr;
    prelude.scanr1 = List.scanr1;
    prelude.slice = List.slice;
    prelude.take = List.take;
    prelude.drop = List.drop;
    prelude.splitAt = List.splitAt;
    prelude.takeWhile = List.takeWhile;
    prelude.dropWhile = List.dropWhile;
    prelude.span = List.span;
    prelude.breakList = List.breakList;
    prelude.zip = List.zip;
    prelude.zipWith = List.zipWith;
    prelude.zipAll = List.zipAll;
    prelude.zipAllWith = List.zipAllWith;
    prelude.at = List.at;
    prelude.elemIndex = List.elemIndex;
    prelude.elemIndices = List.elemIndices;
    prelude.findIndex = List.findIndex;
    prelude.findIndices = List.findIndices;
    prelude.apply = Func.apply;
    prelude.curry = Func.curry;
    prelude.flip = Func.flip;
    prelude.fix = Func.fix;
    prelude.over = Func.over;
    prelude.split = Str.split;
    prelude.join = Str.join;
    prelude.lines = Str.lines;
    prelude.unlines = Str.unlines;
    prelude.words = Str.words;
    prelude.unwords = Str.unwords;
    prelude.chars = Str.chars;
    prelude.unchars = Str.unchars;
    prelude.repeat = Str.repeat;
    prelude.capitalize = Str.capitalize;
    prelude.camelize = Str.camelize;
    prelude.dasherize = Str.dasherize;
    prelude.values = Obj.values;
    prelude.keys = Obj.keys;
    prelude.pairsToObj = Obj.pairsToObj;
    prelude.objToPairs = Obj.objToPairs;
    prelude.listsToObj = Obj.listsToObj;
    prelude.objToLists = Obj.objToLists;
    prelude.max = Num.max;
    prelude.min = Num.min;
    prelude.negate = Num.negate;
    prelude.abs = Num.abs;
    prelude.signum = Num.signum;
    prelude.quot = Num.quot;
    prelude.rem = Num.rem;
    prelude.div = Num.div;
    prelude.mod = Num.mod;
    prelude.recip = Num.recip;
    prelude.pi = Num.pi;
    prelude.tau = Num.tau;
    prelude.exp = Num.exp;
    prelude.sqrt = Num.sqrt;
    prelude.ln = Num.ln;
    prelude.pow = Num.pow;
    prelude.sin = Num.sin;
    prelude.tan = Num.tan;
    prelude.cos = Num.cos;
    prelude.acos = Num.acos;
    prelude.asin = Num.asin;
    prelude.atan = Num.atan;
    prelude.atan2 = Num.atan2;
    prelude.truncate = Num.truncate;
    prelude.round = Num.round;
    prelude.ceiling = Num.ceiling;
    prelude.floor = Num.floor;
    prelude.isItNaN = Num.isItNaN;
    prelude.even = Num.even;
    prelude.odd = Num.odd;
    prelude.gcd = Num.gcd;
    prelude.lcm = Num.lcm;
    prelude.VERSION = '1.1.1';
    return prelude;
  });
  function curry$(f, bound){
    var context,
    _curry = function(args) {
      return f.length > 1 ? function(){
        var params = args ? args.concat() : [];
        context = bound ? context || this : this;
        return params.push.apply(params, arguments) <
            f.length && arguments.length ?
          _curry.call(context, params) : f.apply(context, params);
      } : f;
    };
    return _curry();
  }
  function in$(x, xs){
    var i = -1, l = xs.length >>> 0;
    while (++i < l) if (x === xs[i]) return true;
    return false;
  }
  function not$(x){ return !x; }
}).call(this);
