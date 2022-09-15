if (Val < node.data && node.right!=null) {
            return this.ContainsVal(Val, node.right);
        } else if (Val > node.data && node.left!=null) {
            return this.ContainsVal(Val, node.left);
        } else if (Val === node.data) {
            return true
        } else {
            return false
        }