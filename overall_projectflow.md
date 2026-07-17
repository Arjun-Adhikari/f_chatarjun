frontend/
│
├── src/
│   │
│   ├── app/                         # File-based routing
│   │   │
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # /
│   │   │
│   │   ├── (auth)/                  # Route group (not in URL)
│   │   │   ├── login/
│   │   │   │   └── page.tsx          # /login
│   │   │   │
│   │   │   └── register/
│   │   │       └── page.tsx          # /register
│   │   │
│   │   ├── dashboard/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx              # /dashboard
│   │   │   │
│   │   │   ├── chats/
│   │   │   │   └── page.tsx          # /dashboard/chats
│   │   │   │
│   │   │   └── settings/
│   │   │       └── page.tsx          # /dashboard/settings
│   │   │
│   │   ├── api/                      # Optional Next API routes
│   │   │   └── health/
│   │   │       └── route.ts
│   │   │
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   │
│   │
│   ├── components/                   # Reusable UI
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   └── Modal.tsx
│   │   │
│   │   ├── chat/
│   │   │   ├── ChatWindow.tsx
│   │   │   ├── Message.tsx
│   │   │   └── ChatInput.tsx
│   │   │
│   │   └── layout/
│   │
│   │
│   ├── services/                    # Backend API calls
│   │   ├── auth.service.ts
│   │   ├── chat.service.ts
│   │   └── user.service.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   └── useSocket.ts
│   │
│   ├── store/
│   │   └── chatStore.ts
│   │
│   ├── lib/
│   │   ├── axios.ts
│   │   └── socket.ts
│   │
│   ├── types/
│   │
│   └── utils/
│
├── public/
│
├── package.json
└── next.config.js
--------------------------------




app/
 ├── page.tsx
 ├── about/
 │    └── page.tsx
 └── users/
      └── [id]/
           └── page.tsx



creates 
/                → app/page.tsx

/about           → app/about/page.tsx

/users/123       → app/users/[id]/page.tsx

---------------------------------
A chat URL could be:
/dashboard/chat/[conversationId]


Folder:
app/
└── dashboard/
    └── chat/
        └── [conversationId]/
            └── page.tsx


-----------------------------------
            inside this 
            export default function ChatPage({
 params
}:{
 params:{conversationId:string}
}){

 return (
   <ChatWindow 
      id={params.conversationId}
   />
 )

}


----------------------------------
app/ is for routes/pages, not for everything.


app/
  → routing

components/
  → UI components

services/
  → API communication

hooks/
  → reusable React logic

store/
  → global state

lib/
  → configurations (axios, socket, etc.)

  -------------------------------------
  sambad/
│
├── frontend (Next.js)
│
├── backend (Node.js)
│
└── database (PostgreSQL)


---------------------------------------
frontend/

src/
├── app/
│   ├── dashboard/
│   │   └── chat/
│   │       └── [id]/
│   │           └── page.tsx
│
├── components/
│   ├── ui/              # shadcn components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── dialog.tsx
│   │
│   └── chat/
│       ├── ChatWindow.tsx
│       ├── Message.tsx
│       └── ChatInput.tsx
│
├── lib/
│   └── utils.ts
│
├── services/
│   └── chat.service.ts
│
└── hooks/


-----------------------------------------
For icons : lucid-react is useful
