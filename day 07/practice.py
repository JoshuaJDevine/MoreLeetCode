def levelOrder(root):
    queue = [root]
    while len(queue) > 0:
        current = queue[0]
        print(current, end=' ')
        if current.left: queue += [current.left]
        if current.right: queue += [current.right]
        queue.pop(0)

def preOrder(root):
    if root is None:
        return

    result = ""
    nodeStack = []
    nodeStack.append(root)

    while(len(nodeStack) > 0):
        node = nodeStack.pop()

        result += str(node.info)
        result += " "

        if node.right is not None:
            nodeStack.append(node.right)
        if node.left is not None:
            nodeStack.append(node.left)

    print (result)


def preOrder(root):
    if root is None:
        return

    nodeStack = []
    nodeStack.append(root)

    while(len(nodeStack) > 0):
        node = nodeStack.pop()

        print (node.info, end=" ")

        if node.right is not None:
            nodeStack.append(node.right)
        if node.left is not None:
            nodeStack.append(node.left)
