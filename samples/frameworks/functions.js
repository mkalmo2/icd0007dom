function classifier(key) {
    const positions = new Map([
        ['position.manager', 'Manager'],
        ['position.designer', 'Designer'],
        ['position.developer', 'Developer']
    ]);

    return positions.get(key);
}
