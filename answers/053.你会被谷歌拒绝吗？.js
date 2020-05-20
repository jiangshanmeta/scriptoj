const invertTree = (tree) => {
    let index = 0;
    let count = 1;
    while(index<tree.length){
      reverse(tree,index,index+count-1);
      index += count;
      count *= 2;
    }
    return tree;
  }
  
  function reverse(arr,start,end){
    while(start<end){
      const tmp = arr[end];
      arr[end] = arr[start];
      arr[start] = tmp;
      start++;
      end--;
    }
  }