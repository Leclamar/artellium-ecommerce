import { Inngest } from 'inngest';
import { connectDB } from './db'; // Make sure this is your correct DB connection file
import User from '@/models/User'; // Import your User model

// Initialize Inngest
export const inngest = new Inngest({ 
  id: 'artellium-next',
  eventKey: process.env.INNGEST_EVENT_KEY // Add this if using Inngest Cloud
});

// Helper function to ensure DB connection
async function withDBConnection(fn) {
  await connectDB();
  return fn();
}

// User Sync Functions
export const userFunctions = [
  inngest.createFunction(
    {
      id: 'sync-user-from-clerk',
      name: 'Sync User Creation from Clerk',
    },
    { event: 'clerk/user.created' },
    async ({ event }) => {
      return withDBConnection(async () => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        await User.create({
          _id: id,
          email: email_addresses[0].email_address,
          name: `${first_name} ${last_name}`,
          imageUrl: image_url,
        });
      });
    }
  ),
  
  inngest.createFunction(
    {
      id: 'update-user-from-clerk',
      name: 'Sync User Updates from Clerk',
    },
    { event: 'clerk/user.updated' },
    async ({ event }) => {
      return withDBConnection(async () => {
        const { id, ...updateData } = event.data;
        await User.findByIdAndUpdate(id, {
          email: updateData.email_addresses[0].email_address,
          name: `${updateData.first_name} ${updateData.last_name}`,
          imageUrl: updateData.image_url,
        });
      });
    }
  ),

  inngest.createFunction(
    {
      id: 'delete-user-from-clerk',
      name: 'Sync User Deletion from Clerk',
    },
    { event: 'clerk/user.deleted' },
    async ({ event }) => {
      return withDBConnection(async () => {
        await User.findByIdAndDelete(event.data.id);
      });
    }
  )
];