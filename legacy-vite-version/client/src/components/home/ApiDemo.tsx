import { Link } from 'wouter';
import { BookIcon } from '@/lib/icons';

export function ApiDemo() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Developer-First Design</h2>
          <p className="text-xl text-slate-300 text-center mb-12">
            Powerful APIs, comprehensive documentation, and flexible integration options
            make RelayOS the developer's choice for communication infrastructure.
          </p>
          
          <div className="bg-slate-800 rounded-xl overflow-hidden">
            <div className="flex items-center px-4 py-2 bg-slate-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm font-mono">relayos-api-example.js</div>
            </div>
            
            <div className="p-4 font-mono text-sm code-example">
              <pre className="language-javascript">
                <code className="text-slate-300">
{`// Initialize RelayOS client with your API key
const relay = new RelayOS.Client({
  apiKey: "YOUR_API_KEY",
  channel: "support-team"
});

// Listen for new messages
relay.on("message", message => {
  console.log(\`\${message.sender}: \${message.content}\`);
  
  // Respond to commands
  if (message.content.startsWith("!help")) {
    relay.send({
      content: "Available commands: !help, !status, !escalate"
    });
  }
});

// Connect to the channel
relay.connect()
  .then(() => console.log("Connected to RelayOS!"))
  .catch(error => console.error("Connection failed:", error));`}
                </code>
              </pre>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/developers/documentation" 
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md shadow transition duration-300 gap-2"
            >
              <BookIcon /> Full API Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApiDemo;
