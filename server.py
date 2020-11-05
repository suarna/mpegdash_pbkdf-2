from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl 

class CORSRequestHandler (SimpleHTTPRequestHandler): 
    def end_headers (self): 
        self.send_header('Access-Control-Allow-Origin', '*') 
        SimpleHTTPRequestHandler.end_headers(self) 
        
httpd = HTTPServer(('localhost', 4443), CORSRequestHandler) 
httpd.socket = ssl.wrap_socket(httpd.socket, certfile='./server.pem', server_side=True) 
httpd.serve_forever()
