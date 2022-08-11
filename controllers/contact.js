exports.getContactPage = (req, res, next) => {
    res.sendFile(path.join(viewsBasePath,"contact.html"));
}