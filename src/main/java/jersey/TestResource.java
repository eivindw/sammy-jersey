package jersey;

import com.google.common.collect.ImmutableList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("test")
@Produces(MediaType.APPLICATION_JSON + "; charset=utf-8")
public class TestResource {

   @GET
   @Path("all")
   public Object getAll() {
      return ImmutableList.of(
         "one",
         "two",
         "three"
      );
   }
}
